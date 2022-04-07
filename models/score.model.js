const { Schema, model } = require("mongoose");

const scoreSchema = Schema({
  score: {
    type: Number,
  },
});
module.exports = model("Scores", scoreSchema);
