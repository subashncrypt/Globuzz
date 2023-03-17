const mongoose = require("mongoose");

const test = mongoose.Schema({
  name: {
    type: String,
    default: "Benny the Bull",
  },
  cdate: {
    type: Date,
    default: Date.now,
  },
});

const Test = new mongoose.model("test", test);

module.exports = Test;