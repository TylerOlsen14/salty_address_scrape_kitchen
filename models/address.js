const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const AddressSchema = new Schema({
  name: String,
  address: String,
  url: String,
})

module.exports = Address = mongoose.model('ReactApp', AddressSchema);