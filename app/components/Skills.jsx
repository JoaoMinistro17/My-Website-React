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
      <h1 className={`skills__subtitle ${isVisible }`}>Programming Languages</h1>      
      <p className={`skills__description `}>
          C#, Java, JavaScript
      </p>

      <h1 className={`skills__subtitle ${isVisible}`}>Frameworks and Tools</h1>
      <p className={`skills__description `}>
          .NET, React, Node.js, Express.js
      </p>

      <h1 className={`skills__subtitle ${isVisible}`}>Databases</h1>
      <p className={`skills__description `}>
          SQL
      </p>

      <h1 className={`skills__subtitle ${isVisible}`}>Interpersonal Skills</h1>
      <p className={`skills__description `}>
          Conscious and grounded communicator, resilient under pressure, and adaptable to diverse teams and environments. <br /><br />
          I value clear, mindful collaboration and bring a balanced, versatile approach to problem-solving.
      </p>
    </div>
  )
}