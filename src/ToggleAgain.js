import React, { useState } from "react";

const ToggleAgain = ({ initial, alternate }) => {

    const [clicked, setClicked] = useState(false); ///this is creating the state and the ways we access it

        const handleClick = () => {
        setClicked(!clicked);
    }

    return (
        <>
            <button onClick={ handleClick }></button>
            <p> 
            { clicked ? alternate : initial } 
            </p>
        </>
    );
}

export default ToggleAgain;


// 1- display some stuff - deal with the stuff that's going to be seen with hard coded content

//2- update it's content to be based on something else

//3- add click handlers and what happens when you click on the element and what happens to the state when things change

//