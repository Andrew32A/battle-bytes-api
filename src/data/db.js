// Requirements
require('dotenv').config();
const mongoose = require('mongoose');
const MONGODB_URI = process.env.MONGODB_URI;

const ATLAS_USER = process.env.ATLAS_USER;
const ATLAS_PASSWORD = process.env.ATLAS_PASSWORD;
const ATLAS_URI = process.env.ATLAS_URI;

// Connect to MongoDB
const mongoUri = `mongodb+srv://${ATLAS_USER}:${ATLAS_PASSWORD}${ATLAS_URI}`;

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(error => console.error('Error connecting to MongoDB: ', error));

module.exports = mongoose.connection;