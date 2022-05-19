import React from 'react'
import QuizBody from './QuizBody';
import "./Quiz.css";


function Math() {
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
                  questionText: "How many months are equal to 45 days?",
                  answerOptions: [
                    { answerText: "2 ¼ months.", isCorrect: false },
                    { answerText: "1 ½ months.", isCorrect: true },
                    { answerText: "¼ months.", isCorrect: false },
                    { answerText: "2 months.", isCorrect: false },
                  ],
                },
                {
                  questionText: "Speed of a car is 60 km/hr. Distance covered in 1 ¼ hours is _____",
                  answerOptions: [
                    { answerText: "60 km", isCorrect: false },
                    { answerText: "70km", isCorrect: false },
                    { answerText: "80km", isCorrect: false },
                    { answerText: "75km", isCorrect: true },
                  ],
                },
                {
                  questionText: "An right angle is _____",
                  answerOptions: [
                    { answerText: "90 degree", isCorrect: true },
                    { answerText: "45 degree", isCorrect: false },
                    { answerText: "180 degree", isCorrect: false },
                    { answerText: "30 degree", isCorrect: false },
                  ],
                },
                {
                  questionText: "How many sides are there in a triangle?",
                  answerOptions: [
                    { answerText: "2", isCorrect: false },
                    { answerText: "4", isCorrect: false },
                    { answerText: "5", isCorrect: false },
                    { answerText: "3", isCorrect: true },
                  ],
                },
                {
                  questionText: "Square of 11 is___",
                  answerOptions: [
                    { answerText: "1211", isCorrect: false },
                    { answerText: "125", isCorrect: false },
                    { answerText: "121", isCorrect: true },
                    { answerText: "325", isCorrect: false },
                  ],
                }
              ];
              return (
                  <div>
                        <QuizBody questions={questions}/>
                  </div>
                )
}

export default Math