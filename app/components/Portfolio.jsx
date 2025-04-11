import React, { useState, useRef, useEffect } from 'react';
import '../css/portfolio.css';

import { DiNodejs, DiReact } from "react-icons/di";

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
    
    <div className={`portfolio ${isVisible ? 'animate' : ''}`} id="portfolio" ref={containerRef}>

      <h1 className={`portfolio__title ${isVisible}`}> 🧑‍💻 Portfolio</h1> <br /> 

      <DiNodejs color='lightgreen' size={100}/> <DiReact color='lightblue' size={100}/>
      

      {/* <!-- Load the icons of the technologies i'm using, in this case, React and ExpressJS --> */}
      <h1 className={`portfolio__subtitle ${isVisible}`}>HelpDesk Web App</h1>
      <p className={`portfolio__description ${isVisible}`} size={100}>
          Create tickets directed to other departments (e.g., IT → HR) <br /> <br />
          Filter tickets by name or status <br /> <br />
          User and Admin roles <br /> <br />
        <img src="img/desafio-fullstack-junior-2.png" alt="Project 1" className="portfolio__image" />
        <img src="img/desafio-fullstack-junior-3.png" alt="Project 1" className="portfolio__image" />
        <br /> 🔔 Things to improve <br /> 
          Countdown timers and alerts for tickets <br />
          Mark tickets as Low, Medium, or High priority <br />
          View ticket history and activity <br /> 
          Add comments and attach files <br />  <br />  
      </p>

      <h1 className={`portfolio__subtitle ${isVisible}`}>E-commerce API (Sequelize, MVC)</h1>
      <p className={`portfolio__description ${isVisible}`}>
        Secure and modular, scalable RESTful API <br /> <br />
        User authentication (JWT and bcrypt) <br /> <br />
        Role-based access <br /> <br />
        Core e-commerce features (product listing, cart structure, order handling, etc.) <br />
      </p>
      <img src="test.png" alt="Project 2" className="portfolio__image" />
    </div>
  );
}