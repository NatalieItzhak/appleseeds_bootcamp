import React from 'react';
class Focus extends React.Component {
    constructor(props) {
        super(props);
        this.nameInput = React.createRef();
    }
    componentDidMount() {
        this.nameInput.focus();
    }
    render() {
        return (
            <div>
                <label>Name:</label>
                <input ref={(input) => { this.nameInput = input; }} />
            </div>
        );
    }
}

export default Focus
