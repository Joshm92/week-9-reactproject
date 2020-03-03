import React from 'react';
import './App.css';
import Header from "./Header.js";
import Paragraph from "./Paragraph.js";
import Square from "./Square.js";
import People from "./People.js";


let Stuff = ( {square} ) => (
    <>
    <Header text="Hello, world!" />
    <Paragraph />
    {square ? <Square color="green" /> : null}
    <Square color="red"/>
    <People names = {["Sandra", "Josh", "Hagrid"]}/>
    <People />
    </>
);


export default Stuff;