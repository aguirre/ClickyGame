import React from "react";
import "./Nav.css";

const Nav = props => (
  <nav className="navbar justify-content-between">
    <a href="/clicky-game/">{props.title}</a>
    <form className="form-inline">
      <div id="gameMsg">{props.gameMsg}</div>

      <div>Current Score: {props.score}</div>

      <div>Top Score: {props.topScore}</div>
    </form>
  </nav>
);

export default Nav;
