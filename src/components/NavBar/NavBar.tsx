import { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaProjectDiagram, FaUser, FaBars } from "react-icons/fa";
import programadoraImg from "/assets/programadora.png";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<"home" | "projects" | "about" | null>(null);
  const toggleMenu = () => setIsOpen(!isOpen);

  const isDarkMode = isOpen || hoveredLink !== null;

  return (
    <nav className={`navbar ${isDarkMode ? "navbar-dark" : ""}`}>
      <div className="navbar-hamburger" onClick={toggleMenu}>
        <FaBars className={`hamburger-icon ${isDarkMode ? "icon-colored" : ""}`} />
      </div>

      <div className="navbar-logo">
        <img src={programadoraImg} alt="Programadora" className="navbar-img" />
        <span className="navbar-title">Jennifer Román</span>
      </div>

      <div className={`navbar-links ${isOpen ? "open" : ""}`}>
        <Link
          to="/"
          className={`navbar-link ${hoveredLink === "home" ? "link-hovered" : ""}`}
          onMouseEnter={() => setHoveredLink("home")}
          onMouseLeave={() => setHoveredLink(null)}
          onTouchStart={() => {
            setHoveredLink("home");
            setIsOpen(false);
          }}
        >
          <FaHome className={`icon ${hoveredLink === "home" ? "icon-colored" : ""}`} />
          Inicio
        </Link>

        <Link
          to="/projects"
          className={`navbar-link ${hoveredLink === "projects" ? "link-hovered" : ""}`}
          onMouseEnter={() => setHoveredLink("projects")}
          onMouseLeave={() => setHoveredLink(null)}
          onTouchStart={() => {
            setHoveredLink("projects");
            setIsOpen(false);
          }}
        >
          <FaProjectDiagram className={`icon ${hoveredLink === "projects" ? "icon-colored" : ""}`} />
          Proyectos
        </Link>

        <Link
          to="/experience"
          className={`navbar-link ${hoveredLink === "about" ? "link-hovered" : ""}`}
          onMouseEnter={() => setHoveredLink("about")}
          onMouseLeave={() => setHoveredLink(null)}
          onTouchStart={() => {
            setHoveredLink("about");
            setIsOpen(false);
          }}
        >
          <FaUser className={`icon ${hoveredLink === "about" ? "icon-colored" : ""}`} />
          Formación y experiencia
        </Link>
      </div>
    </nav>
  );
}
