import React, { useState } from "react";



class Boxanimation extends React.Component {
    state = {
        status: 'hidden',
    }

    componentDidMount() {
        const newDivList = document.querySelectorAll('.box');
        setTimeout(() => {
            newDivList.forEach( (box) => {
                box.className += this.state.status;
            });
        }, 4000);
    }

    render() {
        return (
            <div className='main-cont'>
                <div className='box' style={{ width: this.props.width}}></div>
            </div>
        );
    };

}


export default Boxanimation;
