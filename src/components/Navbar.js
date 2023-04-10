import React from "react"
import NavOptions from "./NavOptions";


export default function Navbar(){
    return (
        <nav className="navBar">
            <div className="intro">
            <img className="logo" src="./logo192.png"></img>
            <h2>React Components</h2>
            </div>
            <NavOptions />
        </nav>
    )
}