import "./Footer.css";
import emailIcon from "/assets/email.png";
import githubIcon from "/assets/github.png";
import linkedinIcon from "/assets/linkedin.png";
import { useState } from "react";

export default function Footer() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <footer className={`footer ${hovered ? "footer-dark" : ""}`}>
      <div className="footer-content">
        <div className="footer-links">
          <a
            href="mailto:jenniferromanmuerte@gmail.com"
            className={`footer-link ${hovered === "email" ? "footer-link-hover" : ""}`}
            onMouseEnter={() => setHovered("email")}
            onMouseLeave={() => setHovered(null)}
          >
            <span className="footer-link-content">
              <img src={emailIcon} alt="Email" />
              Email
            </span>
          </a>
          <a
            href="https://github.com/JenniferRomanMuerte"
            target="_blank"
            rel="noopener noreferrer"
            className={`footer-link ${hovered === "github" ? "footer-link-hover" : ""}`}
            onMouseEnter={() => setHovered("github")}
            onMouseLeave={() => setHovered(null)}
          >
            <span className="footer-link-content">
              <img src={githubIcon} alt="GitHub" />
              GitHub
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/jenniferromanmuerte"
            target="_blank"
            rel="noopener noreferrer"
            className={`footer-link ${hovered === "linkedin" ? "footer-link-hover" : ""}`}
            onMouseEnter={() => setHovered("linkedin")}
            onMouseLeave={() => setHovered(null)}
          >
            <span className="footer-link-content">
              <img src={linkedinIcon} alt="LinkedIn" />
              LinkedIn
            </span>
          </a>
        </div>
        <p className="footer-copy">© 2025 Jennifer Román · Portfolio</p>
      </div>
    </footer>
  );
}
