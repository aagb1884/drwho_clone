import React, { useState, useEffect } from "react";
import Countdown from "../../quiz_elements/Countdown";
import ImageQuestion from "../../quiz_elements/ImageQuestion";
import Footer from "../../layout/Footer";
import { useNavigate } from "react-router-dom";
import { useScore } from "../../quiz_elements/ScoreContext";

const InhumanRound = ({inhumanQuestions,
setIsInhumanRoundFinished}) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [showQuiz, setShowQuiz] = useState(true);
    const [inhumanRoundScore, setInhumanRoundScore] = useState(0);
    const navigate = useNavigate();
    const { updateTotalScore } = useScore();
    const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);

    const handleAnswer = () => {
        // Logic to handle the user's answer and move to the next question
        if (currentQuestionIndex < inhumanQuestions.length - 1) {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
          setShowQuiz(false);
          setIsInhumanRoundFinished(true);
        }
      };
    
   
      function checkAnswer(answer) {
        const lowercaseAnswer = inhumanQuestions[currentQuestionIndex].answers.map((ans) => ans.toLowerCase());
        const userInputLowercase = answer.toLowerCase();

        if (lowercaseAnswer.includes(userInputLowercase) && answer.trim() !== '') {
          setInhumanRoundScore(inhumanRoundScore + 1);
          setIsAnswerCorrect(true);
        } else {
          setIsAnswerCorrect(false);
        }
        handleAnswer();
      }
    
    
    
      const updateRoundScore = () => {
        updateTotalScore(inhumanRoundScore);
        setInhumanRoundScore(0);
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
    const currentQuestion = inhumanQuestions[currentQuestionIndex];
    return (
      <div>
        <ImageQuestion
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
  
    return (   <>
       <div className="show-quiz">
        {showQuiz && renderQuiz()}
        {!showQuiz && (
        <div>
          <p>Round Completed! You scored {inhumanRoundScore}/{inhumanQuestions.length}</p> <button onClick={updateRoundScore}>End Round</button> 
        </div>  
        )}
      </div>
     
      </>
    );
  };
 
export default InhumanRound;