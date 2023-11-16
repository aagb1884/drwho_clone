import { useState } from "react";
import WheelInSpacePlotPoint from "../quiz_rounds/WheelInSpace/WheelInSpacePlotPoint";

const WheelQuestion = ({question, checkAnswer, isAnswerCorrect}) => {
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

    return  ( 
        <section className="wheel-question">
            <br />
        <p>{question}</p>
        <input type="text" 
        value={userAnswer} 
        id="input" 
        placeholder="Type your answer here..." 
        className="textbox"
        onChange={(e) => setUserAnswer(e.target.value)}
        onKeyDown={handleKeyPress}/> 
        <br />
    <button id="submit" className="button" onClick={handleAnswerSubmit}>NEXT</button>
    {isAnswerCorrect === true && (
            <p className="correct">Correct!</p>
        )}
        {isAnswerCorrect === false && (
            <p className="wrong" >Incorrect, sorry.</p>
        )}
    </section>
     );
}
 
export default WheelQuestion;