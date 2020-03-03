import React, { Component} from "react";


class Square extends Component {

    constructor(props) {
        super(props);

        this.state = {
            clicked:false, 
        };

        this.handleClick = this.handleClick.bind(this);
    }

        handleClick() {
            this.setState({ clicked:!this.state.clicked})
        }

    render(){
        let {clicked} = this.state;
        let {color} = this.props;


        const style = { // this is a variable and the properties below are inside. Think of it as a box.
            height: 200,
            width: 200,
            backgroundColor: clicked ? color : "orange"

        };

        return (
            <div onClick={ this.handleClick } style={ style }></div> 
        );
            
        }

   
}

Square.defaultProps = { 
    color: 'hotpink',
}










// function Square({ color }) { // passing in color through this parameter. 

//     const style = { // this is a variable and the properties below are inside. Think of it as a box.
//         height: 200,
//         width: 200,
//         backgroundColor:color
//     };

//     return (
//         <div style={ style }></div> // the {style} is taking the properties from above.
//     );
    
// };

// Square.defaultProps = { // this is default styling. If the color passed through is blank it will default to yellow.
//     color: 'green',
    
// }

export default Square;