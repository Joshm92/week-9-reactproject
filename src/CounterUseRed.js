import React, { useReducer, useState } from "react"



const reducer = (state, action) => { // REDUCER FUNCTION ALWAYS GOES OUTSIDE OF THE COMPONENET. IT RUNS WHEN WE CALL THE DISPATCH BELOW
    switch (action.type) {

        case 'ADD' : 
        return {
            ...state, // this is the most up to date version of the state NOT the initial state
            counter: state.counter >= state.max ? state.max : state.counter +1 
        }


        case 'MINUS' : 
        return {
            ...state,
            counter: state.counter <= 0 ? 0 : state.counter -1
        }

        default: return state;
    }
}



const CounterUseRed = ({initial,max}) => {

    const initialState = {
        counter:initial,
        max: max
        }; // initial state is never going to change

    const [state, dispatch] = useReducer(reducer,initialState);

    const handleClickAdd = () => {
        dispatch({ type: 'ADD' })
    }

    const handleClickMinus = () => {
        dispatch({ type: 'MINUS', by:1}) // THIS IS JUST SENDING A MESSAGE TO THE REDUCER
    }

    return (
        <>
            <p> { state.counter } </p>
            <button onClick={ handleClickAdd }> + </button>
            <button onClick={ handleClickMinus }> - </button>
        </>
    
    );


}



export default CounterUseRed;