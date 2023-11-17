import React, { useState, useEffect } from "react";
import Countdown from "../../quiz_elements/Countdown";
import Question from "../../quiz_elements/Question";
import Footer from "../../layout/Footer";
import { useNavigate } from "react-router-dom";
import { useScore } from "../../quiz_elements/ScoreContext";


const GreekRound = ({ greekQuestions, setIsGreekRoundFinished }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showQuiz, setShowQuiz] = useState(true);
  const [greekRoundScore, setGreekRoundScore] = useState(0);
  const navigate = useNavigate();
  const { updateTotalScore } = useScore();
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
  
  const handleAnswer = () => {
    if (currentQuestionIndex < greekQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowQuiz(false);
      setIsGreekRoundFinished(true);
    }
  };

  function checkAnswer(answer) {
    const lowercaseAnswer = greekQuestions[currentQuestionIndex].answers.map((ans) => ans.toLowerCase());
    const userInputLowercase = answer.toLowerCase();

    if (lowercaseAnswer.includes(userInputLowercase) && answer.trim() !== '') {
      setGreekRoundScore(greekRoundScore + 1);
      setIsAnswerCorrect(true);
    } else {
      setIsAnswerCorrect(false);
    }
    handleAnswer();
  }



  const updateRoundScore = () => {
    updateTotalScore(greekRoundScore);
    setGreekRoundScore(0);
    navigate('/');
  };


  useEffect(() => {
    if (showQuiz) {
      const questionTimer = setTimeout(() => {
        handleAnswer();
      }, 60000); // 60 seconds

      return () => {
        clearTimeout(questionTimer); 
     
      };
    }
  }, [currentQuestionIndex, showQuiz]);

  const renderQuiz = () => {
    const currentQuestion = greekQuestions[currentQuestionIndex];
    return (
      <div>
        <Question
          question={currentQuestion}
          checkAnswer={checkAnswer}
          isAnswerCorrect={isAnswerCorrect}
        />
        <br />
        <br />
        <Countdown key={currentQuestionIndex} />
      </div>
    );
  };

  return (
    <>
     <div className="show-quiz">
      {showQuiz && renderQuiz()}
      {!showQuiz && (
      <div>
        <p>Round Completed! You scored {greekRoundScore}/{greekQuestions.length}</p> <button onClick={updateRoundScore}>End Round</button> 
      </div>  
      )}
    </div>
   
    </>
  );
};

export default GreekRound;
