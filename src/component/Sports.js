import React from 'react'
import QuizBody from './QuizBody';
import "./Quiz.css";


function Sports() {
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
                  questionText: "Ryder cup is related to which sports?",
                  answerOptions: [
                    { answerText: "Polo", isCorrect: false },
                    { answerText: " Golf", isCorrect: true },
                    { answerText: "Badminton", isCorrect: false },
                    { answerText: " Tennis", isCorrect: false },
                  ],
                },
                {
                  questionText: "Which male athlete has won the maximum number of medals at the World Championships in Athletics?",
                  answerOptions: [
                    { answerText: "Michael Johnson", isCorrect: false },
                    { answerText: "Mo Farah", isCorrect: false },
                    { answerText: " Usain Bolt", isCorrect: true },
                    { answerText: "Carl lewis", isCorrect: false },
                  ],
                },
                {
                  questionText: "Which country's national cricket team is nicknamed as the “Proteas”?",
                  answerOptions: [
                    { answerText: "South Africa", isCorrect: true },
                    { answerText: "New Zealand", isCorrect: false },
                    { answerText: " Australia", isCorrect: false },
                    { answerText: "India", isCorrect: false },
                  ],
                },
                {
                  questionText: "What is LeBron James famous for?",
                  answerOptions: [
                    { answerText: "As an American football player", isCorrect: false },
                    { answerText: "As an American basketball player", isCorrect: true },
                    { answerText: "As an American tennis player", isCorrect: false },
                    { answerText: "As a Japanese tennis player", isCorrect: false },
                  ],
                },
                {
                  questionText: "Which country is the birthplace of cricket game?",
                  answerOptions: [
                    { answerText: "France", isCorrect: false },
                    { answerText: "New Zealand", isCorrect: false },
                    { answerText: " Great Britain", isCorrect: true },
                    { answerText: "Australia", isCorrect: false },
                  ],
                }
              ];
              return (
                  <div>
                        <QuizBody className="quizbody" questions={questions}/>
                  </div>
                )
}

export default Sports