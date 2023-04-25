import { useEffect, useState } from "react";

const useThemeSwitcher = () => {
  const [theme, setTheme] = useState(localStorage.theme);

  const activeTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(activeTheme);

    if (root.classList.length === 0) {
      root.classList.add("dark");
    } else if (theme === undefined) {
      root.classList.add("dark");
    } else {
      const oldTheme = activeTheme === "light" ? "dark" : "light";
      root.classList.remove(oldTheme);
      root.classList.toggle(activeTheme);
    }
  }, [theme, activeTheme]);

  return [activeTheme, setTheme];
};

export default useThemeSwitcher;
