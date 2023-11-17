import { useState } from "react";
import IncidentalIntrosRound from "./IncidentalIntrosRound";
import Footer from "../../layout/Footer";

const IncidentalIntrosData = ({isIntros1Finished, setIsIntros1Finished}) => {

    const incidentalMusicQuestions = [
        {
            number: 1,
            question: "/sounds/incidental/incidental_1.mp3",
            answers: ['The Krotons', 'Krotons'],
          },
          {
            number: 2,
            question: "/sounds/incidental/incidental_2.mp3",
            answers: ['The Krotons', 'Krotons'],
          },
          {
            number: 3,
            question: "/sounds/incidental/incidental_3.mp3",
            answers: ['The Krotons', 'Krotons'],
          },
          {
            number: 4,
            question: "/sounds/incidental/incidental_4.mp3",
            answers: ['The Krotons', 'Krotons'],
          },
          {
            number: 5,
            question: "/sounds/incidental/incidental_5.mp3",
            answers: ['The Krotons', 'Krotons'],
          },
          {
            number: 6,
            question: "/sounds/incidental/incidental_6.mp3",
            answers: ['The Krotons', 'Krotons'],
          },
          {
            number: 7,
            question: "/sounds/incidental/incidental_7.mp3",
            answers: ['The Krotons', 'Krotons'],
          },
          {
            number: 8,
            question: "/sounds/incidental/incidental_8.mp3",
            answers: ['The Krotons', 'Krotons'],
          },
          {
            number: 9,
            question: "/sounds/incidental/incidental_9.mp3",
            answers: ['The Krotons', 'Krotons'],
          },
          {
            number: 10,
            question: "/sounds/incidental/incidental_10.mp3",
            answers: ['The Krotons', 'Krotons'],
          }
        ];
  
        const [showRound, setShowRound] = useState(false);
  
        const startQuizButton = () => {
          setShowRound(true)
        }


    return ( <div>
        <div className="round-copy"> 
        <header><h1>The Intros Round - Incidental Music</h1></header>
        <p>Click on the play button to hear 10 seconds of composed incidental music from Doctor Who.</p> 
        <p>For one point, simply tell us which story it is from.</p>
        <aside>The audio will keep playing for 10 seconds once you click 'Play Intro', even if you move onto the next question.</aside>
        <aside>There are 10 questions in this round.</aside>
          <br />
    
        {!showRound && (
            <button id="start-round" className="button" onClick={startQuizButton}>
              Start Round
            </button>
          )}
    
          {showRound && <IncidentalIntrosRound incidentalMusicQuestions={incidentalMusicQuestions} 
                               setIsIntros1Finished={setIsIntros1Finished}     />}
          <Footer />
          </div>
          </div>
        );
    }
 
export default IncidentalIntrosData;