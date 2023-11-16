import { useState } from "react";
import PopIntrosRound from "./PopIntrosRound";
import Footer from "../../layout/Footer";

const PopIntrosData = ({isIntros2Finished, setIsIntros2Finished}) => {

    const popMusicQuestions = [
        {
            number: 1,
            question: "/sounds/intros_pop/pop_intro_1.mp3",
            answers: ['Remembrance of the Daleks'],
          },
          {
            number: 2,
            question: "/sounds/intros_pop/pop_intro_2.mp3",
            answers: ['End of the World', 'The End of the World'],
          },
          {
            number: 3,
            question: "/sounds/intros_pop/pop_intro_3.mp3",
            answers: ['Colony in Space'],
          },
          {
            number: 4,
            question: "/sounds/intros_pop/pop_intro_4.mp3",
            answers: ['Aliens of London'],
          },
          {
            number: 5,
            question: "/sounds/intros_pop/pop_intro_5.mp3",
            answers: ['Big Bang', 'The Big Bang'],
          },
          {
            number: 6,
            question: "/sounds/intros_pop/pop_intro_6.mp3",
            answers: ['Arachnids in the UK'],
          },
          {
            number: 7,
            question: "/sounds/intros_pop/pop_intro_7.mp3",
            answers: ['Revelation of the Daleks'],
          },
          {
            number: 8,
            question: "/sounds/intros_pop/pop_intro_8.mp3",
            answers: ['Love & Monsters'],
          },
          {
            number: 9,
            question: "/sounds/intros_pop/pop_intro_9.mp3",
            answers: ['Rebel Flesh', 'The Rebel Flesh'],
          },
          {
            number: 10,
            question: "/sounds/intros_pop/pop_intro_10.mp3",
            answers: ['Power of the Doctor', 'The Power of the Doctor'],
          }
        ];
  
        const [showRound, setShowRound] = useState(false);
  
        const startQuizButton = () => {
          setShowRound(true)
        }

    return ( <div>
        
        <header><h1>The Intros Round - Pop Music</h1></header>
        <p>Click on the play button to hear 10 seconds of a song (that can - sometimes loosely - be described as pop music) used in an episode of Doctor Who.</p> 
        <p>For one point, simply tell us which story it is from.</p>
        <aside>The audio will keep playing for 10 seconds once you click 'Play Intro', even if you move onto the next question.</aside>
        <aside>There are 10 questions in this round.</aside>
          <br />
    
        {!showRound && (
            <button id="start-round" className="button" onClick={startQuizButton}>
              Start Round
            </button>
          )}
    
          {showRound && <PopIntrosRound popMusicQuestions={popMusicQuestions} 
                             setIsIntros2Finished={setIsIntros2Finished}       />}
          <Footer />
          </div>
        );
    }
 
export default PopIntrosData;