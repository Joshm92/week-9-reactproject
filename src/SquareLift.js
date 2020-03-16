import React, { Component } from "react";

class SquareChild extends Component {

    render() {
        return (
            <>
                <div 
                onClick={() => this.props.onChange(this.props.color)}
                style = {
                    { 
                        width: 200, 
                        height: 200, 
                        backgroundColor: this.props.selected ? this.props.color : "gray", 
                        margin: 5,
                    }
                }/>

            </>
        );
    }

}


// ################################################## 


class SquareParent extends Component {

   constructor(props) {
       super(props);
       this.state = { currentColor: "green" };

       this.handleChangeColor=this.handleChangeColor.bind(this)
   }

    handleChangeColor (color){
        this.setState({currentColor: color})
    }

    render(){
    return (
                <>
                    <p> TRAFFIC LIGHT SIMULATOR </p>
                    <SquareChild onChange={this.handleChangeColor} selected={this.state.currentColor === "red"} color = "red" />
                    <SquareChild onChange={this.handleChangeColor} selected={this.state.currentColor === "orange"} color = "orange"/>
                    <SquareChild onChange={this.handleChangeColor} selected={this.state.currentColor === "green"} color = "green"/>
                </>
            );
    }
}

export default SquareParent;