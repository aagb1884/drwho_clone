import { useState } from "react";

const MultipleChoiceQuestion = ({q_index, question, options, checkAnswer, isAnswerCorrect}) => {

    const [userAnswer, setUserAnswer] = useState("");

    const handleAnswerSubmit = () => {
        
        checkAnswer(userAnswer);
        setUserAnswer("");
    }

    const handleKeyPress = (e) => {
      if (e.key === "Enter") {
        handleAnswerSubmit();
      }
    };

    return ( 
        <>
        <p>{question.question}</p>    
       {/* Render options */}
      {question.options.map((option, index) => (
        <label className="radio" key={index}>
          <input
            type="radio"
            name="answer"
            value={option}
            onChange={(e) => setUserAnswer(e.target.value)}
            checked={userAnswer === option}
            onKeyDown={handleKeyPress}
          />
          {option}
        </label>
      ))}
      <br />
      <button
        id="submit"
        className="button"
        onClick={handleAnswerSubmit}
        disabled={!userAnswer} // Disable button until an option is selected
      >
        NEXT
      </button>
  
        {isAnswerCorrect === true && (
            <p className="correct">Correct!</p>
        )}
        {isAnswerCorrect === false && (
            <p className="wrong" >Incorrect, sorry.</p>
        )}
   
        </>
     );
}

export default MultipleChoiceQuestion;