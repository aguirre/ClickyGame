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

function shuffleFriends(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

class App extends Component {
  state = {
    friends,
    currentScore: 0,
    topScore: 0,
    gameMsg: "",
    clicked: []
  };

  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.handleReset();
    }
  };

  handleIncrement = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
      gameMsg: ""
    });
    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });
    } else if (newScore === 12) {
      this.setState({ gameMsg: "You win!" });
    }
    this.handleShuffle();
  };

  handleReset = () => {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      gameMsg: "Game Over!",
      clicked: []
    });
    this.handleShuffle();
  };

  handleShuffle = () => {
    let shuffledFriends = shuffleFriends(friends);
    this.setState({ friends: shuffledFriends });
  };

  render() {
    return (
      <Wrapper>
        <Nav
          title={<img src="https://i.imgur.com/4uyo9eS.png" alt="banner" />}
          score={this.state.currentScore}
          topScore={this.state.topScore}
          gameMsg={this.state.gameMsg}
        />

        <Title>Click on each character without hitting any duplicates!</Title>

        <Container>
          <Row>
            {this.state.friends.map(friend => (
              <Column size="md-3 sm-6" key={friend.id}>
                <FriendCard
                  handleClick={this.handleClick}
                  handleIncrement={this.handleIncrement}
                  handleReset={this.handleReset}
                  handleShuffle={this.handleShuffle}
                  id={friend.id}
                  image={friend.image}
                />
              </Column>
            ))}
          </Row>
        </Container>
      </Wrapper>
    );
  }
}

export default App;
