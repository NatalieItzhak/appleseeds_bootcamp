import React, { Component } from 'react';




class Select extends Component {
    render() {
        return (
            <label

                className="input"
            >   
                {this.props.label}
                <select 
                    name={this.props.name}
                    onChange={this.props.onChange}
                >
					<option>{this.props.value || `Select Age:`}</option>
					<option value="0-15">0-15</option>
					<option value="15-30">15-30</option>
					<option value="30-45">30-45</option>
					<option value="45-60">45-60</option>
					<option value="60+">60+</option>
			
                </select>
            </label>
        );
    }
}

export default Select;