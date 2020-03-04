import React, { Component } from "react";

class Catch extends Component {

    constructor(props) {
        super(props);

        this.state = {      // this is what the state will be at the beggining in this case clicked false
            position: 0,
        };

        this.handleClick = this.handleClick.bind(this); 
    }
        
        handleClick() {
                this.setState({ position: this.state.position + this.props.jump })

        }

        render() { 
            let divStyle = {
        
                position: 'relative',
                top: this.state.position // using this in a template literal
            };
      
        return (
            <>
            <button onClick={ this.handleClick } style={ divStyle }>Catch Me If You Can</button>
            </>
              );
          }
      };







export default Catch;