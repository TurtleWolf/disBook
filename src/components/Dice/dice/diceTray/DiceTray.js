// We import our Dice.css file here
// import './DiceTray.css';
// import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import MyInput from '../../../MyInput/MyInput';
// import dieIMG1 from './dice_Side_Images/dice_1.jpg';
// import dieIMG2 from './dice_Side_Images/dice_2.jpg';
// import dieIMG3 from './dice_Side_Images/dice_3.jpg';
// import dieIMG4 from './dice_Side_Images/dice_4.jpg';
// import dieIMG5 from './dice_Side_Images/dice_5.jpg';
// import dieIMG6 from './dice_Side_Images/dice_6.jpg';
import Dice from './dice/Dice';

export default class DiceTray extends PureComponent {
  static propTypes = {

  };

  renderDice(i) {
    return <Dice value={i} />;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderDice(0)}
          {this.renderDice(1)}
          {this.renderDice(2)}
          {this.renderDice(3)}
          {this.renderDice(4)}
        </div>
        <MyInput></MyInput>
      </div>
    );
  }
}
