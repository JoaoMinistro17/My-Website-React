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
        I'm a software developer proficient at workflow automation and tracking systems <br /> <br />
        Recently I've been diving deep into SQL and Data <br /> <br />
      </p>
      <h1 className={`aboutme__subtitle ${isVisible}`}>What I'm (actually) good at</h1>
      <ul className={`aboutme__description ${isVisible}`}>
        <li>🧰 Automating boring stuff at work so humans can do human things (like complaining about meetings)</li>
        <li>🗃️ Talking to databases in fluent SQL</li>
        <li>🧪 Writing code that sometimes works on the first try (other times it builds character)</li>
      </ul>

      <h1 className={`aboutme__subtitle ${isVisible}`}>💭 Meanwhile...</h1>
      <p className={`aboutme__description ${isVisible}`}>
        I also{" "}
        <button className='aboutme__highlight' onClick={() => setShowBooks(!showBooks)} >
           read books
        </button>
        , and I really enjoyed these:
      </p>
      {/* Renderizar a seção Books condicionalmente */}
      {showBooks && <Books />}
    </div>
  );
};

export default AboutMe;