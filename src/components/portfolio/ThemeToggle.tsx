import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="relative flex h-9 w-9 items-center justify-center rounded-full glass dark:glass border border-border/50 transition-all duration-200 hover:glow-primary active:scale-95"
      aria-label="Toggle theme"
    >
      {dark ? <Sun className="h-4 w-4 text-yellow-400" /> : <Moon className="h-4 w-4 text-primary" />}
    </button>
  );
};

export default ThemeToggle;
