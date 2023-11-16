import React, { useState, useEffect } from "react";
import Countdown from "../../quiz_elements/Countdown";
import Footer from "../../layout/Footer";
import MultipleChoiceQuestion from "../../quiz_elements/MultipleChoiceQuestion";
import { useNavigate } from "react-router-dom";
import { useScore } from "../../quiz_elements/ScoreContext";

const ProductionCodesRound = ({productionCodesQuestions,
                    setIsProductionCodesRoundFinished}) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [showQuiz, setShowQuiz] = useState(true);
    const [productionCodesRoundScore, setProductionCodesRoundScore] = useState(0);
    const navigate = useNavigate();
    const { updateTotalScore } = useScore();
    const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);

    const handleAnswer = () => {
  
        if (currentQuestionIndex < productionCodesQuestions.length - 1) {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
          setShowQuiz(false);
          setIsProductionCodesRoundFinished(true);
        }
      };
    
      function checkAnswer(answer) {
        const lowercaseAnswer = productionCodesQuestions[currentQuestionIndex].answer.toLowerCase();
        const correctAnswer = productionCodesQuestions[currentQuestionIndex].answer;

       if (
            (correctAnswer.includes(answer) ||
            lowercaseAnswer.includes(answer)) && answer.trim() !== ''
          ) {
            setProductionCodesRoundScore(productionCodesRoundScore + 1);
            setIsAnswerCorrect(true);
          } else {
            setIsAnswerCorrect(false);
          }
          handleAnswer();
      };

  const updateRoundScore = () => {
    updateTotalScore(productionCodesRoundScore);
    setProductionCodesRoundScore(0);
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
    const currentQuestion = productionCodesQuestions[currentQuestionIndex];
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
      <div>
        {showQuiz && renderQuiz()}
        {!showQuiz && (
        <div>
          <p>Round Completed! You scored {productionCodesRoundScore}/{productionCodesQuestions.length}</p> <button onClick={updateRoundScore}>End Round</button> 
        </div>  
        )}
      </div>
      <Footer />
      </>
    );
  };
 
export default ProductionCodesRound;