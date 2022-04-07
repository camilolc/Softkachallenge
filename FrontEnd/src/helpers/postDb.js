import axios from "axios";

export const postDb = async (state = {}, level, sizeAnsw = []) => {
  const dataTest = {
    question: state.question,
    level,
    answers: sizeAnsw,
  };

  await axios.post("http://localhost:8080/api/questions", dataTest);
};

export const postScoreDb = async (score) => {
  const postScore = { score };

  await axios.post("http://localhost:8080/api/score", postScore);
};
