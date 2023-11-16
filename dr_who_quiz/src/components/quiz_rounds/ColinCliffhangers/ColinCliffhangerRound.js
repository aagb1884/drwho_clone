import React, { useState, useEffect } from "react";
import Countdown from "../../quiz_elements/Countdown";
import ImageQuestion from "../../quiz_elements/ImageQuestion";
import Footer from "../../layout/Footer";
import { useNavigate } from "react-router-dom";
import { useScore } from "../../quiz_elements/ScoreContext";

const ColinCliffhangerRound = ({colinCliffhangerQuestions,
isColinRoundFinished, setIsColinRoundFinished}) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [showQuiz, setShowQuiz] = useState(true);
    const [colinCliffhangerRoundScore, setColinCliffhangerRoundScore] = useState(0);
    const navigate = useNavigate();
    const { updateTotalScore } = useScore();
    const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);

    const handleAnswer = () => {
    
        if (currentQuestionIndex < colinCliffhangerQuestions.length - 1) {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
          setShowQuiz(false);
          setIsColinRoundFinished(true)
        }
      };
    
      function checkAnswer(answer) {
        const lowercaseAnswer = colinCliffhangerQuestions[currentQuestionIndex].answers.map((ans) => ans.toLowerCase());
        const userInputLowercase = answer.toLowerCase();

        if (lowercaseAnswer.includes(userInputLowercase) && answer.trim() !== '') {
          setColinCliffhangerRoundScore(colinCliffhangerRoundScore + 1);
          setIsAnswerCorrect(true);
        } else {
          setIsAnswerCorrect(false);
        }
        handleAnswer();
      }
    
    
    
      const updateRoundScore = () => {
        updateTotalScore(colinCliffhangerRoundScore);
        setColinCliffhangerRoundScore(0);
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
    const currentQuestion = colinCliffhangerQuestions[currentQuestionIndex];
    return (
      <div>
        <ImageQuestion
          question={currentQuestion}
          answer={currentQuestion.answer}
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
        <div>
          {showQuiz && renderQuiz()}
          {!showQuiz && (
            <div>
          <p>Round Completed! You scored {colinCliffhangerRoundScore}/{colinCliffhangerQuestions.length}</p>  <button onClick={updateRoundScore}>End Round</button> 
            </div>
    )}
        </div>
        <Footer />
       </>
      );
    };
 
export default ColinCliffhangerRound;