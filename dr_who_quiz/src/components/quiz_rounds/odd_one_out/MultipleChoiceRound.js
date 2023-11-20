import React, { useState, useEffect } from "react";
import Countdown from "../../quiz_elements/Countdown";
import MultipleChoiceQuestion from "../../quiz_elements/MultipleChoiceQuestion";
import { useNavigate } from "react-router-dom";
import { useScore } from "../../quiz_elements/ScoreContext";

const MultipleChoiceRound = ({MultipleChoiceQuestions, setIsOddOneOutRoundFinished}) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [showQuiz, setShowQuiz] = useState(true);
    const [multipleChoiceRoundScore, setMultipleChoiceRoundScore] = useState(0);
    const navigate = useNavigate();
    const { updateTotalScore } = useScore();
    const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);

    const handleAnswer = () => {
        if (currentQuestionIndex < MultipleChoiceQuestions.length - 1) {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
          setShowQuiz(false);
          setIsOddOneOutRoundFinished(true);
        }
      };
    
      function checkAnswer(answer) {
        const lowercaseAnswer = MultipleChoiceQuestions[currentQuestionIndex].answer.toLowerCase();
        const correctAnswer = MultipleChoiceQuestions[currentQuestionIndex].answer;

       if (
            (correctAnswer.includes(answer) ||
            lowercaseAnswer.includes(answer)) && answer.trim() !== ''
          ) {
            setMultipleChoiceRoundScore(multipleChoiceRoundScore + 1);
            setIsAnswerCorrect(true);
          } else {
            setIsAnswerCorrect(false);
          }
          handleAnswer();
      };

  const updateRoundScore = () => {
    updateTotalScore(multipleChoiceRoundScore);
    setMultipleChoiceRoundScore(0);
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
    const currentQuestion = MultipleChoiceQuestions[currentQuestionIndex];
    return (
      <div>
        <MultipleChoiceQuestion
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
          <p>Round Completed! You scored {multipleChoiceRoundScore}/{MultipleChoiceQuestions.length}</p> <button onClick={updateRoundScore}>End Round</button> 
        </div>  
        )}
      </div>
      
      </>
    );
  };

 
export default MultipleChoiceRound;