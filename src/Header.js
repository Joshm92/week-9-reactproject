import React, { Component } from "react";
// we use className to add classes for Bootstrap styling

class Header extends Component {
    render() {
        return <div className="jumbotron jumbotron-fluid">
        <div className="container"> <h1 className="display-4">{ this.props.text }</h1>
        </div>
</div>
    }
}



export default Header;



