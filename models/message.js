const { DateTime, Duration } = require("luxon");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  text: { type: String, required: true, maxLength: 250},
  user: { type: String, required: true, maxLength: 15},
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Message", MessageSchema);