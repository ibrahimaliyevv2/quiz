import React, { useState } from "react";

export default function App() {
  const questions = [
    {
      questionText: "Inside which HTML element do we put the JavaScript?",
      answerOptions: [
        { answerText: "<script>", isCorrect: true },
        { answerText: "<javascript>", isCorrect: false },
        { answerText: "<scripting>", isCorrect: false },
        { answerText: "<js>", isCorrect: false },
      ],
    },
    {
      questionText: "How do you write 'Hello World' in an alert box?",
      answerOptions: [
        { answerText: "alert('Hello World')", isCorrect: true },
        { answerText: "msg('Hello World')", isCorrect: false },
        { answerText: "msgBox('Hello World')", isCorrect: false },
        { answerText: "alertBpx('Hello World')", isCorrect: false },
      ],
    },
    {
      questionText: "How do you create a function in JavaScript?",
      answerOptions: [
        { answerText: "function myFunction()", isCorrect: true },
        { answerText: "function = myFunction()", isCorrect: false },
        { answerText: "function:myFunction()", isCorrect: false },
      ],
    },
    {
      questionText: "How does a while loop start?",
      answerOptions: [
        { answerText: "while i = 1 to to 10", isCorrect: false },
        { answerText: "while(i <= 10)", isCorrect: true },
        { answerText: "while(i <= 10; i++)", isCorrect: false },
      ],
    },
    {
      questionText: "What is the correct way to write a JavaScript array?",
      answerOptions: [
        {
          answerText: "var colors = ['red', 'green', 'blue']",
          isCorrect: true,
        },
        {
          answerText: "var colors = 'red', 'green', 'blue'",
          isCorrect: false,
        },
        {
          answerText: "var colors = (1:'red', 2:'green', 3:'blue')",
          isCorrect: false,
        },
        {
          answerText: "var colors = {1:'red', 2:'green', 3:'blue'}",
          isCorrect: false,
        },
      ],
    },
    {
      questionText: "JavaScript is the same as Java.",
      answerOptions: [
        { answerText: "True", isCorrect: true },
        { answerText: "False", isCorrect: false },
      ],
    },
    {
      questionText: "How do you declare a JavaScript variable?",
      answerOptions: [
        { answerText: "v carName;", isCorrect: false },
        { answerText: "var carName;", isCorrect: true },
        { answerText: "variable carName;", isCorrect: false },
      ],
    },
    {
      questionText: "Which operator is used to assign a value to a variable?",
      answerOptions: [
        { answerText: "x", isCorrect: false },
        { answerText: "*", isCorrect: false },
        { answerText: "/", isCorrect: false },
        { answerText: "=", isCorrect: true },
      ],
    },
    {
      questionText: "What will the following code return: Boolean(10 > 9)",
      answerOptions: [
        { answerText: "false", isCorrect: false },
        { answerText: "NaN", isCorrect: false },
        { answerText: "true", isCorrect: true },
      ],
    },
    {
      questionText: "Is JavaScript case-sensitive?",
      answerOptions: [
        { answerText: "Yes", isCorrect: true },
        { answerText: "No", isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const nextQuestion = currentQuestion + 1;

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  // document.querySelector(".prev-que").addEventListener("click", function () {
  //   if (currentQuestion > 1) {
  //     setCurrentQuestion(prevQuestion);
  //   }
  // });

  // document.querySelector(".next-que").addEventListener("click", function () {
  //   if (nextQuestion < questions.length) {
  //     setCurrentQuestion(nextQuestion);
  //   }
  // });

  return (
    <div className="app">
      {showScore ? (
        <div className="score-section text-center">
          {score > 5 ? `Excellent🔥` : `Be ready next time😭`}
          <br></br>You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
