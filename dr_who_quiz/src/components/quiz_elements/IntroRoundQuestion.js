import React, { useState } from "react";

const IntroRoundQuestion = ({question, isAnswerCorrect, checkAnswer, audio}) => {
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

    const handleButtonClick = () => {
        audio.play()

        setTimeout(() => {
            audio.pause();
        }, 10000)
    }

    return (
        <section className="audio-question">
            <b>Intro Number {question.number}</b>
            <br/>
            <button type="button" className="button" 
            onClick={handleButtonClick}>Play Intro</button>
            <br />
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
 
export default IntroRoundQuestion;