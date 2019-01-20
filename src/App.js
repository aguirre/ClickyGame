import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";

const Container = props => (
  <div className={`container${props.fluid ? "-fluid" : ""}`}>
    {props.children}
  </div>
);

const Row = props => (
  <div className={`row${props.fluid ? "-fluid" : ""}`}>{props.children}</div>
);

const Column = props => {
  const size = props.size
    .split(" ")
    .map(size => "col-" + size)
    .join(" ");
  return <div className={size}>{props.children}</div>;
};

export default App;
