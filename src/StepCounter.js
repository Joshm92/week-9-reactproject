import React, { Component } from "react";

class StepCounter extends Component {

    constructor(props) {
        super(props);

        this.state = {      // this is what the state will be at the beggining in this case clicked false
            counter: 0
        };

        this.handleClickIncrement = this.handleClickIncrement.bind(this); 
        this.handleClickDecrease = this.handleClickDecrease.bind(this); 
        };
        

        handleClickIncrement() {
            if (this.state.counter < this.props.max) {
                this.setState({ counter: +this.state.counter + +this.props.step })
              }
        };
            

        handleClickDecrease() {
              if (this.state.counter > 0) {
                  this.setState({ counter: +this.state.counter - +this.props.step })
              }
            
        };
   

    render() { // what it's going to do on the browser. On click we do a ternary. if it's clicked display clicked if not display not clicked.
        const { counter } = this.state;


        return (
            <>
            <button onClick={ this.handleClickDecrease }>-1</button>
            <button onClick={ this.handleClickIncrement }>+1</button>
            <p> 
                { counter }
            </p>
            </>
        );
    }
};



export default StepCounter;


