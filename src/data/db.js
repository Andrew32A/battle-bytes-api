// Requirements
require('dotenv').config();
const mongoose = require('mongoose');
const MONGODB_URI = process.env.MONGODB_URI;

// Connect to MongoDB
const mongoUri = 'mongodb://localhost/dadjokes';

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(error => console.error('Error connecting to MongoDB: ', error));

module.exports = mongoose.connection;