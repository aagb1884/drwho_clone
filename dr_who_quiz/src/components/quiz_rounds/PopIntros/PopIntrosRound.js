import React, { useState, useEffect } from "react";
import Countdown from "../../quiz_elements/Countdown";
import Footer from "../../layout/Footer";
import { useNavigate } from "react-router-dom";
import { useScore } from "../../quiz_elements/ScoreContext";
import IntroRoundQuestion from "../../quiz_elements/IntroRoundQuestion";

const PopIntrosRound = ({popMusicQuestions, setIsIntros2Finished}) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [showQuiz, setShowQuiz] = useState(true);
    const [popIntrosScore, setPopIntrosScore] = useState(0);
    const navigate = useNavigate();
    const { updateTotalScore } = useScore();
     const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);

    const audio = new Audio();

    const handleAnswer = () => {
        // Logic to handle the user's answer and move to the next question
        if (currentQuestionIndex < popMusicQuestions.length - 1) {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
          setShowQuiz(false);
          setIsIntros2Finished(true);
        }
      };

      function checkAnswer(answer) {
        const lowercaseAnswer = popMusicQuestions[currentQuestionIndex].answers.map((ans) => ans.toLowerCase());
        const userInputLowercase = answer.toLowerCase();

        if (lowercaseAnswer.includes(userInputLowercase) && answer.trim() !== '') {
          setPopIntrosScore(popIntrosScore + 1);
          setIsAnswerCorrect(true);
        } else {
          setIsAnswerCorrect(false);
        }
        handleAnswer();
      }
    
      const updateRoundScore = () => {
        updateTotalScore(popIntrosScore);
        setPopIntrosScore(0);
        navigate('/');
      };
    
    
      useEffect(() => {
        if (showQuiz) {
          audio.src = popMusicQuestions[currentQuestionIndex].question; 
          audio.load(); 
    
          const questionTimer = setTimeout(() => {
            audio.pause(); 
            handleAnswer();
          }, 30000); // 30 seconds timer
    
          return () => {
            clearTimeout(questionTimer);
          };
        }
      }, [currentQuestionIndex, showQuiz, audio]);

      const renderQuiz = () => {
        const currentQuestion = popMusicQuestions[currentQuestionIndex];
        return (
          <div>
            <IntroRoundQuestion
              question={currentQuestion}
              checkAnswer={checkAnswer}
              audio={audio}
              isAnswerCorrect={isAnswerCorrect}
            />
            <br />
            <br />
            <Countdown key={currentQuestionIndex} />
          </div>
        );
        };

    return (     <>
       <div className="show-quiz">
        {showQuiz && renderQuiz()}
        {!showQuiz && (
        <div>
          <p>Round Completed! You scored {popIntrosScore}/{popMusicQuestions.length}</p> <button onClick={updateRoundScore}>End Round</button> 
        </div>  
        )}
      </div>
     
      </>
    );
  };
 
export default PopIntrosRound;