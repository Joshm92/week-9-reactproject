import React, { Component } from "react";
import { Link } from "react-router-dom";
// import Counter from "./Counter";






const Footer = () => {

    let navItems = [{ value: "Home", link:"/home"},
                    { value:"Square", link:"/square/orange"}, 
                    { value:"Clicked", link:"/clicked"},
                    { value: "People", link:"/people" },
                    { value: "Toggle", link:"/toggle" },
                    { value:"Temperature", link:"/temperature" },
                    { value:"Length", link:"/length" },
                    { value:"Password", link:"/password"},
                    { value:"Stepcounter", link:"/stepcounter/100/10"}]

    return (

    <ul className="list-group">
        {navItems.map((listItem, index)=>(
            <li key={index} className="list-group-item">
                <Link to={listItem.link}>{listItem.value}</Link>
            </li>
        ))}
    </ul>


)};
    
export default Footer;


