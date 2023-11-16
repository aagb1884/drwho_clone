import React, { useState, useEffect } from "react";
import Countdown from "../../quiz_elements/Countdown";
import Question from "../../quiz_elements/Question";
import Footer from "../../layout/Footer";
import { useNavigate } from "react-router-dom";
import { useScore } from "../../quiz_elements/ScoreContext";

const PlayedThemselvesRound = ({playedThemselvesQuestions, setIsPlayedThemselvesRoundFinished}) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [showQuiz, setShowQuiz] = useState(true);
    const [playedThemselvesScore, setPlayedThemselvesScore] = useState(0);
    const navigate = useNavigate();
    const { updateTotalScore } = useScore();
    const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);

    const handleAnswer = () => {
  
        if (currentQuestionIndex < playedThemselvesQuestions.length - 1) {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
          setShowQuiz(false);
          setIsPlayedThemselvesRoundFinished(true);
        }
      };
    

      function checkAnswer(answer) {
        const lowercaseAnswer = playedThemselvesQuestions[currentQuestionIndex].answer.toLowerCase();
        const correctAnswer = playedThemselvesQuestions[currentQuestionIndex].answer;

       if (
            (correctAnswer.includes(answer) ||
            lowercaseAnswer.includes(answer)) && answer.trim() !== ''
          ) {
            setPlayedThemselvesScore(playedThemselvesScore + 1);
            setIsAnswerCorrect(true);
          } else {
            setIsAnswerCorrect(false);
          }
          handleAnswer();
      };
    
      const updateRoundScore = () => {
        updateTotalScore(playedThemselvesScore);
        setPlayedThemselvesScore(0);
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
        const currentQuestion = playedThemselvesQuestions[currentQuestionIndex];
        return (
          <div>
            <Question
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

    return (     <>
      <div>
        {showQuiz && renderQuiz()}
        {!showQuiz && (
        <div>
          <p>Round Completed! You scored {playedThemselvesScore}/{playedThemselvesQuestions.length}</p> <button onClick={updateRoundScore}>End Round</button> 
        </div>  
        )}
      </div>
      <Footer />
      </>
    );
  };
 
export default PlayedThemselvesRound;