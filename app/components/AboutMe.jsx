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

      <h1 className={`aboutme__title ${isVisible}`}>✍️ About Me</h1>

      <h1 className={`aboutme__subtitle ${isVisible}`}>I'm a Software Developer</h1>
      <p className={`aboutme__description ${isVisible}`}>
        This is where I find a way to be creative and logical at the same time. <br /> <br />
        As you can see I enjoy to build things, like this website! <br /> <br />
      </p>

      <h1 className={`aboutme__subtitle ${isVisible}`}>💭 Free Time</h1>
      <p className={`aboutme__description ${isVisible}`}>
        Currently my free time is spent reading books, playing piano and learning new things.
      </p>
    </div>
  );
};

export default AboutMe;