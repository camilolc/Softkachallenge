const { response } = require("express");
const Question = require("../models/questions.model");
//GET
const questionGet = async (req, res = response) => {
  const [total, questions] = await Promise.all([
    Question.countDocuments(),
    Question.find(),
  ]);

  res.json(questions);
};
//POST
const questionPost = async (req, res = response) => {
  const data = req.body;
  const question = new Question(data);
  await question.save();
  res.json(question);
};
//PUT
const questionPut = (req, res = response) => {
  const { id } = req.params;
  const data = req.body;

  res.json({
    id,
    data,
  });
};
//DELETE
const questionDelete = (req, res = response) => {
  res.json({
    msg: "DELETE from controller",
  });
};

module.exports = {
  questionGet,
  questionPost,
  questionPut,
  questionDelete,
};
