// import React from 'react';
// // import PropTypes from 'prop-types';
// const MyDice = ({ onClick }) => (
//   <button onClick={onClick}>dis My Dice</button>
// );

// export default MyDice; 

import React from 'react';

// const MyDice = ({ onClick }) => (

class MyDice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 7,
    };
  }

  generateRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  render() {
    return (
      <button
        className="myDice"
        onClick={
          () => this.setState(
            { value: this.generateRandom(1, 6) }
          )
        }>
        {this.state.value}
      </button>
    );
  }
}

export default MyDice;