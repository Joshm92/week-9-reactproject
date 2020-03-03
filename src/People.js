import React, { Component } from "react";
// we use className to add classes for Bootstrap styling

// let names = ["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"];

class People extends Component {

    handleClick() {
        console.log("hello world");
        }

    render() {
        let { names } = this.props;

        return names ? ( 
        <ul className="People-List" onClick={ this.handleClick }>                              
  
            { names.map((name, index) => (          
                <li key={ index } > { name } </li>     
            ))}
        </ul>
        
           ) : <p>Nothing to see here</p> 
    }
}



// const People = ({ names }) => (
//    names ? ( <ul>                              
  
//     { names.map((name, index) => (           // mapping over each name in the array in index order
//         <li key={ index }> {name} </li>     // key to index so react know what name in array to display
//     ))}
//     </ul>

//    ) : <p>Nothing to see here</p>           // this text will be displayed if no names are present
// );

export default People;