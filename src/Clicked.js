import React, { Component } from "react";

class Clicked extends Component {

    constructor(props) {
        super(props);

        this.state = {      // this is what the state will be at the beggining in this case clicked false
            clicked:false,
        };

        this.handleClick = this.handleClick.bind(this); 
    }
        
        handleClick() {
            this.setState({ clicked:!this.state.clicked }) // this is what happens when its clicked in this case clicked.
        }

    render() { // what it's going to do on the browser. On click we do a ternary. if it's clicked display clicked if not display not clicked.
        let {clicked} = this.state;

        return (
            <p onClick={ this.handleClick }>  
            { clicked ? "clicked" : "not clicked"}
            </p>
        );
    }
}


export default Clicked;