import React from "react";
// we use className to add classes for Bootstrap styling

const divStyle = {
    backgroundColor: 'red',
    height: 200,
    width: 200,
}

function Square () {
    return <div style={divStyle}></div>
}

export default Square;