import React from "react";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import "../index.css";

export const NavBar = () => {
  return (
    <>
      <div className="menu animate__animated animate__fadeIn">
        <h1 className="title">
          <span className="p">Soft</span> <span className="f">Ka</span> Game
          Challenge
        </h1>
        <Button variant="primary">
          <NavLink
            style={{ color: "white", textDecoration: "none" }}
            className="button"
            exact
            to="/game"
          >
            Start Game
          </NavLink>
        </Button>
        <Button variant="primary">
          <NavLink
            style={{ color: "white", textDecoration: "none" }}
            className="button"
            exact
            to="/config"
          >
            Config Game
          </NavLink>
        </Button>
        <Button variant="primary">
          <NavLink
            style={{ color: "white", textDecoration: "none" }}
            className="button"
            exact
            to="/score"
          >
            Scores
          </NavLink>
        </Button>
      </div>
      <h1 className="name">CAMILO LOPEZ</h1>
    </>
  );
};
