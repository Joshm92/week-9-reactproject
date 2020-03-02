import React from "react";
// we use className to add classes for Bootstrap styling

const Paragraph = ({ children }) => (

    <p>
        { children }
    </p>

);

Paragraph.defaultProps = {
   children: "Hello, world"
    };


export default Paragraph;