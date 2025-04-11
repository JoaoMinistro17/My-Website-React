"use client";

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

import './page.css';

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
//import ParticleAnimation from './components/ParticleAnimation';
import ScrollProgress from './components/ScrollProgress';

import { SlArrowRight } from "react-icons/sl";

const ParticleAnimation = dynamic(() => import('./components/ParticleAnimation'), {
  ssr: false, 
});

export default function HomePage() {

  // Array of quotes
  const quotes = [
    "He who has a why to live can bear almost any how. - Nietzsche",
    "Man only likes to count his troubles; he doesn't calculate his happiness. - Dostoyevsky",
    "Everyone thinks of changing the world, but no one thinks of changing himself. - Tolstoy",
    "Without music, life would be a mistake. - Nietzsche",
    "The soul is healed by being with children. - Dostoyevsky",
    "If you want to be happy, be. - Tolstoy",
    "The greatest happiness is to know the source of unhappiness. - Dostoyevsky",
    "Life is what happens when you're busy making other plans. - Lennon",
    "The only thing we have to fear is fear itself. - Roosevelt",
    "In the end, we will remember not the words of our enemies, but the silence of our friends. - King",
    "The only way to do great work is to love what you do. - Jobs",
    "Success is not the key to happiness. Happiness is the key to success. - Albert Schweitzer",
    "The purpose of our lives is to be happy. - Dalai Lama",
    "Life is really simple, but we insist on making it complicated. - Confucius",
    "Life is either a daring adventure or nothing at all. - Keller",
    "The best way to predict the future is to create it. - Drucker",
    "The journey of a thousand miles begins with one step. - Lao Tzu",
    "You miss 100% of the shots you don't take. - Gretzky",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "The best revenge is massive success. - Trump",
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