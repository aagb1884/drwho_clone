import React, { useState, useEffect } from "react";
import Countdown from "../../quiz_elements/Countdown";
import Question from "../../quiz_elements/Question";
import { useNavigate } from "react-router-dom";
import { useScore } from "../../quiz_elements/ScoreContext";

const HowLongRound = ({howLongQuestions, setIsHowLongRoundFinished}) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [showQuiz, setShowQuiz] = useState(true);
    const [howLongRoundScore, setHowLongroundScore] = useState(0);
    const navigate = useNavigate();
    const { updateTotalScore } = useScore();
    const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);

    const handleAnswer = () => {
    
        if (currentQuestionIndex < howLongQuestions.length - 1) {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
          setShowQuiz(false);
          setIsHowLongRoundFinished(true);
        }
      };
    
      function checkAnswer(answer) {
        const lowercaseAnswer = howLongQuestions[currentQuestionIndex].answers.map((ans) => ans.toLowerCase());
        const userInputLowercase = answer.toLowerCase();

        if (lowercaseAnswer.includes(userInputLowercase) && answer.trim() !== '') {
          setHowLongroundScore(howLongRoundScore + 1);
          setIsAnswerCorrect(true);
        } else {
          setIsAnswerCorrect(false);
        }
        handleAnswer();
      }
    
      const updateRoundScore = () => {
        updateTotalScore(howLongRoundScore);
        setHowLongroundScore(0);
        navigate('/');
      };
    
    
      useEffect(() => {
        if (showQuiz) {
          const questionTimer = setTimeout(() => {
            handleAnswer();
          }, 60000); 


  return () => {
    clearTimeout(questionTimer);
  };
}
}, [currentQuestionIndex, showQuiz]);

const renderQuiz = () => {
const currentQuestion = howLongQuestions[currentQuestionIndex];
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

    return (    <>
       <div className="show-quiz">
        {showQuiz && renderQuiz()}
        {!showQuiz && (
        <div>
          <p>Round Completed! You scored {howLongRoundScore}/{howLongQuestions.length}</p> <button onClick={updateRoundScore}>End Round</button> 
        </div>  
        )}
      </div>
      
      </>
    );
  };
 
export default HowLongRound;