import React, { useState, useRef, useEffect } from 'react';
import '../aboutme.css';

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

      <h1 className={`aboutme__title ${isVisible ? 'slideInFromLeft' : ''}`}>About Me</h1>

      <h1 className={`aboutme__subtitle ${isVisible ? 'slideInFromLeft' : ''}`}>Software Developer</h1>
      <p className={`aboutme__description; ${isVisible ? 'slideInFromRight' : ''}`}>
        I'm a passionate developer who loves writing code.
      </p>

      <h1 className={`aboutme__subtitle ${isVisible ? 'slideInFromLeft' : ''}`}>Free Time</h1>
      <p className={`aboutme__description; ${isVisible ? 'slideInFromRight' : ''}`}>
        I like to read books about self-improvement, finances and coding related. <br />
        My favourite book is 12 rules for life by Jordan Peterson.
      </p>
      <p className={`aboutme__description; ${isVisible ? 'slideInFromRight' : ''}`}>
        Also love piano and video games.
      </p>
    </div>
  );
};

export default AboutMe;