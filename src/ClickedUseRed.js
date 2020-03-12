import React, { useReducer, useState } from "react"

const ClickedUseRed = () => {

    const initialState = { clicked: false }; // setting the initial state how it starts

    const reducer = (state, action) => { // reducer takes state and action
        switch (action.type) { // takes the value of action type below
            case 'CLICK': return { // runs through each case
                ...state, // this takes the state how it CURRENTLY is
                clicked: true // changes clicked to true
            }
        }
    }

    
    const [state, dispatch] = useReducer(reducer,initialState); // dispatch is a function given to by usereducer and we provide it a action and it takes care of calling the reducer for us. Where we write state its always the state as it currently is.

    const handleClick = () => {
        dispatch({ type: 'CLICK' }); // dispatch will call the reducer with the state and the action. we provide dispatch with an action. and that gets passed to action above on the reducer function
    };

    return (
        <p onClick={ handleClick }> {state.clicked ? 'Clicked' : 'Click Me'} </p> // state.clicked is always the current value
    )

}

export default ClickedUseRed;


//state is good for filling out a form
// reducer should be used with things with three or more values