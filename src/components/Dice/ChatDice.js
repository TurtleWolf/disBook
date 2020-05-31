// We import our Dice.css file here
import './Dice.css';
// import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import MyInput from '../MyInput/MyInput';
import dieIMG1 from './dice_Side_Images/dice_1.jpg';
import dieIMG2 from './dice_Side_Images/dice_2.jpg';
import dieIMG3 from './dice_Side_Images/dice_3.jpg';
import dieIMG4 from './dice_Side_Images/dice_4.jpg';
import dieIMG5 from './dice_Side_Images/dice_5.jpg';
import dieIMG6 from './dice_Side_Images/dice_6.jpg';

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  generateRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  render() {
    return (
      <button
        className="square"
        // onClick={() => alert('click')}>
        onClick={() => this.setState({ value: this.generateRandom(1, 6) })}>
        <img
          src={"dieIMG" + this.state.value}
          alt={this.state.value}
          width="100%"
          height="100%"
        ></img>
        {/* {this.state.value} */}
      </button>
    );
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i} />;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
          {this.renderSquare(4)}
        </div>
        <MyInput></MyInput>
      </div>
    );
  }
}

class MyTacToe extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

export default class Dice extends PureComponent {
  static propTypes = {

  };

  render() {
    return (
      <MyTacToe>

      </MyTacToe>
    );
  }
}
