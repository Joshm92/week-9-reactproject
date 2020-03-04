import React from 'react';
import './App.css';
import Header from "./Header.js";
import Paragraph from "./Paragraph.js";
import Square from "./Square.js";
import People from "./People.js";
import Clicked from "./Clicked.js";
import Toggle from "./Toggle.js";
import Counter from "./Counter.js";
import StepCounter from "./StepCounter.js"
import Catch from "./Catch.js"

let Stuff = ( {square} ) => (
    <>
    <Header text="Hello, world!" />
    <Paragraph />
    {square ? <Square color="purple" /> : null}
    {/* <Square color="red"/> */}
    <People names = {["Sandra", "Josh", "Hagrid"]}/>
    <People />
    <Clicked />
    <Toggle initial="Hello" alternate="World"/>
    <Counter initial={ 50 } max={ 100 } />
    <StepCounter max={ 100 } step={ 5 } />
    <Catch jump={ 100 } />
    </>
);


export default Stuff;