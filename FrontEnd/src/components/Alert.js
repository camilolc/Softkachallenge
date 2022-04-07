import React from "react";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import "../index.css";
export const Alert = () => {
  const { data } = useFetch();

  return (
    <div className="animate__animated animate__fadeIn animate__slower alert	">
      <h1>You must have at least 5 questions per Level</h1>
      <h2>Questions level 1</h2>
      {data
        .filter((info) => info.level === 1)
        .map((data, index) => (
          <ul key={index}>
            <li>{data.question}</li>
          </ul>
        ))}
      <h2>Questions level 2</h2>
      {data
        .filter((info) => info.level === 2)
        .map((data, index) => (
          <ul key={index}>
            <li>{data.question}</li>
          </ul>
        ))}
      <h2>Questions level 3</h2>
      {data
        .filter((info) => info.level === 3)
        .map((data, index) => (
          <ul key={index}>
            <li>{data.question}</li>
          </ul>
        ))}
      <h2>Questions level 4</h2>
      {data
        .filter((info) => info.level === 4)
        .map((data, index) => (
          <ul key={index}>
            <li>{data.question}</li>
          </ul>
        ))}
      <h2>Questions level 5</h2>
      {data
        .filter((info) => info.level === 5)
        .map((data, index) => (
          <ul key={index}>
            <li>{data.question}</li>
          </ul>
        ))}

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
