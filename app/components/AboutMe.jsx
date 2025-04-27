import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import '../css/aboutme.css';
import Books from './Books'; 

function AboutMe() {
  
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [showBooks, setShowBooks] = useState(false); // State to control the visibility of the Books section


  const callbackFunction = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting)
  }
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.3
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
        As you can see I enjoy building things, like this website! <br /> <br />
      </p>
      <h1 className={`aboutme__subtitle ${isVisible}`}>💭 Free Time</h1>
      <p className={`aboutme__description ${isVisible}`}>
        Currently my free time is spent{" "}
        <button className='aboutme__highlight' onClick={() => setShowBooks(!showBooks)} >
           reading books
        </button>
        , playing piano and learning new things.
      </p>
      {/* Renderizar a seção Books condicionalmente */}
      {showBooks && <Books />}
    </div>
  );
};

export default AboutMe;