import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Timer from "./Timer";
import TimeList from "./TimeList";
import { TestContext } from "./TestContext";
import "./style.css";

const Main = () => {
  const [title, setTitle] = useState("Timer");
  const [isLight, setIsLight] = useState(false);
  const [timeArr, setTimeArr] = useState([]);

  useEffect(() => {
    console.log(isLight);
  }, [isLight]);

  const handelSetIsLight = () => {
    setIsLight(!isLight);
  };

  return (
    <TestContext.Provider value={{ timeArr, setTimeArr, color: "lime" }}>
      {/* value={{ timeArr, setTimeArr, color: "lime" } -> When we have an object that has a value with the same name, we don't write its value anymore and ES6 notices it and we call it a lateral object. */}
      <div
        className="main"
        style={{ background: isLight ? "rgb(200, 200, 200)" : "rgb(25,25,25)" }}
      >
        <h1>{title}</h1>
        <Timer isLight={isLight} handelSetIsLight={handelSetIsLight} />
        <TimeList />
      </div>
    </TestContext.Provider>
  );
};
export default Main;
