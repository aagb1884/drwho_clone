import React, { useState, useEffect } from "react";
import Countdown from "../../quiz_elements/Countdown";
import Question from "../../quiz_elements/Question";
import Footer from "../../layout/Footer";
import { useNavigate } from "react-router-dom";
import { useScore } from "../../quiz_elements/ScoreContext";

const DogRound = ({DogQuestions, 
    isDogRoundFinished, setIsDogRoundFinished}) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [showQuiz, setShowQuiz] = useState(true);
    const [dogRoundScore, setDogRoundScore] = useState(0);
    const navigate = useNavigate();
    const { updateTotalScore } = useScore();
    const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
  
  const handleAnswer = () => {
    if (currentQuestionIndex < DogQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowQuiz(false);
      setIsDogRoundFinished(true); 
       }
  };

  function checkAnswer(answer) {
    const lowercaseAnswer = DogQuestions[currentQuestionIndex].answers.map((ans) => ans.toLowerCase());
    const userInputLowercase = answer.toLowerCase();

    if (lowercaseAnswer.includes(userInputLowercase) && answer.trim() !== '') {
      setDogRoundScore(dogRoundScore + 1);
      setIsAnswerCorrect(true);
    } else {
      setIsAnswerCorrect(false);
    }
    handleAnswer();
  }
  const updateRoundScore = () => {
    updateTotalScore(dogRoundScore);
    setDogRoundScore(0);
    navigate('/');
  };


  useEffect(() => {
    if (showQuiz) {
      const questionTimer = setTimeout(() => {
        handleAnswer();
      }, 60000); // 60 seconds

      return () => {
        clearTimeout(questionTimer); // Clear the timer on component unmount or re-render
     
      };
    }
  }, [currentQuestionIndex, showQuiz]);

  const renderQuiz = () => {
    const currentQuestion = DogQuestions[currentQuestionIndex];
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
    <div>
      {showQuiz && renderQuiz()}
      {!showQuiz && (
      <div>
        <p>Round Completed! You scored {dogRoundScore}/{DogQuestions.length}</p> <button onClick={updateRoundScore}>End Round</button> 
      </div>
        )}
    </div>
    <Footer />
    </>
  );
};

 
export default DogRound;