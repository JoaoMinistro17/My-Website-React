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
      <h1 className={`aboutme__subtitle ${isVisible}`}>Software Engineer</h1>
      <p className={`aboutme__description ${isVisible}`}>
        I can build websites, webapps (Ecom, Quizzes) and apps for traceability and alerts. <br />
      </p>
      <h1 className={`aboutme__subtitle ${isVisible}`}>💭 Meanwhile...</h1>
      <p className={`aboutme__description ${isVisible}`}>
        Besides action,{" "}
        <button className='aboutme__highlight' onClick={() => setShowBooks(!showBooks)} >
          reading 
        </button>
        is the biggest catalyst for change.
      </p>
      {/* Renderizar a seção Books condicionalmente */}
      {showBooks && <Books />}
    </div>
  );
};

export default AboutMe;