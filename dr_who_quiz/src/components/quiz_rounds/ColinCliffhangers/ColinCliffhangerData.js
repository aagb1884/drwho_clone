import { useState } from "react";
import ColinCliffhangerRound from "./ColinCliffhangerRound";
import Footer from "../../layout/Footer";

const ColinCliffhangerData = ({isColinRoundFinished, setIsColinRoundFinished}) => {

    const colinCliffhangerQuestions = [
        {
          number: 1,
          question: "/images/colin_cliffhangers/colin_cliffhanger_1.jpeg",
          answers: ['Trial of a Time Lord', 'The Trial of a Time Lord', 'Trial of a Timelord', 'The Trial of a Timelord'],
        },
        {
          number: 2,
          question: "/images/colin_cliffhangers/colin_cliffhanger_2.jpeg",
          answers: ['Timelash', 'Time Lash'],
        },
        {
          number: 3,
          question: "/images/colin_cliffhangers/colin_cliffhanger_3.jpeg",
          answers: ['Revelation of the Daleks'],
        },
        {
          number: 4,
          question: "/images/colin_cliffhangers/colin_cliffhanger_4.jpeg",
          answers: ['Vengeance on Varos'],
        },
        {
          number: 5,
          question: "/images/colin_cliffhangers/colin_cliffhanger_5.jpeg",
          answers: ['Two Doctors', 'The Two Doctors'],
        },
        {
          number: 6,
          question: "/images/colin_cliffhangers/colin_cliffhanger_6.jpeg",
          answers: ['Revelation of the Daleks'],
        },
        {
          number: 7,
          question: "/images/colin_cliffhangers/colin_cliffhanger_7.jpeg",
          answers: ['Trial of a Time Lord', 'The Trial of a Time Lord', 'Trial of a Timelord', 'The Trial of a Timelord'],
        },
        {
          number: 8,
          question: "/images/colin_cliffhangers/colin_cliffhanger_8.jpeg",
          answers: ['Twin Dilemma', 'The Twin Dilemma'],
        },
        {
          number: 9,
          question: "/images/colin_cliffhangers/colin_cliffhanger_9.jpeg",
          answers: ['Trial of a Time Lord', 'The Trial of a Time Lord', 'Trial of a Timelord', 'The Trial of a Timelord'],
        },
        {
          number: 10,
          question: "/images/colin_cliffhangers/colin_cliffhanger_10.jpeg",
          answers: ['Caves of Androzani', 'The Caves of Androzani'],
        }
      ];


    const [showRound, setShowRound] = useState(false);

      const startQuizButton = () => {
        setShowRound(true)
      }


    return( <div>
        <div className="round-copy"> 
    <header><h1>The Many Cliffhanger Faces of Colin Baker</h1></header>
    <p>Simply tell us which story this Colin Baker Cliffhanger Face is from.</p>
    <aside>There are 10 questions in this round.</aside>
      <br />

    {!showRound && (
        <button id="start-round" className="button" onClick={startQuizButton}>
          Start Round
        </button>
      )}

      {showRound && <ColinCliffhangerRound 
      colinCliffhangerQuestions={colinCliffhangerQuestions}
      setIsColinRoundFinished={setIsColinRoundFinished} />}
      </div>
      <Footer/>
      </div>
    );
}
 
export default ColinCliffhangerData;