import React, { Component } from "react";
// we use className to add classes for Bootstrap styling

class Paragraph extends Component {
    render() {
        return <p>{ this.props.children }</p>;
    }
}



Paragraph.defaultProps = {
   children: "Hello Hello Hello"
    };


export default Paragraph;