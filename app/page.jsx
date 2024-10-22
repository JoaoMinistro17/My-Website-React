"use client";

import React from 'react';
import './page.css';

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import ParticleAnimation from './components/ParticleAnimation';
import ScrollProgress from './components/ScrollProgress';

export default function HomePage() {

  var hello_world = "<h1> Hello World </h1>";

  return (
  <>    

    <ScrollProgress />

    <Navbar/>   

    {/* <!-- Home Page --> */}
    <div className="page" id="home" style={{ position: 'relative', overflow: 'hidden' }}>  
      <ParticleAnimation/> 
      <div className="header"> 
        <h1>{hello_world}</h1> 
      </div>
    </div>

    <AboutMe />

    <Portfolio />

    <Skills />

    <Footer />
  </>
  );
}