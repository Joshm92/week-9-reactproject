import React from 'react';
import './App.css';
import Header from "./Header.js";
import Paragraph from "./Paragraph.js";
import Square from "./Square.js";
import People from "./People.js";
import Clicked from "./Clicked.js";
import Toggle from "./Toggle.js";
import Counter from "./Counter.js";
import StepCounter from "./StepCounter.js";
import Catch from "./Catch.js";
import Length from "./Length.js";
import Password from "./Password";
import Temperature from "./TempConverter";
import Footer from "./Footer";
import FourOhFour from "./FourOhFour";
import ClickedAgain from "./ClickedAgain";
import SquareAgain from "./SquareAgain";
import ToggleAgain from "./ToggleAgain";
import CounterAgain from "./CounterAgain";
import ClickedUseRed from "./ClickedUseRed";
import SquareUseRed from "./SquareUseRed";
import CounterUseRed from "./CounterUseRed";
import SquareLift from "./SquareLift"
import Passwordd from "./Passwordd";
import SignUp from "./SignUp";
// import Progress from "./Progress";
// import Home from "./Home";
import {
    BrowserRouter as Router, 
    Route, Switch
} from "react-router-dom";

let Stuff = () => (
        <Router>


                <Header text="Josh's React App" />

            <Switch>
                <Route path='/home'>
                    <Paragraph>Hello World</Paragraph>
                </Route>

                <Route path='/clickedagain' component={ ClickedAgain }/>

                <Route path='/clickedusered' component={ ClickedUseRed }/>

                <Route path='/squareagain' component={ SquareAgain }/>

                 <Route path='/squareusered' component={ SquareUseRed }/>

                 <Route path='/squarelift' component={ SquareLift }/>

               <Route path='/signup' component={ SignUp }/>

                <Route path='/toggleagain'>
                <ToggleAgain initial="Hello" alternate="world"/>
                </Route>

                <Route path='/counteragain'>
                <CounterAgain initial={ 50 } max={ 100 } />
                </Route>

                <Route path='/counterusered'>
                <CounterUseRed initial={ 5 } max={ 10 } />
                </Route>

                <Route path="/square/:color" render={ ({ match }) => (
                    <Square color={ match.params.color } />
                )}/>

                {/* <Route path='/square'>
                    {square ? <Square color="purple" /> : null}
                </Route> */}

                <Route path='/people'>
                    <People names = {["Sandra", "Josh", "Hagrid"]}/>
                </Route>

                <Route path='/toggle'>
                    <Toggle initial="Hello" alternate="World"/>
                </Route>

                <Route path='/counter'>
                    <Counter initial={ 50 } max={ 100 } />
                </Route>


                <Route path="/stepcounter/:max/:step" render={ ({ match }) => (
                    <StepCounter max={ match.params.max } step={ match.params.step }/>
                )}/>


                {/* <Route path='/stepcounter'>
                    <StepCounter max={ 100 } step={ 5 } />
                </Route> */}

                <Route path='/catch'>
                    <Catch jump={ 100 } />
                </Route>

                <Route path='/temperature' component={ Temperature }/>

                {/* <Route path='/paragraph' component={ Paragraph }/> */}

                <Route path='/clicked' component={ Clicked }/>

                <Route path='/length' component={ Length }/>

                <Route path='/password' component={ Password }/>

                    <FourOhFour />
            </Switch>

                <Footer component={Footer}/>

        </Router>
            
);


export default Stuff;