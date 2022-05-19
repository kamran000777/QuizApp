import React from 'react'
import QuizBody from './QuizBody';
import "./Quiz.css";


function Science() {
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
                  questionText: "Who is known as the father of Modern Medicine?",
                  answerOptions: [
                    { answerText: "Euclid", isCorrect: false },
                    { answerText: "Pythagoras", isCorrect: false },
                    { answerText: "Eratosthenes", isCorrect: false },
                    { answerText: "Hippocrates", isCorrect: true },
                  ],
                },
                {
                  questionText: "Which one of the following waves are used by the common TV remote control?",
                  answerOptions: [
                    { answerText: "Radio waves", isCorrect: false },
                    { answerText: "Ultrasonic waves", isCorrect: false },
                    { answerText: "Lasers", isCorrect: false },
                    { answerText: "Infrared waves", isCorrect: true },
                  ],
                },
                {
                  questionText: "What is the Largest Organ of the Body?",
                  answerOptions: [
                    { answerText: "Leg", isCorrect: false },
                    { answerText: "Nose", isCorrect: false },
                    { answerText: "Skin", isCorrect: true },
                    { answerText: "Hand", isCorrect: false },
                  ],
                },
                {
                  questionText: "Which animal never drinks water in its entire life?",
                  answerOptions: [
                    { answerText: "Kangaroo", isCorrect: false },
                    { answerText: "Camel", isCorrect: false },
                    { answerText: "Rat", isCorrect: false },
                    { answerText: "Kangaroo rat", isCorrect: true },
                  ],
                },
                {
                  questionText: "Who Invented Gravity?",
                  answerOptions: [
                    { answerText: "Sir Issac Newton", isCorrect: true },
                    { answerText: "Albert Einstein", isCorrect: false },
                    { answerText: "Nicolas Tesla", isCorrect: false },
                    { answerText: "Zhang Heng", isCorrect: false },
                  ],
                }
              ];
              return (
                  <div>
                        <QuizBody questions={questions}/>
                  </div>
                )
}

export default Science