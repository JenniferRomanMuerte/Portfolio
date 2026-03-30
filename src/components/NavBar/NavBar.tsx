import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaHome, FaIdCard, FaProjectDiagram, FaUser } from "react-icons/fa";
import emailIcon from "/assets/email.webp";
import githubIcon from "/assets/github.webp";
import linkedinIcon from "/assets/linkedin.webp";
import chatboxAiIcon from "/assets/chatboxIAIcon.webp";
import AiModal from "../AiModal/AiModal";
import "./NavBar.css";

const pages = [
  { to: "/", label: "Home", icon: <FaHome className="icon" />, end: true },
  { to: "/about", label: "Sobre mí", icon: <FaIdCard className="icon" /> },
  { to: "/projects", label: "Proyectos", icon: <FaProjectDiagram className="icon" /> },
  { to: "/experience", label: "Formación y experiencia", icon: <FaUser className="icon" /> },
];

const socials = [
  { href: "mailto:jenniferromanmuerte@gmail.com", label: "Email", src: emailIcon },
  { href: "https://github.com/JenniferRomanMuerte?tab=repositories", label: "GitHub", src: githubIcon },
  { href: "https://www.linkedin.com/in/jenniferromanmuerte", label: "LinkedIn", src: linkedinIcon },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAiOpen, setIsAiOpen] = useState(false);
  const toggleMenu = () => setIsOpen((v) => !v);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      {/* Izquierda: hamburguesa (móvil) + páginas */}
      <div className="nav-left">
        <button
          className="nav-burger"
          aria-label="Abrir menú"
          aria-expanded={isOpen}
          onClick={toggleMenu}
        >
          <FaBars />
        </button>

        <ul className={`nav-pages ${isOpen ? "open" : ""}`}>
          {pages.map((p) => (
            <li key={p.to} className="nav-pages__item">
              <NavLink
                to={p.to}
                end={p.end}
                className={({ isActive }) => `nav-link${isActive ? " nav-link--active" : ""}`}
                onClick={closeMenu}
              >
                {p.icon}
                <span className="label">{p.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Derecha: socials (iconos en móvil; icono+texto ≥768px) */}
      <ul className="nav-right">
        <li className="nav-right__item">
          <button
            className="nav-link nav-ai-button"
            onClick={() => setIsAiOpen(true)}
          >
            <img src={chatboxAiIcon} alt="AI" className="social-icon" />
            <span className="label">AI</span>
          </button>
        </li>
        {socials.map((s) => (
          <li key={s.label} className="nav-right__item">
            <a
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel={
                s.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              className="nav-link"
            >
              <img src={s.src} alt={s.label} className="social-icon" />
              <span className="label">{s.label}</span>
            </a>
          </li>
        ))}
      </ul>
      <AiModal isOpen={isAiOpen} onClose={() => setIsAiOpen(false)} />
    </nav>
  );
}
