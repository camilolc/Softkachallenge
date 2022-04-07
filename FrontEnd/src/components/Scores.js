import React from "react";
import { useFetchScores } from "../hooks/useFetch";
import { Button, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import "../index.css";
export const Scores = () => {
  const { data } = useFetchScores();
 

  return (
    <div className="animate__animated animate__fadeInLeft">
      <Typography
        gutterBottom
        variant="h3"
        align="center"
        marginTop={10}
        color="white"
        style={{ textDecoration: "underline" }}
      >
        SCORES
      </Typography>
      <div className="score">
        <table border="1">
          <thead>
            <tr>
              <th>Attempt</th>
              <th>Score</th>
            </tr>
          </thead>

          {data.map((data, index) => (
            <thead key={index}>
              <tr>
                <td> {index+1}</td>
                <td> {data.score}</td>
              </tr>
            </thead>
          ))}
        </table>
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
    </div>
  );
};
