const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  exp: {
    type: String,
  },
  patients: {
    type: Array,
    default: [],
  },
  today: {
    type: Array,
    default: [],
  },
  tomorrow: {
    type: Array,
    default: [],
  },

  email: {
    type: String,

    unique: true,
  },
  mobile: {
    type: Number,
    required: true,
  },
  specialisation: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Doctor = mongoose.model("Doctor", doctorSchema);

module.exports = Doctor;
