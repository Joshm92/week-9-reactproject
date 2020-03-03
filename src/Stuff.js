import React from 'react';
import './App.css';
import Header from "./Header.js";
import Paragraph from "./Paragraph.js";
import Square from "./Square.js";
import People from "./People.js";
import Clicked from "./Clicked.js";

let Stuff = ( {square} ) => (
    <>
    <Header text="Hello, world!" />
    <Paragraph />
    {square ? <Square color="green" /> : null}
    <Square color="red"/>
    <People names = {["Sandra", "Josh", "Hagrid"]}/>
    <People />
    <Clicked />
    </>
);


export default Stuff;