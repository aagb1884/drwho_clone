import { useState } from "react";
import InhumanRound from "./InhumanRound";
import Footer from "../../layout/Footer";

const InhumanData = ({isInhumanRoundFinished, setIsInhumanRoundFinished}) => {

    const inhumanQuestions = [
        {
            number: 1,
            question: "/images/inhuman_round/inhuman_1.jpeg",
            answers: ['Four to Doomsday'],
          },
          {
            number: 2,
            question: "/images/inhuman_round/inhuman_2.jpg",
            answers: ['The Edge of Destruction', 'Edge of Destruction'],
          },
          {
            number: 3,
            question: "/images/inhuman_round/inhuman_3.jpeg",
            answers: ['The Green Death', 'Green Death'],
          },
          {
            number: 4,
            question: "/images/inhuman_round/inhuman_4.jpeg",
            answers: ['The Dalek Master Plan', 'Dalek Master Plan'],
          },
          {
            number: 5,
            question: "/images/inhuman_round/inhuman_5.png",
            answers: ['Warriors of the Deep'],
          },
          {
            number: 6,
            question: "/images/inhuman_round/inhuman_6.jpg",
            answers: ['Blink'],
          },
          {
            number: 7,
            question: "/images/inhuman_round/inhuman_7.jpeg",
            answers: ['Nightmare of Eden'],
          },
          {
            number: 8,
            question: "/images/inhuman_round/inhuman_8.png",
            answers: ['Logopolis'],
          },
          {
            number: 9,
            question: "/images/inhuman_round/inhuman_9.jpeg",
            answers: ['The Mind of Evil','Mind of Evil'],
          },
          {
            number: 10,
            question: "/images/inhuman_round/inhuman_10.jpeg",
            answers: ['Resurrection of the Daleks'],
          },
          {
            number: 11,
            question: "/images/inhuman_round/inhuman_11.png",
            answers: ['Arc of Infinity'],
          },
          {
            number: 12,
            question: "/images/inhuman_round/inhuman_12.png",
            answers: ['Day of the Doctor', 'The Day of the Doctor'],
          },
          {
            number: 13,
            question: "/images/inhuman_round/inhuman_13.jpeg",
            answers: ['The War Games', 'War Games'],
          },
          {
            number: 14,
            question: "/images/inhuman_round/inhuman_14.jpeg",
            answers: ['Ascension of the Cybermen'],
          },
          {
            number: 15,
            question: "/images/inhuman_round/inhuman_15.jpeg",
            answers: ['Timelash'],
          }
    ]

    const [showRound, setShowRound] = useState(false);

    const startQuizButton = () => {
      setShowRound(true)
    }


    return( <div>
        <div className="round-copy"> 
        <header><h1>They're Inhuman!</h1></header>
        <p>Simply tell us which story the inanimate object in the picture is from.</p>
        <aside>Yes, spaceships count as inanimate objects.</aside>
        <aside>There are 15 questions in this round.</aside>
          
          <br />
    
        {!showRound && (
            <button id="start-round" className="button" onClick={startQuizButton}>
              Start Round
            </button>
          )}
    
          {showRound && <InhumanRound
          inhumanQuestions={inhumanQuestions}
          setIsInhumanRoundFinished={setIsInhumanRoundFinished} />}
          </div>
          <Footer/>
          </div>
        );
}
 
export default InhumanData;