import React, { useState, useEffect } from "react";
import "./Quiz.css";
import Header from "./Header";
import Footer from "./Footer";
import Result from "./Result";



export default function QuizBody({ questions }) {
  const [count, setCount] = useState(0);
  const [score, setScore] = useState(0);
  const [resultFlag, setFlag ]= useState(false);
  const [time , setTime ] = useState(15);
  const main = document.querySelector(".main");


  
  useEffect(()=>{
    if(count!=0){
      const timeRef = setInterval(()=>{
        setTime(prev=>prev-1)
      },1000)
        
      return ()=>{
        clearInterval(timeRef);
      }
    }
  })
  

  //handling button error and correct answer display and count and score increase
  const clickHandler = (index) => {

    const arr = document.querySelectorAll(".btn");

    if (questions[count].answerOptions[index].isCorrect == true) {
      setScore((prev) => prev + 1);
      arr[index].style = "background-color: rgba(7, 141, 3, 0.596)";
    } else {
     
      let correctIndex = -1;
      const indexTrue = questions[count].answerOptions;
        for(let [i,temp] of indexTrue .entries()){
          if(temp.isCorrect==true){
            correctIndex = i;
          }
        }
      
//correctIdx indicates the correct answer in the option and index is selected option
      arr[correctIndex].style = "background-color: rgba(7, 141, 3, 0.596)";
      arr[index].style = "background-color: rgba(190, 0, 0, 0.408)";
    }
  };

  const questionHandler = () => {
    const arr = document.querySelectorAll(".btn");
    arr.forEach((element) => {
      element.style = "background-color: rgba(160, 223, 248, 0.897)";
    });
    setTime(15);
    if (count == questions.length - 1) {
      main.style = "display:none";
      setFlag(true);
    } else {
      setCount((prev) => prev + 1);
    }
  };

  const resetHandler = () => {
    window.location.reload();
  };

  return (
    <>
      <div className="main">
        <Header className="header" time={time!=0 ? time:questionHandler()} />
        <div className="container">
          <div className="question-text">
            {count ? count + ". " : null} {questions[count].questionText}
          </div>
        </div>
        <div className="answer-section">
          <button className="btn" onClick={() => clickHandler(0)}>
            {questions[count].answerOptions[0].answerText}
          </button>
          <button className="btn" onClick={() => clickHandler(1)}>
            {questions[count].answerOptions[1].answerText}
          </button>
          <button className="btn" onClick={() => clickHandler(2)}>
            {questions[count].answerOptions[2].answerText}
          </button>
          <button className="btn" onClick={() => clickHandler(3)}>
            {questions[count].answerOptions[3].answerText}
          </button>
        </div>
        <Footer
          className="footer"
          length={questions.length}
          count={count}
          questionHandler={questionHandler}
        />
      </div>
        {resultFlag && <Result length={questions.length} score={score} reset={resetHandler} />}
    </>
  );
}
