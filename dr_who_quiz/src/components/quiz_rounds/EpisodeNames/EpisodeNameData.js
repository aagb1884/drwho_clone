import { useState } from "react";
import EpisodeNameRound from "./EpisodeNameRound";
import Footer from "../../layout/Footer";
const EpisodeNameData = ({isEpisodeNamesRoundFinished, setIsEpisodeNamesRoundFinished}) => {

    const episodeNameQuestions = [
        {
          number: 1,
          question: "The Rescue",
          answers: ['The Daleks'],
        },
        {
          number: 2,
          question: "The Forest of Fear",
          answers: ['An Unearthly Child', 'Unearthly Child'],
        },
        {
          number: 3,
          question: "Don't Shoot the Pianist",
          answers: ['The Gunfighters', 'Gunfighters'],
        },
        {
          number: 4,
          question: 'The Death of Doctor Who',
          answers: ['The Space Museum', 'Space Museum'],
        },
        {
          number: 5,
          question: "Strangers in Space",
          answers: ['The Sensorites', 'Sensorites'],
        },
        {
          number: 6,
          question: "The Nightmare Begins",
          answers: ['The Dalek Master Plan', 'Dalek Master Plan'],
        },
        {
          number: 7,
          question: 'The Day of Darkness',
          answers:  ['The Aztecs', 'Aztecs'],
        },
        {
          number: 8,
          question: 'Conspiracy',
          answers: ['The Romans', 'Romans'],
        },
        {
          number: 9,
          question: 'Crater of Needles',
          answers: ['The Web Planet', 'Web Planet'],
        },
        {
          number: 10,
          question: "Flight Through Eternity",
          answers: ['The Chase', 'Chase'],
        },
        {
          number: 11,
          question: "Small Prophet, Quick Return",
          answers: ['The Myth Makers', 'Myth Makers', 'The Myth-Makers', 'Myth-Makers'],
        },
        {
          number: 12,
          question: "The Brink of Disaster",
          answers: ['Edge of Destruction', 'The Edge of Destruction'],
        },
        {
          number: 13,
          question: "Sentence of Death",
          answers: ['The Keys of Marinus', 'Keys of Marinus'],
        },
        {
          number: 14,
          question: "The Exploding Planet",
          answers: ['Galaxy 4', 'Galaxy Four'],
        },
        {
          number: 15,
          question: "The Roof of the World",
          answers: ['Marco Polo'],
        }
      ];

      const [showRound, setShowRound] = useState(false);

      const startQuizButton = () => {
        setShowRound(true)
      }


    return( <div>
      <div className="round-copy"> 
    <header><h1>A Quiz of Necessity</h1></header>
    <p>Going by DVD/official titles, can you name the serial in which each of these individual First Doctor episode titles belongs?</p>
    <aside>There are 15 questions in this round.</aside>
    
      <br />

    {!showRound && (
        <button id="start-round" className="button" onClick={startQuizButton}>
          Start Round
        </button>
      )}

      {showRound && <EpisodeNameRound episodeNameQuestions={episodeNameQuestions} 
                      setIsEpisodeNamesRoundFinished={setIsEpisodeNamesRoundFinished}          />}
       </div> 
      <Footer />
      </div>
    );
}
 
export default EpisodeNameData;