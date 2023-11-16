import React, { useState, useEffect } from "react";
import Countdown from "../../quiz_elements/Countdown";
import Footer from "../../layout/Footer";
import { useNavigate } from "react-router-dom";
import { useScore } from "../../quiz_elements/ScoreContext";
import IntroRoundQuestion from "../../quiz_elements/IntroRoundQuestion";

const IncidentalIntrosRound = ({incidentalMusicQuestions, setIsIntros1Finished}) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [showQuiz, setShowQuiz] = useState(true);
    const [incidentalIntrosScore, setIncidentalIntrosScore] = useState(0);
    const navigate = useNavigate();
    const { updateTotalScore } = useScore();
    const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);

    const audio = new Audio();

    const handleAnswer = () => {
        if (currentQuestionIndex < incidentalMusicQuestions.length - 1) {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
          setShowQuiz(false);
          setIsIntros1Finished(true);
        }
      };
    
      function checkAnswer(answer) {
        const lowercaseAnswer = incidentalMusicQuestions[currentQuestionIndex].answers.map((ans) => ans.toLowerCase());
        const userInputLowercase = answer.toLowerCase();

        if (lowercaseAnswer.includes(userInputLowercase) && answer.trim() !== '') {
          setIncidentalIntrosScore(incidentalIntrosScore + 1);
          setIsAnswerCorrect(true);
        } else {
          setIsAnswerCorrect(false);
        }
        handleAnswer();
      }
    
      const updateRoundScore = () => {
        updateTotalScore(incidentalIntrosScore);
        setIncidentalIntrosScore(0);
        navigate('/');
      };
    
    
      useEffect(() => {
        if (showQuiz) {
          audio.src = incidentalMusicQuestions[currentQuestionIndex].question; 
          audio.load(); 
    
          const questionTimer = setTimeout(() => {
            audio.pause(); // 
            handleAnswer();
          }, 30000); 
    
          return () => {
            clearTimeout(questionTimer);
          };
        }
      }, [currentQuestionIndex, showQuiz, audio]);

const renderQuiz = () => {
const currentQuestion = incidentalMusicQuestions[currentQuestionIndex];
return (
  <div>
    <IntroRoundQuestion
      question={currentQuestion}
      answer={currentQuestion.answer}
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
  <div>
    {showQuiz && renderQuiz()}
    {!showQuiz && (
    <div>
      <p>Round Completed! You scored {incidentalIntrosScore}/{incidentalMusicQuestions.length}</p> <button onClick={updateRoundScore}>End Round</button> 
    </div>  
    )}
  </div>
  <Footer />
  </>
);
};
 
export default IncidentalIntrosRound;