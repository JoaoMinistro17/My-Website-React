import React, { useState, useRef, useEffect } from 'react';
import '../css/portfolio.css';

export default function Portfolio() {

 const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const callbackFunction = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting)
  }

  const options = {
    root: null,
    rootMargin: "100px",
    threshold: 0.4
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

      <h1 className={`portfolio__title ${isVisible}`}>Portfolio</h1>

      <h1 className={`portfolio__subtitle ${isVisible}`}>Simple Ticket HelpDesk</h1>
      <p className={`portfolio__description ${isVisible}`}>
        Lorem Ipsum 
      </p>
      <img src="img/desafio-fullstack-junior.png" alt="Project 1 Home" className="portfolio__image" />

      <h1 className={`portfolio__subtitle ${isVisible}`}>Project 2</h1>
      <p className={`portfolio__description ${isVisible}`}>
        <br /> I did this project with this framework, solved x and y problem. <br />
      </p>
      <p className={`portfolio__description ${isVisible}`}>
        Reminder to be valuable and solve problems for others.
      </p>
      <img src="img/desafio-fullstack-junior.png" alt="Project 2 Home" className="portfolio__image" />

      <a href="/cv-joao-ministro.pdf" download="joao-ministro-portfolio.pdf" className="portfolio__download">
        Download Portfolio PDF
      </a>
    </div>
  );
}