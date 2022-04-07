const { response } = require("express");
const Score = require("../models/score.model");
//GET
const scoreGet = async (req, res = response) => {
  const [total, scores] = await Promise.all([
    Score.countDocuments(),
    Score.find(),
  ]);

  res.json(scores);
};
//POST
const scorePost = async (req, res = response) => {
  const data = req.body;
  const score = new Score(data);
  await score.save();
  res.json(score);
};
//PUT
const scorePut = (req, res = response) => {
  res.json({
    msg: "Put from controller",
  });
};
//DELETE
const scoreDelete = (req, res = response) => {
  res.json({
    msg: "DELETE from controller",
  });
};

module.exports = {
  scoreGet,
  scorePost,
  scorePut,
  scoreDelete,
};
