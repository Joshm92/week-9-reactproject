// import React, { useReducer, useState } from "react"

// const ClickedUseRed = () => {

//     const initialState = { clicked: false }; // setting the initial state how it starts

//     const reducer = (state, action) => { // reducer takes state and action
//         switch (action.type) { // takes the value of action type below
//             case 'CLICK': return { // runs through each case
//                 ...state, // this takes the state how it CURRENTLY is
//                 clicked: true // changes/updates clicked to true
//             }
//         }
//     }

    
//     const [state, dispatch] = useReducer(reducer,initialState); // dispatch is a function given to by usereducer and we provide it a action and it takes care of calling the reducer for us. Where we write state its always the state as it currently is.

//     const handleClick = () => {
//         dispatch({ type: 'CLICK' }); // dispatch will call the reducer with the state and the action. we provide dispatch with an action. and that gets passed to action above on the reducer function
//     };

//     return (
//         <p onClick={ handleClick }> {state.clicked ? 'Clicked' : 'Click Me'} </p> // state.clicked is always the current value
//     )

// }

// export default ClickedUseRed;


// state is good for filling out a form
// reducer should be used with things with three or more values





import React, { useReducer } from 'react';

//REDUCER - THIS RETURNS THE UPDATED STATE THAT GETS CALLED LATER ON
const reducer = (state, action) => {
    switch(action.type) {
        case 'CLICKED' : return {
            ...state,
            clicked:true
        };

        // WE SHOULD ALWAYS RETURN DEFAULT STATE IF THERE IS AN ACTION THE COMPONENT DOESN'T UNDERSTAND
        default: return state; 
    }
}

//COMPONENT NAME FOLLOWED BY FUNCTION
const ClickedUseRed = () => {

    // HERE WE SET THE INITIAL STATE. THIS IS WHAT IT STARTS OFF WITH. THIS CASE IT'S NOT CLICKED. WE'LL BE CHANGING THAT LATER
    const initialState = { 
        clicked:false,
    }

    // 
    const [state, dispatch] = useReducer(reducer, initialState);

    // THIS IS OUR CLICK HANDLER. WHAT HAPPENS WHEN WE CLICK. WE'RE CALLING THE TYPE WE MADE ABOVE WHICH WILL CHANGE CLICKED TO TRUE.
    const handleClick = () => {
        dispatch({ type: 'CLICKED' }) // DISPATCH FOLLOWED BY ACTION TYPE THAT WE SET ABOVE IN THE REDUCER.
    };

    // THIS IS OUR RETURN. THIS IS WHAT WE SEE - IN THIS CASE A PARAGRAPH. WITHIN THIS <p> WE CALL OUR HANDLECLICK THAT WE MADE ABOVE TO SAY WHAT WILL HAPPEN WHEN WE CLICK. NEXT WE HAVE A TERNARY STATEMENT THAT 
    return (
        <>
            <p onClick={ handleClick }>{state.clicked ? 'Clicked' : 'Click Me'}</p>
        </>
    );

};

export default ClickedUseRed; // 2 - ALWAYS EXPORT THE COMPONENT. IT WON'T WORK OTHERWISE.