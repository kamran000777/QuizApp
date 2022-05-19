import React from 'react'
import QuizBody from './QuizBody';
import "./Quiz.css";


function GeneralKnowledge() {
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
                  questionText: "________ is the capital of Russia",
                  answerOptions: [
                    { answerText: "Moscow", isCorrect: true },
                    { answerText: "Sydney", isCorrect: false },
                    { answerText: "Oslo", isCorrect: false },
                    { answerText: "New Delhi", isCorrect: false },
                  ],
                },
                {
                  questionText: "Which is the tallest mountain in the world?",
                  answerOptions: [
                    { answerText: "Mount Kilimanjaro", isCorrect: false },
                    { answerText: "Denali", isCorrect: false },
                    { answerText: " Aconacagua", isCorrect: false },
                    { answerText: "Mount Everest", isCorrect: true },
                  ],
                },
                {
                  questionText: "Which is the longest river in the world?",
                  answerOptions: [
                    { answerText: "The Nile", isCorrect: true },
                    { answerText: "Ganga", isCorrect: false },
                    { answerText: "Amazon", isCorrect: false },
                    { answerText: "Mississippi", isCorrect: false },
                  ],
                },
                {
                  questionText: "What is the national currency of Israel?",
                  answerOptions: [
                    { answerText: "Israel new dinar", isCorrect: false },
                    { answerText: "Israel new shekel", isCorrect: true },
                    { answerText: "Israel new guilder", isCorrect: false },
                    { answerText: "Israel new mark", isCorrect: false },
                  ],
                },
                {
                  questionText: "________ is the capital city of South Korea.",
                  answerOptions: [
                    { answerText: "Bangkok", isCorrect: false },
                    { answerText: "Pattaya", isCorrect: false },
                    { answerText: "Seoul", isCorrect: true },
                    { answerText: "Rome", isCorrect: false },
                  ],
                }
              ];
              return (
                  <div>
                        <QuizBody questions={questions}/>
                  </div>
                )
}

export default GeneralKnowledge