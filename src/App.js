import React from 'react';
import './App.css';
import Header from "./Header.js";
import Paragraph from "./Paragraph.js";
import Square from "./Square.js";
import People from "./People.js";

    const App = () => (
      // put the header, paragraph and other components in empty divs using the <> and </>
      <>
      <Header text="Hello, world!" />
      <Paragraph />
      <Square/>
      <Square color="red"/>
      <People />
      </>
      );

export default App;
