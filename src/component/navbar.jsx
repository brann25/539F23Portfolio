import React from 'react'
import "./css/main.css"
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <div className="nav-containter">
        <Link to= "/">home</Link>
        <a href="https://www.linkedin.com/in/bannawit-brann-khattiyanont/" target="_blank" rel="noopener noreferrer">linkedIn</a>
        <Link to= "/aboutme">about me</Link>
    </div>
  )
}

export default Navbar