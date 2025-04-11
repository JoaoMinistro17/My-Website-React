import React, { useState, useRef, useEffect } from 'react';
import '../css/skills.css';

import { FaRegLaughBeam } from "react-icons/fa";

export default function Skills() {

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
    <div className={`skills ${isVisible ? 'animate' : ''}`} id="skills" ref={containerRef}>
    
      <h1 className={`skills__title ${isVisible }`}>🧠 Skills</h1>
      <h1 className={`skills__subtitle ${isVisible }`}>Frontend</h1>      
      <p className={`skills__description `}>
          Mostly React (Javascript)
      </p>

      <h1 className={`skills__subtitle ${isVisible}`}>Backend</h1>
      <p className={`skills__description `}>
          C# (.NET), Node.js, Express.js, SQL Server 
      </p>

      <h1 className={`skills__subtitle ${isVisible}`}>Interpersonal Skills</h1>
      <p className={`skills__description `}>
          Of course I have some interpersonal skills ✨<br /> <br />
          Always willing to help, learn, teach, share, listen and have fun.
      </p>
    </div>
  )
}