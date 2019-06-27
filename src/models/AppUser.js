const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const AppUserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  dob: {
    type: String, 
    default: ""
  },
  address: {
    type: String,
    required: false
  },
  password: {
    type: String,
    required: true
  },
  mobile_no: {
    type: String,
    required: false
  },
  blood_group: {
    type: String,
    required: false
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = AppUser = mongoose.model("app-users", AppUserSchema);
