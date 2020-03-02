import React from "react";
// we use className to add classes for Bootstrap styling

function Square({ color }) { // passing in color through this parameter. Wahtever the user chooses.

    const style = { // this is a variable and the properties below are inside. Think of it as a box.
        height: 200,
        width: 200,
        backgroundColor:color
    };

    return (
        <div style={ style }></div> // the {style} is taking the properties from above.
    );
};

Square.defaultProps = { // this is default styling. If the color passed through is blank it will default to yellow.
    color: 'yellow',
    
}

export default Square;