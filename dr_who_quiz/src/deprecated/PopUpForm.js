import React, { useState } from 'react';
import { postQuiz } from '../components/HighScores/UserQuizDataService';

const PopUpForm = ({quizData, closeModal}) => {
    const [userName, setUserName] = useState('');

  const handleNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Assuming quizData is an object containing quiz-related data
    const quizPayload = {
      ...quizData,
      userName: userName
    };

    // Call your API function to post the quiz data
    postQuiz(quizPayload)
      .then((data) => {
        console.log('Quiz data posted successfully:', data);
        closeModal(); // Close the modal after posting
      })
      .catch((error) => {
        console.error('Error posting quiz data:', error);
        // Handle error, show error message, etc.
      });
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <h2>Enter Your Name</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="userName">Your Name:</label>
          <input
            type="text"
            id="userName"
            name="userName"
            value={userName}
            onChange={handleNameChange}
            required
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

 
export default PopUpForm;