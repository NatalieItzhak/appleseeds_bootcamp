import { render } from '@testing-library/react';
import React from 'react';
import Button from './Button';

class Parent extends React.Component {

  state = {
      selectedColor: ''
    }

  handleBtnClick = (selectedColor) => {
  this.setState({selectedColor});
  }
  
 colorsBtn = () => {
    const colors =  ['blue','red','yellow'];
    return colors.map((color, index) => 
    <Button key={index} color={color} sendClick={this.handleBtnClick}/>)

  }

  render(){
    return (
      <div>
        {this.colorsBtn()}
        <h2>The color Selected is: {this.state.selectedColor}</h2>
      </div>
    );  
  } 
}
export default Parent;