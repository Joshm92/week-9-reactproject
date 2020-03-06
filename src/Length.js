import React, { Component } from "react";

class Length extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: "default input"
        };

        this.handleChange = this.handleChange.bind(this);

    }

        handleChange(e) {
            this.setState({ value: e.currentTarget.value });
        }

        render() {
            const { value } = this.state;
            return (
                <form className="form-control">
                        <p>Length: {value.length}</p>
                        <input className="form-control" onChange={e => this.handleChange(e)}
                        value={ value}/>
                </form>
            );
        }

}


export default Length;