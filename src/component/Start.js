import React from "react";
import Categories from "./Categories";
import "./Quiz.css";

function Start() {
  

  const clickHandler = () => {
    const startbtn = document.querySelector(".start");
  const categoryPg = document.querySelector(".category");
    startbtn.style = "display:none";
    categoryPg.style = "display:block";
  };
  return (
    <>
      <div className="start">
        <h1>Want to Play!!!</h1>
        <button onClick={clickHandler}>Start</button>
      </div>
      <div className="category">
        <Categories />
      </div>
    </>
  )
}

export default Start;
