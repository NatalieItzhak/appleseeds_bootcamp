import React from 'react';

const Button = (props) => {
  const {color, sendClick} = props;

  function onBtnClick(){
    sendClick(color);
  }
  return (
    <button 
      onClick={onBtnClick}
      style={{backgroundColor: color}}>
      {color}
    </button>
  );
}


export default Button;