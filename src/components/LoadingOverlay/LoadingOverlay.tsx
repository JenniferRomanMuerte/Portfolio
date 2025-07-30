import "./LoadingOverlay.css";
import { useEffect, useState } from "react";

export default function LoadingOverlay({ visible }: { visible: boolean }) {
  const [shouldRender, setShouldRender] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (!visible) {
      setFadeOut(true);
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setFadeOut(false);
      setShouldRender(true);
    }
  }, [visible]);

  if (!shouldRender) return null;

  return (
    <div className={`loading-overlay ${fadeOut ? "fade-out" : ""}`}>
      <div className="spinner" />
    </div>
  );
}
