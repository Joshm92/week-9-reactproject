import React, { useState } from "react";

const CounterAgain = ({initial, max}) => {

    const [count, setCount] = useState(initial);


        const handleClickAdd = () => {
           if (count < max) {
               setCount( count + 1 )
           }
        }

        const handleClickMinus = () => {
            if (count > 0) {
                setCount( count - 1 )
            }
        }

    return (
        <>
            <p> {count} </p>
            <button onClick={ handleClickAdd }> + </button>
            <button onClick={ handleClickMinus }> - </button>
        </>
    );

}




export default CounterAgain;