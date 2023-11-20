import { useState } from "react";
import { getQuizzes } from "../HighScores/UserQuizDataService";

const QuizButtons = ({resetQuiz, saveQuiz, isQuizFinished, username, setUsername}) => {
    const [usernameError, setUsernameError] = useState("");
    const [newUsername, setNewUsername] = useState("");
    const [showMessage, setShowMessage] = useState(false);

    const handleUsernameChange = (event) => {
        setNewUsername(event.target.value);
        setUsernameError("");
      };
      
      const checkUsernameUniqueness = async (username) => {
        try {
          const allQuizzes = await getQuizzes();
      
          const isUnique = !allQuizzes.some((quiz) => quiz.quizUser === newUsername);
      console.log(isUnique)
          return isUnique;

        } catch (error) {
          console.error('Error fetching quizzes:', error);
          return false;
        }
      };
  

    const handleSaveQuiz = async () => {
  try {
    const isUnique = await checkUsernameUniqueness(newUsername);

    if (isUnique) {
      setUsername(newUsername);
      
    } else {
        setShowMessage(true)
    }
  } catch (error) {
    console.error('Error checking username uniqueness:', error);
 
  }
};

    return ( 
        <div className="quiz-buttons-row">
            <div className="new-quiz-button">
                <button onClick={resetQuiz}
                >Start New Quiz</button>  
            </div>

           

            <div className="username-input">
            <input
          type="text"
          placeholder="Enter your username"
          value={newUsername}
          onChange={handleUsernameChange}
        />
         {showMessage && (
        <div className="popup-message">
          <p>That username has already been used, please choose another.</p>
          <button onClick={() => setShowMessage(false)}>Close</button>
        </div>
      )}
         <div className="save-quiz-button">
                <button onClick={handleSaveQuiz}
                >Save Username</button>  
            </div>
            </div>

            <div className="add-to-high-score-button">
                <button onClick={saveQuiz}
                disabled={!isQuizFinished}
                >Submit Score</button>
            </div>

            </div>
     );
}
 
export default QuizButtons;