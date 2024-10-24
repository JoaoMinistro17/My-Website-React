import React, { useState, useRef, useEffect } from 'react';
import '../css/aboutme.css';

function AboutMe() {
  
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  
  const callbackFunction = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting)
  }
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.8
  }

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options)

    if (containerRef.current) observer.observe(containerRef.current)
    
      return () => {
      if (containerRef.current) observer.unobserve(containerRef.current)
    }
  }, [containerRef, options])

  return (
    <div className={`aboutme ${isVisible ? 'animate' : ''}`} id="about" ref={containerRef}>

      <h1 className={`aboutme__title ${isVisible}`}>About Me</h1>

      <h1 className={`aboutme__subtitle ${isVisible}`}>Information Systems Engineer</h1>
      <p className={`aboutme__description ${isVisible}`}>
        I'm passionate about exploring the world through technology. <br />
      </p>
      <p className={`aboutme__description ${isVisible}`}>
        In this field I find a way to create, 
        where logic and creativity merge to solve problems and turn ideas into reality.
      </p>

      <h1 className={`aboutme__subtitle ${isVisible}`}>Free Time</h1>
      <p className={`aboutme__description ${isVisible}`}>
        My 4 most fulfilling hobbies currently are: Books, piano, football and videogames.
      </p>
    </div>
  );
};

export default AboutMe;