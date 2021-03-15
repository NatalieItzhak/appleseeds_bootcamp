import React from 'react';

class Showbox extends React.Component {
  
  constructor(){
    super();
    this.state = {whereIsTheBox: true}
  }

  showOrHideBox = () => {
    this.setState({whereIsTheBox: (!this.state.whereIsTheBox)});
  }
  
  render(){
    return (
      <div className="cont">
        <button onClick={this.showOrHideBox}>Show/ Hide</button>
        {!this.state.whereIsTheBox && <div className="box"></div>}
      </div>
    );
  }
}


export default Showbox;