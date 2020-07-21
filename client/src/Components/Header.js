import React from "react"
import {Link} from "react-router-dom"


function Header(props){
    return (
        <>
        <nav>
        <Link to="/about">About</Link>
        <Link to="/philosophy">Philosophy</Link>
        <Link to="/"><img id="logo" src="/imgs/logo.png"></img></Link>
        <Link to="gallery">Gallery</Link>
        <Link to="/contact">Contact</Link>
        </nav>
        </>
    )
}

export default Header