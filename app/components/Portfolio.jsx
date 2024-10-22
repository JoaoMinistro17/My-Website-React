import React, { useState, useRef, useEffect } from 'react';
import '../portfolio.css';

export default function Portfolio() {

 const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const callbackFunction = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting)
  }

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.7
  }

  useEffect(() => {

    const observer = new IntersectionObserver(callbackFunction, options)

    if (containerRef.current) observer.observe(containerRef.current)

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current)
    }
  }, [containerRef, options])


  return (
    <div className={`portfolio ${isVisible ? 'animate' : ''}`} id="portfolio" ref={containerRef}>

      <h2 className={`portfolio__title ${isVisible ? 'slideInFromLeft' : ''}`}>Portfolio</h2>

      <h1 className={`portfolio__subtitle ${isVisible ? 'slideInFromLeft' : ''}`}>Project 1</h1>
      <p className={`portfolio__description; ${isVisible ? 'slideInFromRight' : ''}`}>
        <br />Created a web app that does x and y. <br /> 
      </p>
      <p className={`portfolio__description; ${isVisible ? 'slideInFromRight' : ''}`}>
        Reminder to be valuable and solve problems for others.
      </p>
      <h1 className={`portfolio__subtitle ${isVisible ? 'slideInFromLeft' : ''}`}>Project 2</h1>
      <p className={`portfolio__description; ${isVisible ? 'slideInFromRight' : ''}`}>
        <br /> I did this project with this framework, solved x and y problem. <br />
      </p>
      <p className={`portfolio__description; ${isVisible ? 'slideInFromRight' : ''}`}>
        bla bla bla ...
      </p>

      <a href="/cv-joao-ministro.pdf" download="joao-ministro-portfolio.pdf" className="portfolio__download">
        Download Portfolio PDF
      </a>
    </div>
  );
}