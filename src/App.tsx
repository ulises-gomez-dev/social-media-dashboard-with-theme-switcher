import { useState, type SetStateAction } from "react";
import ToggleSwitch from "./components/ToggleSwitch";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");

  document.documentElement.setAttribute("data-theme", theme);

  const toggleTheme = (selection: SetStateAction<string>) =>
    setTheme(selection);

  return (
    <>
      <div className="top-half-bg"></div>
      <div className="dashboard">
        <header className="dashboard-title">
          <h1>Social Media Dashboard</h1>
          <p>Total Followers: 23,004</p>
        </header>
        <div className="line"></div>
        <div className="theme-toggle">
          <p>Dark Mode</p>
          {/* button tag is temporary */}
          <ToggleSwitch toggleTheme={toggleTheme} />
        </div>
      </div>
    </>
  );
}

export default App;
