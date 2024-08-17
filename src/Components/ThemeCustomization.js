import React, { useState } from "react";

const ThemeCustomization = () => {
  const [theme, setTheme] = useState("light");

  const handleChange = (e) => {
    setTheme(e.target.value);
    document.body.className = e.target.value; // Apply the selected theme
  };

  return (
    <div className="theme-customization-container">
      <h2>Theme Customization</h2>
      <label>
        <input
          type="radio"
          value="light"
          checked={theme === "light"}
          onChange={handleChange}
        />
        Light Mode
      </label>
      <label>
        <input
          type="radio"
          value="dark"
          checked={theme === "dark"}
          onChange={handleChange}
        />
        Dark Mode
      </label>
    </div>
  );
};

export default ThemeCustomization;