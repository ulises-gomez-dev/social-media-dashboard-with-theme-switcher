import { useState } from "react";
import "./ToggleSwitch.css";

function ToggleSwitch({ toggleTheme }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    if (isChecked) {
      setIsChecked(false);
      toggleTheme("light");
    } else {
      setIsChecked(true);
      toggleTheme("dark");
    }
  };

  return (
    <label className="toggleSwitch">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <span className="slider"></span>
    </label>
  );
}

export default ToggleSwitch;
