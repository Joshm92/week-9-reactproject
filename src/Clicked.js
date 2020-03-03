import React, { Component } from "react";

class Clicked extends Component {

    constructor(props) {
        super(props);

        this.state = {      //what it will be at the beggining
            clicked:false,
        };

        this.handleClick = this.handleClick.bind(this); 
    }
        
        handleClick() {
                this.setState({ clicked:!this.state.clicked }) // this is what haoppens when its clicked.
              }
   

    render() { // what it's going to do on the browser
        let {clicked} = this.state;

        return (
            <p onClick={ this.handleClick }> 
            { clicked ? "clicked" : "not clicked"}
            </p>
        );
    }
}


export default Clicked;