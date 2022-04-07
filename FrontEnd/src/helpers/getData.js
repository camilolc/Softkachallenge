import axios from "axios";

export const getData = async () => {
  try {
    const resp = await axios.get("http://localhost:8080/api/questions");
    const questions = await resp.data;
    const imgs = questions.map((data) => {
      return {
        id: data._id,
        question: data.question,
        level: data.level,
        answers: data.answers,
      };
    });
    return imgs;
  } catch (error) {
    console.log(error);
  }
};

export const getScores = async () => {
  try {
    const resp = await axios.get("http://localhost:8080/api/score");

    const scores = await resp.data;

    const imgs = scores.map((data) => {
      return {
        score: data.score,
      };
    });

    return imgs;
  } catch (error) {
    console.log(error);
  }
};
