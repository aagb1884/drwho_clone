import { useState } from "react";
import { getSingleQuiz } from "./HighScores/UserQuizDataService";
import { useNavigate } from "react-router-dom";

const UserQuizInfo = ({allUserQuizzes, setSelectedQuiz}) => {
  

  const navigate = useNavigate();

    const sortedQuizzes = allUserQuizzes.sort((a, b) => {
        const dateA = new Date(a.quizDateFinished);
        const dateB = new Date(b.quizDateFinished);
        return dateB - dateA;
      });

    const handleQuizClick = async (quizId) => {
        try {
          const singleQuiz = await getSingleQuiz(quizId);
          setSelectedQuiz(singleQuiz);
          navigate('/');
        } catch (error) {
          console.error('Error fetching quiz details:', error);
        }
        
      };
 
      return (
        <div className="user-quiz-info">
          <h3>Quiz Information</h3>
          {sortedQuizzes.map((quiz, index) => (
            <div key={quiz.quizId} className={index % 2 === 0 ? "even-row" : "odd-row"}>
              {quiz.isQuizFinished ? (
                <>
                  <p>Date Last Saved: {quiz.quizDateFinished}</p>
                  <p>Finished: {quiz.isQuizFinished ? 'Yes' : 'No'}</p>
                  <p>Score: {quiz.totalScore}</p>
                </>
              ) : (
                <>
                  <button onClick={() => handleQuizClick(quiz._id)}>Continue Quiz</button>
                  <p>Date Last Saved: {quiz.quizDateFinished}</p>
                  <p>Finished: {quiz.isQuizFinished ? 'Yes' : 'No'}</p>
                  <p>Score: {quiz.totalScore}</p>
                </>
              )}
            </div>
          ))}

    </div>
  );
};
            
 
export default UserQuizInfo;