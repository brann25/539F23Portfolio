import React from 'react'
import { useRef, useState } from 'react';
import "./css/main.css"
import Navbar from './navbar'
import {Link} from 'react-router-dom';
import img1 from './image/me.png'
import Footer from './footer';

function Homepage() {
  return (
    <>
    <div className="skiptomain"><a href="#main">skip to main</a></div>
    <Navbar/>
    <header>
        <div className="title">
            <h1>projects shelves</h1>
        </div>
    </header>
    <main>
        <div className="home-container">
          <div className="home-content">
            <div className="ch1-l">
              <h3 className='brann'>Brann's Journey</h3>
              <h4>Space Design → Interaction Design → UX/HCI</h4>
              <a href="https://drive.google.com/file/d/1-gzSsEHyxPJlByqkQk0hsNXk89yIQeCP/view?usp=sharing" target="_blank" rel="noopener noreferrer">resume</a>
              <a href="https://www.linkedin.com/in/bannawit-brann-khattiyanont/" target="_blank" rel="noopener noreferrer">linkedIn</a>
              <a href="mailto:bannawit@umich.edu">email</a>
            </div>
            <div className="ch1-r">
              <img src={img1} alt="" />
            </div>
          </div>
          <div className="home-content" id="main">   
            <p className='project-title'>Kitchr</p>           
            <p className='project-sub-title'>app design for finding ingredients around home</p> 
            <a href="/portfoliobk"><Link to="/kitchr">Go!</Link></a>
          </div>
          <div className="home-content">   
            <p className='project-title'>Banking App</p>           
            <p className='project-sub-title'>app design for saving money</p> 
            <a href="/" id='disableclick'>soon</a>
          </div>
          <div className="home-content"><h6>← UX </h6></div>
          <div className="home-content"><h6>HCI →</h6></div>
          <div className="home-content">   
            <p className='project-title'>IoT Workout</p>           
            <p className='project-sub-title'>smart mirror</p> 
            <a href="/" id='disableclick'>soon</a>
          </div>
          <div className="home-content">   
            <p className='project-title'>Music Controller</p>           
            <p className='project-sub-title'>create art from sound</p> 
            <a href="/" id='disableclick'>soon</a>
          </div>
          <div className="home-content">   
            <p className='project-title'>Interior Architecture</p>           
            <p className='project-sub-title'>design and process</p> 
            <a href="/" id='disableclick'>soon</a>
          </div>
          <div className="home-content">   
            <p className='project-title'>Graphic Design</p>           
            <p className='project-sub-title'>user interface and graphic</p> 
            <a href="/" id='disableclick'>soon</a>
          </div>
          <div className="home-content"><h6>← DESIGN</h6></div>
        </div>
    </main>
    <footer>
    <Footer />
    </footer>
    </>
  )
}

export default Homepage