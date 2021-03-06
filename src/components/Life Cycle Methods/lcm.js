import React, { useState } from "react";

class LifeCycleMethod extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            favoriteColor: 'pink'
        };
        this.myRef  = React.createRef()
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
            <div>
                <h1>
                    My favorite color is pink
                </h1>
                <div id='myDiv' ref={this.myRef}></div>
            </div>
        );
    };

}

export default LifeCycleMethod;
