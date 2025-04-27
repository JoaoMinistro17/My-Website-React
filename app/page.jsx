"use client";

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

import './page.css';

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import ScrollProgress from './components/ScrollProgress';
import { SlArrowRight } from "react-icons/sl";

const ParticleAnimation = dynamic(() => import('./components/ParticleAnimation'), {
  ssr: false, 
});

export default function HomePage() {

  // Array of quotes
  const quotes = [
    "He who has a why to live can bear almost any how. - Nietzsche",
    "Without music, life would be a mistake. - Nietzsche",
    "That which does not kill us makes us stronger. - Nietzsche",
    "The higher we soar, the smaller we appear to those who cannot fly. - Nietzsche",
    "There is always some madness in love. But there is also always some reason in madness. - Nietzsche",
    "The individual has always had to struggle to keep from being overwhelmed by the tribe. - Nietzsche",

    "Man only likes to count his troubles; he doesn't calculate his happiness. - Dostoyevsky",
    "The soul is healed by being with children. - Dostoyevsky",
    "The greatest happiness is to know the source of unhappiness. - Dostoyevsky",

    "We are what we repeatedly do. Excellence, then, is not an act, but a habit. - Aristotle",
    "Knowing yourself is the beginning of all wisdom. - Aristotle",

    "Everyone thinks of changing the world, but no one thinks of changing himself. - Tolstoy",
    "If you want to be happy, be. - Tolstoy",

    "Compare yourself to who you were yesterday, not to who someone else is today. - Jordan Peterson",
    "Treat yourself like someone you are responsible for helping. - Jordan Peterson",
    "If you fulfill your obligations every day, you don't need to worry about the future. - Jordan Peterson",

    "Life is what happens when you're busy making other plans. - Lennon",
    "In the end, we will remember not the words of our enemies, but the silence of our friends. - King",
    "The only way to do great work is to love what you do. - Jobs",
    "The best way to predict the future is to create it. - Drucker",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "The best revenge is massive success. - Trump",
    "You miss 100% of the shots you don't take. - Gretzky",
    "It always seems impossible until it's done. - Nelson Mandela",
    "Success usually comes to those who are too busy to be looking for it. - Ford",
    "The only limit to our realization of tomorrow will be our doubts of today. - Roosevelt",
    "The best way to predict your future is to create it. - Abraham Lincoln",
    "Success is how high you bounce when you hit bottom. - Patton",
    "Your time is limited, so don't waste it living someone else's life.” - Steve Jobs",
    "Some people don't like change, but you need to embrace change if the alternative is disaster. - Elon Musk",
  ];

  // State to hold the random quote and its length
  const [quote, setQuote] = useState("");

  // Generate a random quote on component mount
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const selectedQuote = quotes[randomIndex];
    setQuote(selectedQuote);
  }, []);

  return (
  <>    
    <ParticleAnimation />

    <ScrollProgress />

    <Navbar/>   

    {/* <!-- Home Page --> */}
    <div className="page" id="home" style={{ position: 'relative', overflow: 'hidden' }}>  
      <div className="home-content"> 
        <h1>Hi, I'm João! Welcome to my personal website.</h1> 
        <p>Explore my projects, skills, and more.</p>
      </div>
      <div className="quote">
        <h1><SlArrowRight size={12}/> {quote}</h1> 
      </div>
    </div>

    <AboutMe />

    <Portfolio />

    <Skills />

    <Footer />
  </>
  );
}