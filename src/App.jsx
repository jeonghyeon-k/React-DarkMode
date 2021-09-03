import React, { useState, useEffect } from "react";
import "./App.css";
const isUserColorTheme = localStorage.getItem("color-theme");
const isOsColorTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
  ? "dark"
  : "light";
const getUserTheme = isUserColorTheme ? isUserColorTheme : isOsColorTheme;

if (getUserTheme === "dark") {
  localStorage.setItem("color-theme", "dark");
} else {
  localStorage.setItem("color-theme", "light");
}

function App() {
  const [check, setcheck] = useState(getUserTheme);
  const onCheck = () => {
    setcheck(check => (check === "dark" ? "light" : "dark"));
  };
  useEffect(() => {
    if (check === "light") {
      localStorage.setItem("color-theme", "light");
      document.documentElement.setAttribute("color-theme", "light");
    } else {
      localStorage.setItem("color-theme", "dark");
      document.documentElement.setAttribute("color-theme", "dark");
    }
  }, [check]);

  const list = { dark: true, light: false };
  return (
    <div>
      <input className="checkbox" onClick={onCheck} type="checkbox" checked={list[check]} readOnly />
      <div className="text">
        Hello, <strong>{check}</strong> Thema!
      </div>
      <div className="box1">Box1</div>
      <div className="box2">Box2</div>
    </div>
  );
}

export default App;
