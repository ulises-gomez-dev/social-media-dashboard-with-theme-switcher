import { useState } from "react";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");

  document.documentElement.setAttribute("data-theme", theme);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <div className="dashboard">
      <div className="top-half-bg"></div>
      <header className="dashboard-title">
        <h1>Social Media Dashboard</h1>
        <p>Total Followers: 23,004</p>
      </header>
      <div className="line"></div>
      <div className="theme-toggle">
        <p>Dark Mode</p>
        {/* button tag is temporary */}
        <button onClick={toggleTheme}>toggle</button>
      </div>
    </div>
  );
}

export default App;
