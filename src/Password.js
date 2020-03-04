import React, { Component } from "react";

class Password extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: "",
        };

        this.handleChange = this.handleChange.bind(this);

    }

        handleChange(event) {
            const newValue = event.currentTarget.value;
            this.setState({ value: newValue });
        }


        calculateBackground() {
            let length = this.state.value.length;

            return length === 0 ? {} : {
                background: this.calculateColoe
            }
        }

        render() {
            const { length } = this.state.value;
            
            let color;

            if (length === 0) {
                color = ""
            } else if (length < 9) {
                color = "red";
            } else if (length < 16) {
                color = "orange";
            } else {
                color = "green";
            }

            const style = {
                backgroundColor: color
            }


            return (
                <>
                        <input style = { style} type="password" onChange={ this.handleChange }/>
                </>
            );
        }

}


export default Password;