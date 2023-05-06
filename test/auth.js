const chai = require("chai");
const chaiHttp = require("chai-http");
const { describe, it, after } = require("mocha");
const app = require("../src/server");
const should = chai.should();
chai.use(chaiHttp);
const agent = chai.request.agent(app);
const User = require("../src/models/User");

describe("User", function () {
  // login without valid account
  it("user should not be able to login if they haven't registered yet", function (done) {
    agent
      .post("/login", {
        username: "testUsername",
        password: "testPassword",
        defense: "testDefense",
      })
      .end(function (err, res) {
        res.should.have.status(401);
        done();
      });
  });

  // signup
  it("user should be able to sign up", function (done) {
    User.findOneAndDelete({ username: "testone" })
      .then(function () {
        agent
          .post("/sign-up")
          .send({
            username: "testUsername2",
            password: "testPassword",
            defense: "testDefense",
          })
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

  // login with valid account
  it("user should be able to login", function (done) {
    agent
      .post("/login")
      .send({ username: "testUsername", password: "testPassword" })
      .end(function (err, res) {
        res.should.have.status(200);
        agent.should.have.cookie("nToken");
        done();
      });
  });

  // logout
  it("user should be able to logout", function (done) {
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
