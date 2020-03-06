import React, { Component } from "react";

class Temperature extends Component {
    constructor(props) {
        super(props);

        this.state = {
            celcius: 0,
            fahrenheit: 32,
        };

            this.handleChangeCelcius = this.handleChangeCelcius.bind(this);
            this.handleChangeFahrenheit = this.handleChangeFahrenheit.bind(this);
    }   

        handleChangeCelcius(event) { 
            let value = +event.currentTarget.value;
            this.setState({
                celcius: value,
                fahrenheit: (value * 1.8 + 32).toFixed(2),
            });

        }

        handleChangeFahrenheit(event) { 
            let value = +event.currentTarget.value;
            this.setState({
                fahrenheit: value,
                celcius: ((value - 32) / 1.8).toFixed(2),
            });

        }



        render() {
            return (
                <form>
                    <label>Celcius</label>
                        <input type="number" value={this.state.celcius} onChange={ this.handleChangeCelcius }/>
                    <label>Fahrenheit</label>
                        <input type="number" value={this.state.fahrenheit} onChange={ this.handleChangeFahrenheit }/>
                </form>
        );
    }

}















export default Temperature;
