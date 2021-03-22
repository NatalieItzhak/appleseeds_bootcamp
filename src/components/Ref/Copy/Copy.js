import React from 'react';

class Copy extends React.Component {
    constructor() {
        super()
        this.textAreaInput = React.createRef();
    }

    copyInput = () => {
        this.textAreaInput.current.select();
        document.execCommand('copy');
    }

    render() {
        return (
            <div>
                <h2>How Are You?</h2>
                <div>
                    <textarea ref={this.textAreaInput} type="text"></textarea>
                </div>
                <button onClick={this.copyInput} >COPY</button>
            </div>
        );
    }
}
export default Copy;