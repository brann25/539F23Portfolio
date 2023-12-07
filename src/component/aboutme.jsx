import React from 'react'
import Footer from './footer'
import Navbar from './navbar'
import "./css/component.css"

import pic1 from './image/pic1.png'
import pic2 from './image/pic2.png'
import pic3 from './image/pic3.png'

const Aboutme = () => {
  return (
    <>
    <div className="skiptomain"><a href="#main">skip to main</a></div>
    <Navbar/>
    <div className="container">
        <div className="about">
            <h1>about-me</h1>
        </div>
        <div className="about" id="main">
            <img src={pic1} alt="" />
        </div>
        <div className="about">
            <p>This is Brann's portfolio, this portfolio </p>
            <p>Hi, my name is Brann! And this is a portfolio website I built with React.js framework!</p>
            <p>Hope everyone enjoy and have a great up coming happy new year!</p>
        </div>
        <div className="about">
            <p>I am currently studying Information Science at the School of Information, The University of Michigan, Ann Arbor, Michigan</p>
            <p>In this program, I have learned many useful classes and have made a good friendship all along which I belive to be a good experience</p>
            <p>One of the most important aspect I learned from the classes are human and design relationship where we should study and deliver the best options</p>
            <p>so that our users can use good design to enhance their life!</p>
        </div>  
        <div className="about">
            <img src={pic2} alt="" />
        </div>
        <div className="about">
            <p>I came from Interior Design background and have been working to design retail spaces for years.</p>
            <p>One thing that I have notice is the growing demand on digital design and online activities for shoppers!</p>
            <p>By learning how could we integrate design principle and digital activites, I could create online space to be a better place for everyone!</p>
        </div>  
        <div className="about">
            <img src={pic3} alt="" />
        </div>
    </div>
        <div className="about">
            <a href="#top">Back to top</a>
        </div>
    </>
  )
}

export default Aboutme