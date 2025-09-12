import { useEffect, useState } from "react";
import "./SplitImage.css";

export default function SplitImage() {
  const [animate, setAnimate] = useState(false);
  const [divider, setDivider] = useState(50);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const newDivider = (x / rect.width) * 100;
    setDivider(newDivider);
  };

  return (
    <div className="split-container" onMouseMove={handleMouseMove}>
      {/* Color desde la izquierda */}
      <img
        src="/assets/androide-art.webp"
        alt="Versión artística"
        className={`half left ${animate ? "animate" : ""}`}
        style={{ clipPath: `inset(0 ${100 - divider}% 0 0)` }}
      />

      {/* Blanco y negro desde la derecha */}
      <img
        src="/assets/androide.webp"
        alt="Versión realista"
        className={`half right ${animate ? "animate" : ""}`}
        style={{ clipPath: `inset(0 0 0 ${divider}%)` }}
      />
    </div>
  );
}
