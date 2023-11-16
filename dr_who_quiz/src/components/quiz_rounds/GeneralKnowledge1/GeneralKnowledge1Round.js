import React, { useState, useEffect } from "react";
import Countdown from "../../quiz_elements/Countdown";
import Question from "../../quiz_elements/Question";
import Footer from "../../layout/Footer";
import { useNavigate } from "react-router-dom";
import { useScore } from "../../quiz_elements/ScoreContext";

const GeneralKnowledgeOneRound = ({generalKnowledgeQuestions1,
      setIsGeneral1RoundFinished}) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [showQuiz, setShowQuiz] = useState(true);
    const [generalKnowledgeRound1Score, setGeneralKnowledgeRound1Score] = useState(0);
    const navigate = useNavigate();
    const { updateTotalScore } = useScore();
    const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);

    const handleAnswer = () => {
        if (currentQuestionIndex < generalKnowledgeQuestions1.length - 1) {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
          setShowQuiz(false);
          setIsGeneral1RoundFinished(true);
        }
      };
    
      function checkAnswer(answer) {
        const lowercaseAnswer = generalKnowledgeQuestions1[currentQuestionIndex].answers.map((ans) => ans.toLowerCase());
        const userInputLowercase = answer.toLowerCase();

        if (lowercaseAnswer.includes(userInputLowercase) && answer.trim() !== '') {
          setGeneralKnowledgeRound1Score(generalKnowledgeRound1Score + 1);
          setIsAnswerCorrect(true);
        } else {
          setIsAnswerCorrect(false);
        }
        handleAnswer();
      }
    
    
      const updateRoundScore = () => {
        updateTotalScore(generalKnowledgeRound1Score);
        setGeneralKnowledgeRound1Score(0);
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
    const currentQuestion = generalKnowledgeQuestions1[currentQuestionIndex];
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
        <p>Round Completed! You scored {generalKnowledgeRound1Score}/{generalKnowledgeQuestions1.length}</p> <button onClick={updateRoundScore}>End Round</button> 
      </div>)}
    </div>
    <Footer />
    </>
  );
};
export default GeneralKnowledgeOneRound;