import React, { Component } from "react";
// we use className to add classes for Bootstrap styling

class App extends Component {
    
}

const Paragraph = ({ children }) => (

    <p>
        { children }
    </p>

);

Paragraph.defaultProps = {
   children: "Hello, world"
    };


export default Paragraph;