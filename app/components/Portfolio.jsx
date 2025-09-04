import React, { useState, useRef, useEffect } from "react";
import "../css/portfolio.css";

import { DiNodejs, DiReact } from "react-icons/di";

export default function Portfolio() {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const callbackFunction = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.3,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);

    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [containerRef, options]);

  return (
    <div
      className={`portfolio ${isVisible ? "animate" : ""}`}
      id="portfolio"
      ref={containerRef}
    >
      <h1 className={`portfolio__title ${isVisible}`}> 🧑‍💻 Portfolio</h1>
      <DiNodejs color="lightgreen" size={100} />{" "}
      <DiReact color="lightblue" size={100} />
      {/* <!-- Load the icons of the technologies i'm using, in this case, React and ExpressJS --> */}
      <div className="projects-grid">
        {/* Projeto 1 */}
        <div className="project-card">
          <h1 className={`portfolio__subtitle ${isVisible}`}>
            HelpDesk Web App
          </h1>
          <p className="portfolio__description">
            → Create tickets directed to other departments (e.g., IT → HR)
            <br />
            → Filter tickets by name or status
            <br />
            → User and Admin roles
            <br />
            {/* Imagens deste projeto */}
            <img
              src="img/desafio-fullstack-junior-2.png"
              alt="Project 1"
              className="portfolio__image"
            />
            <img
              src="img/desafio-fullstack-junior-3.png"
              alt="Project 1"
              className="portfolio__image"
            />
            {/* Link para o github deste projeto */}
            <a
              href="https://github.com/JoaoMinistro17/HelpDesk-React-ExpressJS"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#61ff89" }}
            >
              View on GitHub
            </a>
            {/*  
            <br />
            🔔 Things to improve <br />
            Countdown timers and alerts for tickets <br />
            Mark tickets as Low, Medium, or High priority <br />
            View ticket history and activity <br />
            Add comments and attach files <br />
            <br />
            */}
          </p>
        </div>

        {/* Projeto 2 */}
        <div className="project-card">
          <h1 className={`portfolio__subtitle ${isVisible}`}>E-commerce API</h1>
          <p className="portfolio__description">
            → REST API, Sequelize, MVC, Auth (JWT and bcrypt)
            <br />
            → User/Admin access <br />→ Core e-commerce features (product
            listing, cart structure, order handling, etc.)
            {/* Imagens deste projeto */}
            <img
              src="img/innerlens-preview-1.png"
              alt="InnerLens Project"
              className="portfolio__image"
            />
            <img
              src="img/innerlens-preview-2.png"
              alt="InnerLens Project"
              className="portfolio__image"
            />
            {/* Link para o github deste projeto */}
            <a
              href="https://github.com/JoaoMinistro17/ecommerce-api"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#61ff89" }}
            >
              View on GitHub
            </a>
          </p>
        </div>

        {/* Projeto 3 */}
        <div className="project-card">
          <h1 className={`portfolio__subtitle ${isVisible}`}>
            InnerLens - Self-discovery platform
          </h1>
          <p className={`portfolio__description ${isVisible}`}>
            → Explore your mind through carefully crafted psychological quizzes{" "}
            <br />
            → Learn about your cognitive patterns, values, and personality
            traits <br />
            → Read articles on Carl Jung, Stoicism, and modern psychology <br />
            {/* Imagens deste projeto */}
            <img
              src="img/innerlens-preview-1.png"
              alt="InnerLens Project"
              className="portfolio__image"
            />
            <img
              src="img/innerlens-preview-2.png"
              alt="InnerLens Project"
              className="portfolio__image"
            />
            {/* Link para o github deste projeto */}
            <a
              href="https://github.com/JoaoMinistro17/InnerLens"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#61ff89" }}
            >
              View on GitHub
            </a>
          </p>

          {/* Projeto 3
            <br /> 🔔 Things to improve <br />
            Add login system to track user progress <br />
            More detailed quiz results with saving and sharing options <br />
            Dynamic article recommendations based on quiz answers <br />
            */}
        </div>

        {/* Adicionar mais projetos aqui */}
      </div>
      <a
        href="/cv-joao-ministro.pdf"
        download="joao-ministro-cv.pdf"
        className="portfolio__download"
      >
        Download CV (PDF)
      </a>
    </div>
  );
}
