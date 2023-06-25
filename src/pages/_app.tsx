import "@/styles/globals.css";
import "@/styles/indexInven.css";
import "@/styles/Units.css";
import type { AppProps } from "next/app";
import { useState, useEffect } from "react";
import { RiMoonFill, RiSunFill } from "react-icons/ri";

export default function App({ Component, pageProps }: AppProps) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark-mode");
    } else {
      document.documentElement.classList.remove("dark-mode");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <button className="dark-mode-button" onClick={toggleDarkMode}>
        {darkMode ? <RiMoonFill /> : <RiSunFill />}
      </button>
      <Component {...pageProps} />
    </div>
  );
}
