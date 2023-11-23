import { useState } from "react";
import { getQuizzes } from "../HighScores/UserQuizDataService";

const QuizButtons = ({resetQuiz, saveQuiz, isQuizFinished, finishQuiz, username, setUsername}) => {
     const [newUsername, setNewUsername] = useState("");
    

    const handleUsernameChange = (event) => {
        setNewUsername(event.target.value);
      };

    const handleSaveUsername = () => {
      setUsername(newUsername)
    }


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
          maxLength={20}
        />
         <div className="save-quiz-button">
                <button onClick={handleSaveUsername}
                >Save Username</button>  
            </div>
      </div>

      <div className="finish-quiz-button">
                <button onClick={finishQuiz}
                 >Finish quiz</button>
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