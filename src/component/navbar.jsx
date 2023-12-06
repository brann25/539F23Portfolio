import React from 'react'
import "./css/main.css"

function Navbar() {
    function moveTop() {
        console.log(document.querySelectorAll(".nav-containter"));
        document.querySelectorAll(".nav-containter").style.color = "white";
    }
  return (
    <div className="nav-containter" onScroll={moveTop}>
        <a href="/">home</a>
        <a href="/portfoliobk">projects</a>
        <a href="/aboutme">about me</a>
    </div>
  )
}

export default Navbar