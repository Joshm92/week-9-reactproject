import React, { useState } from "react";

const ClickedAgain = () => {

    const [clicked, setClicked] = useState(false);

    const updateClickedAgain = () => setClicked(true);

    return (
        <p onClick={ updateClickedAgain }>  
        { clicked ? "clicked" : "not clicked"}
        </p>
    );
}

export default ClickedAgain;