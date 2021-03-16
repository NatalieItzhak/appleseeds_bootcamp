import React, { useState } from "react";

class LifeCycleMethod extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            favoriteColor: 'pink'
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ favoriteColor: 'red' });
        }, 1000)

    }

    componentDidUpdate() {
        const myDiv = document.querySelector('#myDiv');
        myDiv.textContent = `The update favorite color is: ${this.state.favoriteColor}`

    }

    render() {
        return (
            <div>
                <h1>
                    My favorite color is pink
                </h1>
                <div id='myDiv'></div>
            </div>
        );
    };

}

export default LifeCycleMethod;
