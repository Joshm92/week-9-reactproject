import React, { useState } from "react";

const SquareAgain = (props) => {

    const [color, setColor] = useState("green");

    const changeColor = () => {
        color === props.color ? setColor("green") : setColor(props.color)
    }

    return (
        <>
            <div onClick={ changeColor } style={{
                height: 200,
                width: 200,
                backgroundColor: color } }></div> 
        </>
    );
        
}

    SquareAgain.defaultProps = { 
        color: 'hotpink',
    }

    export default SquareAgain;