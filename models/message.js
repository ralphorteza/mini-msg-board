const { DateTime, Duration } = require("luxon");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  text: { type: String, required: true, maxLength: 250},
  user: { type: String, required: true, maxLength: 15},
  timestamp: { type: Date },
});

MessageSchema.virtual("url").get(function () {
  return `/${this._id}`;
})

module.exports = mongoose.model("Message", MessageSchema);