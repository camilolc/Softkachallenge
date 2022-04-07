import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { Button } from "@mui/material";
import { postScoreDb } from "../helpers/postDb";
import { Alert } from "../components/Alert";
import "../index.css";
export const Game = () => {
  //Fetching the DB
  const { data } = useFetch();
  //Validating if there are at least 5 questions per level
  const validateNumberQuestions = () => {
    const nivel1 = data.filter((info) => info.level === 1);
    const nivel2 = data.filter((info) => info.level === 2);
    const nivel3 = data.filter((info) => info.level === 3);
    const nivel4 = data.filter((info) => info.level === 4);
    const nivel5 = data.filter((info) => info.level === 5);
    if (
      nivel1.length < 5 ||
      nivel2.length < 5 ||
      nivel3.length < 5 ||
      nivel4.length < 5 ||
      nivel5.length < 5
    ) {
      return true;
    } else {
      return false;
    }
  };

  let realQuestion = {};

  //Setting the level
  const [level, setLevel] = useState(1);
  //Setting the prize
  const [prize, setPrize] = useState(200);
  //Setting the Score
  const [score, setScore] = useState(0);
  //Hidding the game
  const [show, setShow] = useState(false);
  //Setting the new level
  const handleLevel = (isCorrect) => {
    if (isCorrect) {
      setLevel(level + 1);
      setScore(score + prize);
      setPrize(level !== 5 ? prize + 200 : "You have won");
    } else {
      setShow(!show);
    }
  };
  //Separating questions per level
  const selectQuestion = () => {
    const question = data.filter((info) => info.level === level);
    realQuestion = question[Math.floor(Math.random() * question.length)];

    return realQuestion;
  };
  //Posting the score in score collection of DB
  const postScore = (e) => {
    e.preventDefault();
    postScoreDb(score);
  };

  return (
    <>
      {validateNumberQuestions() ? (
        <Alert />
      ) : (
        <div>
          <div hidden={show}>
            <div className="questions animate__animated animate__backInDown">
              <h1 className="title">
                {level !== 6 ? `Questions level ${level}` : "Game finished"}
              </h1>

              <h1 className="prize">
                {level !== 6 && "This Round Prize: +"}
                {prize}
              </h1>
              {selectQuestion() !== undefined && (
                <div>
                  <h1 className="answer">Question: {realQuestion.question}</h1>
                  <span>Select your answer:</span>

                  <div className="buttons">
                    <div className="space">
                      <Button
                        variant="contained"
                        style={{
                          background:
                            "linear-gradient(50deg, #46423d, #776d66)",
                        }}
                        onClick={() =>
                          handleLevel(realQuestion.answers[0].correct)
                        }
                      >
                        {realQuestion.answers[0].answer1}
                      </Button>
                    </div>
                    <div className="space">
                      <Button
                        variant="contained"
                        style={{
                          background:
                            "linear-gradient(50deg, #46423d, #776d66)",
                        }}
                        onClick={() =>
                          handleLevel(realQuestion.answers[1].correct)
                        }
                      >
                        {realQuestion.answers[1].answer2}
                      </Button>
                    </div>
                    <div className="space">
                      <Button
                        variant="contained"
                        style={{
                          background:
                            "linear-gradient(50deg, #46423d, #776d66)",
                        }}
                        onClick={() =>
                          handleLevel(realQuestion.answers[2].correct)
                        }
                      >
                        {realQuestion.answers[2].answer3}
                      </Button>
                    </div>
                    <div className="space">
                      <Button
                        variant="contained"
                        style={{
                          background:
                            "linear-gradient(50deg, #46423d, #776d66)",
                        }}
                        onClick={() =>
                          handleLevel(realQuestion.answers[3].correct)
                        }
                      >
                        {realQuestion.answers[3].answer4}
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <h1
            className="animate__animated animate__bounceIn lose"
            hidden={!show}
          >
            YOU LOSE!
          </h1>
          <div className="finish">
            <h1 className="scorePoint">Your Score: {score}</h1>

            <Button
              size="large"
              variant="contained"
              onClick={postScore}
              style={{
                background: "linear-gradient(50deg, #46423d, #776d66,)",
              }}
            >
              <NavLink
                style={{ color: "white", textDecoration: "none" }}
                exact
                to="/home"
              >
                Leave
              </NavLink>
            </Button>
          </div>
        </div>
      )}
    </>
  );
};
