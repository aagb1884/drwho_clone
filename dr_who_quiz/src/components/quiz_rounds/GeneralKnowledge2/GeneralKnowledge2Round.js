import React, { useState, useEffect } from "react";
import Countdown from "../../quiz_elements/Countdown";
import Question from "../../quiz_elements/Question";
import { useNavigate } from "react-router-dom";
import { useScore } from "../../quiz_elements/ScoreContext";

const GeneralKnowledge2Round = ({generalKnowledgeQuestions2,
setIsGeneral2RoundFinished}) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [showQuiz, setShowQuiz] = useState(true);
    const [generalKnowledgeRound2Score, setGeneralKnowledgeRound2Score] = useState(0);
    const navigate = useNavigate();
    const { updateTotalScore } = useScore();
    const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);

    const handleAnswer = () => {
        if (currentQuestionIndex < generalKnowledgeQuestions2.length - 1) {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
          setShowQuiz(false);
          setIsGeneral2RoundFinished(true);
        }
      };
    
      function checkAnswer(answer) {
        const lowercaseAnswer = generalKnowledgeQuestions2[currentQuestionIndex].answers.map((ans) => ans.toLowerCase());
        const userInputLowercase = answer.toLowerCase();

        if (lowercaseAnswer.includes(userInputLowercase) && answer.trim() !== '') {
          setGeneralKnowledgeRound2Score(generalKnowledgeRound2Score + 1);
          setIsAnswerCorrect(true);
        } else {
          setIsAnswerCorrect(false);
        }
        handleAnswer();
      }
    
      const updateRoundScore = () => {
        updateTotalScore(generalKnowledgeRound2Score);
        setGeneralKnowledgeRound2Score(0);
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
    const currentQuestion = generalKnowledgeQuestions2[currentQuestionIndex];
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
     <div className="show-quiz">
      {showQuiz && renderQuiz()}
      {!showQuiz && (
      <div>
        <p>Round Completed! You scored {generalKnowledgeRound2Score}/{generalKnowledgeQuestions2.length}</p> <button onClick={updateRoundScore}>End Round</button> 
      </div>  
      )}
    </div>
    
    </>
  );
};
export default GeneralKnowledge2Round;