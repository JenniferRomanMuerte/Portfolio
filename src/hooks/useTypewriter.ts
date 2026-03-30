import { useEffect, useState } from "react";

export function useTypewriter(text: string, active = true, speed = 45, step = 2): string {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    if (!active) return;

    let i = 0;
    setDisplayed("");

    const id = setInterval(() => {
      i += step;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) clearInterval(id);
    }, speed);

    return () => clearInterval(id);
  }, [text, active, speed, step]);

  return displayed;
}
