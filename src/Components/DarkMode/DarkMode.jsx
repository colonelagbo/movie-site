import React, { useEffect } from "react";
import "./DarkMode.css";
import sunIcon from "./Sun.svg";
import moonIcon from "./Moon.svg";

const DarkMode = () => {
  const setDarkTheme = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
    localStorage.setItem("selectedTheme", "dark");
  };

  const setLightTheme = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
    localStorage.setItem("selectedTheme", "light");
  };

  // ✅ Move selectedTheme outside useEffect so it can be reused
  const selectedTheme = localStorage.getItem("selectedTheme");

  useEffect(() => {
    if (selectedTheme === "light") {
      setLightTheme();
    } else {
      setDarkTheme();
    }
  }, [selectedTheme]);

  const toggleTheme = (e) => {
    if (e.target.checked) {
      setDarkTheme();
    } else {
      setLightTheme();
    }
  };

  return (
    <div className="dark_mode">
      <input
        className="dark_mode_input"
        type="checkbox"
        id="darkmode-toggle"
        onChange={toggleTheme}
        defaultChecked={selectedTheme !== "light"}
      />
      <label className="dark_mode_label" htmlFor="darkmode-toggle">
        <img src={sunIcon} alt="Sun" className="sun" />
        <img src={moonIcon} alt="Moon" className="moon" />
      </label>
    </div>
  );
};

export default DarkMode;
