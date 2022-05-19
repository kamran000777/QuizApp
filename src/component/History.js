import React from 'react'
import QuizBody from './QuizBody';
import "./Quiz.css";


function History() {
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
                  questionText: " Who was the first President of India?",
                  answerOptions: [
                    { answerText: "Mahatma Gandhi", isCorrect: false },
                    { answerText: "Dr. Rajendra Prasad", isCorrect: true },
                    { answerText: "Jawaharlal Nehru", isCorrect: false },
                    { answerText: "Bal Gangadhar Tilak", isCorrect: false },
                  ],
                },
                {
                  questionText: " Who invented Computer?",
                  answerOptions: [
                    { answerText: "Leonard Adleman", isCorrect: false },
                    { answerText: "Charles Babbage", isCorrect: true },
                    { answerText: " Charles Bachman", isCorrect: false },
                    { answerText: "Paul Baran", isCorrect: false },
                  ],
                },
                {
                  questionText: "Who Founded America? ",
                  answerOptions: [
                    { answerText: "Christopher Columbus", isCorrect: true },
                    { answerText: "J.F.Kennedy", isCorrect: false },
                    { answerText: "Donald Trump", isCorrect: false },
                    { answerText: "Jhonny Deep", isCorrect: false },
                  ],
                },
                {
                  questionText: "What is the Tenure of First World War ?",
                  answerOptions: [
                    { answerText: "(1914-1915)", isCorrect: false },
                    { answerText: "(2014-2019)", isCorrect: false },
                    { answerText: "(1914-1918)", isCorrect: true },
                    { answerText: "(1938-1945)", isCorrect: false },
                  ],
                },
                {
                  questionText: "Who build the Agra Fort?",
                  answerOptions: [
                    { answerText: "Akbar", isCorrect: true },
                    { answerText: "Shivaji", isCorrect: false },
                    { answerText: "Sahajahan", isCorrect: false },
                    { answerText: "Babar", isCorrect: false },
                  ],
                }
              ];
              return (
                  <div>
                        <QuizBody questions={questions}/>
                  </div>
                )
}

export default History