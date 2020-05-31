// We import our Dice.css file here
import './dice_Side_Images/Dice.css';
// import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
// import MyInput from '../../MyInput/MyInput';
// import dieIMG1 from './dice_Side_Images/dice_1.jpg';
// import dieIMG2 from './dice_Side_Images/dice_2.jpg';
// import dieIMG3 from './dice_Side_Images/dice_3.jpg';
// import dieIMG4 from './dice_Side_Images/dice_4.jpg';
// import dieIMG5 from './dice_Side_Images/dice_5.jpg';
// import dieIMG6 from './dice_Side_Images/dice_6.jpg';

export default class Dice extends PureComponent {
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
        className={"die" + this.state.value}
        // onClick={() => alert('click')}>
        onClick={() => this.setState({ value: this.generateRandom(1, 6) })}>
        {this.state.value}
      </button>
    );
  }
}

