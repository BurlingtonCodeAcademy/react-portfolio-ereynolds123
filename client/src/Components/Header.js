import React from "react"
import {Link} from "react-router-dom"

function Header(props){
    return (
        <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/philosophy">Philosophy</Link>
        <Link to="gallery">Gallery</Link>
        </div>
    )
}

export default Header