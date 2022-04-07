const { Schema, model } = require("mongoose");

const questionSchema = Schema({
  question: {
    type: String,
    required: [true, "Question is required"],
  },

  level: {
    type: Number,
    required: [true, "level is required"],
  },

  answers: {
    type: Array,
    required: [true, "answers are required"],
  },
});
module.exports = model("Questions", questionSchema);
