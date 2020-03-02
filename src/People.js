import React from "react";
// we use className to add classes for Bootstrap styling

let names = ["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"];

const People = () => (
    <ul className="list-group">
  
    { names.map((value, index) => (
    <li className="list-group" key={ index }>
    <a className="page-link" href={ "/page/" + value }>{ value}</a>
    </li>
    ))}
    </ul>
    );

export default People;