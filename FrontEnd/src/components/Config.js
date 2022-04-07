import React, { useState } from "react";
import { postDb } from "../helpers/postDb";
import { useForm } from "../hooks/useForm";
import { NavLink } from "react-router-dom";
import {
  Button,
  InputLabel,
  Box,
  MenuItem,
  FormControl,
  Select,
  Grid,
  TextField,
  Card,
  CardContent,
  Typography,
} from "@mui/material";

import "../index.css";
//select

//
export const Config = () => {
  //Setting the select input
  const [level, setLevel] = useState("");
  //Handling the select input
  const handleChange = (event) => {
    setLevel(event.target.value);
  };
  //Setting the index of answers state(boolvalue)
  const [answer, setAnswer] = useState("");
  //Answers state default value
  let v = [false, false, false, false];
  //Handling the index of answers state(boolvalue)
  const handleAnswerChange = (event) => {
    setAnswer(event.target.value);
  };
  //Saving asnwers
  const isDis = () => {
    if (
      state.answer1 === "" ||
      state.answer2 === "" ||
      state.answer3 === "" ||
      state.answer4 === "" ||
      answer === ""
    ) {
      return true;
    } else return false;
  };
  //Saving the whole array
  const [sizeAnsw, setSizeAnsw] = useState([]);
  //Shoing/Hidding buttons active state
  const [show, setShow] = useState(true);
  //Onchange values
  const [state, reset, handleInputChange] = useForm({
    question: "",
    answer1: "",
    answer2: "",
    answer3: "",
    answer4: "",
  });
  //Posting the whole questions
  const handleSubmit = (e) => {
    e.preventDefault();
    postDb(state, level, sizeAnsw);
    setSizeAnsw([]);
    reset();
    setShow(!show);
  };
  //Handling answers state
  const addAnswer = (e) => {
    v[answer] = true;
    e.preventDefault();

    setSizeAnsw([
      {
        answer1: state.answer1,
        correct: v[0],
      },
      {
        answer2: state.answer2,
        correct: v[1],
      },
      {
        answer3: state.answer3,
        correct: v[2],
      },
      {
        answer4: state.answer4,
        correct: v[3],
      },
    ]);
    setShow(false);
  };

  return (
    <>
      <div className="config">
        <Typography
          gutterBottom
          variant="h2"
          align="center"
          marginTop={10}
          color="white"
          style={{
            textDecoration: "underline",
          }}
        >
          CONFIG THE GAME
        </Typography>

        <Grid marginBottom={10}>
          <Card
            style={{
              maxWidth: 350,
              padding: "20px 5px",
              margin: "20px auto",
              color: "#D35400",
            }}
          >
            <CardContent className="animate__animated animate__flipInX">
              <Typography gutterBottom variant="h5" align="center">
                Create your question
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                gutterBottom
              ></Typography>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={1}>
                  <Grid xs={12} sm={7} item>
                    <TextField
                      type="text"
                      name="question"
                      required={true}
                      placeholder="Set your question"
                      value={state.question}
                      onChange={handleInputChange}
                    />
                  </Grid>
                  <Grid xs={12} sm={6} item>
                    <Box sx={{ minWidth: 120 }}>
                      <FormControl sx={{ m: 0, minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-label">
                          Level
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          required={true}
                          value={level}
                          label="Select level"
                          onChange={handleChange}
                        >
                          <MenuItem value={1}>Level 1</MenuItem>
                          <MenuItem value={2}>Level 2</MenuItem>
                          <MenuItem value={3}>Level 3</MenuItem>
                          <MenuItem value={4}>Level 4</MenuItem>
                          <MenuItem value={5}>Level 5</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required={true}
                      type="text"
                      name="answer1"
                      placeholder="Answer 1"
                      value={state.answer1}
                      onChange={handleInputChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      type="text"
                      name="answer2"
                      required={true}
                      placeholder="Answer 2"
                      value={state.answer2}
                      onChange={handleInputChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      type="text"
                      name="answer3"
                      required={true}
                      placeholder="Answer 3"
                      value={state.answer3}
                      onChange={handleInputChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      type="text"
                      name="answer4"
                      required={true}
                      placeholder="Answer 4"
                      value={state.answer4}
                      onChange={handleInputChange}
                    />
                  </Grid>

                  <Grid xs={12} sm={6} item>
                    <span>Select your correct answer</span>
                    <Box sx={{ minWidth: 120 }}>
                      <FormControl sx={{ m: 0, minWidth: 200 }}>
                        <InputLabel id="demo-simple-select-label">
                          Answer
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          required={true}
                          value={answer}
                          label="Select level"
                          onChange={handleAnswerChange}
                        >
                          <MenuItem value={0}>{state.answer1}</MenuItem>
                          <MenuItem value={1}>{state.answer2}</MenuItem>
                          <MenuItem value={2}>{state.answer3}</MenuItem>
                          <MenuItem value={3}>{state.answer4}</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      onClick={addAnswer}
                      disabled={isDis()}
                      variant="outlined"
                      type="submit"
                    >
                      Add answer
                    </Button>
                  </Grid>
                  <Grid item xs={12}>
                    <span>Send the new question when it's ready</span>
                  </Grid>
                </Grid>
                <Button type="submit" disabled={show} variant="outlined">
                  Send
                </Button>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </div>

      <div className="finish">
        <Button
          size="large"
          variant="contained"
          style={{
            background: "linear-gradient(50deg, #46423d, #776d66,)",
          }}
        >
          <NavLink
            style={{ color: "white", textDecoration: "none" }}
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/home"
          >
            Home
          </NavLink>
        </Button>
      </div>
    </>
  );
};
