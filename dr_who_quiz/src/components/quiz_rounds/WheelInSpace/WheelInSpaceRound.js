import React, { useState, useEffect } from "react";
import Countdown from "../../quiz_elements/Countdown";
import Footer from "../../layout/Footer";
import { useNavigate } from "react-router-dom";
import { useScore } from "../../quiz_elements/ScoreContext";
import WheelQuestion from "../../quiz_elements/WheelQuestion";
import WheelInSpacePlotPoint from "./WheelInSpacePlotPoint";
import './wheel.css'

const WheelInSpaceRound = ({plotPoints, wheelInSpaceQuestions,
      setIsWheelInSpaceRoundFinished}) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [showQuiz, setShowQuiz] = useState(true);
    const [wheelInSpaceScore, setWheelInSpaceScore] = useState(0);
    const navigate = useNavigate();
    const { updateTotalScore } = useScore();
        const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);

    const handleAnswer = () => {
        // Logic to handle the user's answer and move to the next question
        if (currentQuestionIndex < wheelInSpaceQuestions.length - 1) {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
          setShowQuiz(false);
          setIsWheelInSpaceRoundFinished(true);
        }
      };
    
      function checkAnswer(answer) {
        const lowercaseAnswer = wheelInSpaceQuestions[currentQuestionIndex].answer.toLowerCase();
        const correctAnswer = wheelInSpaceQuestions[currentQuestionIndex].answer;

       if (
            (correctAnswer.includes(answer) ||
            lowercaseAnswer.includes(answer)) && answer.trim() !== ''
          ) {
            setWheelInSpaceScore(wheelInSpaceScore + 1);
            setIsAnswerCorrect(true);
          } else {
            setIsAnswerCorrect(false);
          }
          handleAnswer();
      };
    
      const updateRoundScore = () => {
        updateTotalScore(wheelInSpaceScore);
        setWheelInSpaceScore(0);
        navigate('/');
      };

      const plotPointInfo = plotPoints.map((plotPoint, index) => {
            return <WheelInSpacePlotPoint plotPoint={plotPoint}  key={index}/>
      })
    
    
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
        const currentQuestion = wheelInSpaceQuestions[currentQuestionIndex];
        return (
          <div className="wheel-container">
            <div className="plot-point-layout">
                    {plotPointInfo}
            </div>
            <WheelQuestion
              question={currentQuestion.question}
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
          <p>Round Completed! You scored {wheelInSpaceScore}/{wheelInSpaceQuestions.length}</p> <button onClick={updateRoundScore}>End Round</button> 
        </div>  
        )}
      </div>
      <Footer />
      </>
    );
  };
 
export default WheelInSpaceRound;

