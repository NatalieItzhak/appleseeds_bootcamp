import React, { useState } from "react";

class Spinner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
         
        };
      
    }

    componentDidMount() {
        setTimeout(() => {
            console.log('render 1')
            this.setState({ favoriteColor: 'red' });
        }, 3000)


    }

    componentDidUpdate() {
        this.myRef.current.innerHTML= `The update favorite color is: ${this.state.favoriteColor}`
        console.log('render 2')
    }

    render() {
        return (
            <div class="loader">Loading...</div>
               
        );
    };

}

export default Spinner;
