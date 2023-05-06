const chai = require("chai");
const chaiHttp = require("chai-http");
const { describe, it, after } = require("mocha");
const app = require("../src/server");

const should = chai.should();

chai.use(chaiHttp);

// Agent that will keep track of our cookies
const agent = chai.request.agent(app);

const User = require("../src/models/User");

describe("User", function () {
  // No login if not registered
  it("should not be able to login if they have not registered", function (done) {
    agent
      .post("/login", { username: "testUsername", password: "testPassword", defense: "testDefense" })
      .end(function (err, res) {
        res.should.have.status(401);
        done();
      });
  });

  // Signup
  it("should be able to signup", function (done) {
    User.findOneAndDelete({ username: "testone" })
      .then(function () {
        agent
          .post("/sign-up")
          .send({ username: "testUsername", password: "testPassword", defense: "testDefense" })
          .end(function (err, res) {
            res.should.have.status(200);
            agent.should.have.cookie("nToken");
            done();
          });
      })
      .catch(function (err) {
        done(err);
      });
  });

  // Login
  it("should be able to login", function (done) {
    agent
      .post("/login")
      .send({ username: "testUsername", password: "testPassword"})
      .end(function (err, res) {
        res.should.have.status(200);
        agent.should.have.cookie("nToken");
        done();
      });
  });

  // Logout
  it("should be able to logout", function (done) {
    agent.get("/logout").end(function (err, res) {
      res.should.have.status(200);
      agent.should.not.have.cookie("nToken");
      done();
    });
  });

  after(function () {
    return User.findOneAndDelete({ username: "testone" });
  });
});