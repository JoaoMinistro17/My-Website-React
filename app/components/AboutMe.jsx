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
      <h1 className={`aboutme__subtitle ${isVisible}`}>Software Developer</h1>
      <p className={`aboutme__description ${isVisible}`}>
        I'm a software developer aiming to take on greater responsibility and grow into a senior role <br />
        — someone who can be a strong reference in the field, both technically and professionally. <br /> <br />
        The technologies I'm currently using the most is C# and SQL for automation and tracking data. 
      </p>
      <h1 className={`aboutme__subtitle ${isVisible}`}>💭 Meanwhile...</h1>
      <p className={`aboutme__description ${isVisible}`}>
        I also like to read{" "}
        <button className='aboutme__highlight' onClick={() => setShowBooks(!showBooks)} >
           books
        </button>
        , and I really enjoyed these:
      </p>
      {/* Renderizar a seção Books condicionalmente */}
      {showBooks && <Books />}
    </div>
  );
};

export default AboutMe;