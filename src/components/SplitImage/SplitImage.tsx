import { useEffect, useRef, useState } from "react";
import "./SplitImage.css";

export default function SplitImage() {
  const [animate, setAnimate] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  // Actualiza el corte global (porcentaje 0..100)
  const setSplit = (pct: number) => {
    const home = rootRef.current?.closest(".home") as HTMLElement | null;
    if (!home) return;
    const p = Math.max(0, Math.min(100, pct));
    home.style.setProperty("--split-p", `${p}%`);
  };

  // Marca que el usuario movió → los títulos pasan a seguir al slider
  const setHasMoved = () => {
    const home = rootRef.current?.closest(".home");
    home?.classList.add("has-moved");
  };

  useEffect(() => {
    // Estado de reposo: mitad/mitad y animación de entrada
    setSplit(50);
    const t = setTimeout(() => setAnimate(true), 50);
    return () => clearTimeout(t);
  }, []);

  const moveFrom = (clientX: number, target: HTMLDivElement) => {
    const r = target.getBoundingClientRect();
    const pct = ((clientX - r.left) / r.width) * 100;
    setSplit(pct);
  };

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    moveFrom(e.clientX, e.currentTarget);
    setHasMoved();
  };

  const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const t = e.touches[0];
    moveFrom(t.clientX, e.currentTarget);
    setHasMoved();
  };

  return (
    <div
      ref={rootRef}
      className="split-container"
      onMouseMove={onMouseMove}
      onTouchMove={onTouchMove}
      role="img"
      aria-label="Retrato mitad color, mitad blanco y negro con deslizador"
    >
      {/* Color (izquierda) */}
      <img
        src="/assets/androide-art.webp"
        alt=""
        className={`half left ${animate ? "animate" : ""}`}
        style={{ clipPath: `inset(0 var(--split-r) 0 0)` }}
      />
      {/* Blanco y negro (derecha) */}
      <img
        src="/assets/androide.webp"
        alt=""
        className={`half right ${animate ? "animate" : ""}`}
        style={{ clipPath: `inset(0 0 0 var(--split-p))` }}
      />
    </div>
  );
}
