import React, { Component } from "react";
// we use className to add classes for Bootstrap styling

class Header extends Component {
    render() {
        return <h1>{ this.props.text }</h1>;
    }
}



export default Header;