const mongoose = require("mongoose");
const { replySchema } = require("./reply");

const threadSchema = new mongoose.Schema({
  text: { type: String, required: true },
  delete_password: { type: String, required: true },
  created_on: { type: Date, default: new Date() },
  bumped_on: { type: Date, default: new Date() },
  reported: { type: Boolean, default: false },
  replies: [
    {
      type: replySchema,
    },
  ],
});

const Thread = mongoose.model("Thread", threadSchema);

module.exports = {
  Thread,
  threadSchema,
};
