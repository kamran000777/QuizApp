import React, { useContext } from 'react'
import QuizBody from './QuizBody';
import "./Quiz.css";


function HTML() {
      const questions = [
        {
          questionText: "Rules of Play",
          answerOptions: [
            { answerText: "Questions are of MCQ type", isCorrect: false },
            { answerText: "There will be 4 options", isCorrect: false },
            { answerText: "Correct answers shows green", isCorrect: false },
            { answerText: "Wrong answers shows red", isCorrect: false },
          ],
        },
            {
              questionText: "An HTML document can contain _____",
              answerOptions: [
                { answerText: "Attributes", isCorrect: false },
                { answerText: " Tags", isCorrect: false },
                { answerText: "Raw text", isCorrect: false },
                { answerText: " All the answers are true", isCorrect: true },
              ],
            },
            {
              questionText: " A page designed in HTML is called _____",
              answerOptions: [
                { answerText: "Application", isCorrect: false },
                { answerText: "Web Page", isCorrect: true },
                { answerText: " Cover page", isCorrect: false },
                { answerText: "Front-end", isCorrect: false },
              ],
            },
            {
              questionText: "An HTML document is saved with the ____ extension.",
              answerOptions: [
                { answerText: ".html", isCorrect: true },
                { answerText: ".htl", isCorrect: false },
                { answerText: " .hml", isCorrect: false },
                { answerText: ".htnl", isCorrect: false },
              ],
            },
            {
              questionText: "The HTML document contains a root tag called ____",
              answerOptions: [
                { answerText: "Head", isCorrect: false },
                { answerText: "Title", isCorrect: false },
                { answerText: "HTML", isCorrect: true },
                { answerText: "Body", isCorrect: false },
              ],
            },
            {
              questionText: "If we want to place text around an image, which CSS property should we use?",
              answerOptions: [
                { answerText: "push", isCorrect: false },
                { answerText: "align", isCorrect: false },
                { answerText: " float", isCorrect: true },
                { answerText: "wrap", isCorrect: false },
              ],
            }
          ];
  return (
    <div>
          <QuizBody questions={questions}/>
    </div>
  )
}

export default HTML