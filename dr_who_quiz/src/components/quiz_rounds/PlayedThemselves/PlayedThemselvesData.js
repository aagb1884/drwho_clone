import { useState } from "react";
import PlayedThemselvesRound from "./PlayedThemselvesRound";
import Footer from "../../layout/Footer";

const PlayedThemselvesData = ({isPlayedThemselvesRoundFinished, setIsPlayedThemselvesRoundFinished}) => {

    const playedThemselvesQuestions = [
        {
          number: 1,
          question: "The honeyed tones of this repeated meme featured in 'The Stolen Earth'.",
          answer: 'Richard Dawkins',
        },
        {
          number: 2,
          question: "Which other 'Stolen Earth' guest previously appealed to Russell T. Davies to be in the show, saying: “I just want to wear a white coat and carry a clipboard and walk down a corridor saying 'I think it's alive, Doctor'”? ",
          answer: "Paul O'Grady",
        },
        {
          number: 3,
          question: "This journalist was political editor of the BBC when he appeared in 'Aliens Of London'.",
          answer: 'Andrew Marr',
        },
        {
          number: 4,
          question: "Not to be confused with the Ood Elder voice actor, who appeared as himself in 'The Power Of Three'?",
          answer: 'Brian Cox',
        },
        {
          number: 5,
          question: "This Blue Peter presenter was seen making a buttercream cake shaped like a Slitheen spaceship in 'Aliens Of London' and later interviewed Minions who hijacked the TARDIS in a BBC Radio 1 skit.",
          answer: 'Matt Baker',
        },
        {
          number: 6,
          question: "This Series 5 guest-star said he “always wanted to open the door of the TARDIS” and he did, introducing Doctor Who cast members past and present on the 1985 'Children In Need' broadcast.",
          answer: "Patrick Moore",
        },
        {
          number: 7,
          question: "Which TV medium declared that nobody needed him anymore in 'Army of Ghosts'? ",
          answer:  'Derek Acorah',
        },
        {
          number: 8,
          question: "Alongside Sian Williams, this much-missed BBC Breakfast presenter interviews Charles Dickens about his new Christmas special in 'The Wedding Of River Song'.",
          answer: 'Bill Turnbull',
        },
        {
          number: 9,
          question: "Prior to appearing on Strictly Come Dancing in 2010, which terrible human being described Mr Saxon as 'a very fine man' and 'handsome too'?",
          answer: 'Anne Widdecombe',
        },
        {
          number: 10,
          question: "Name the supporter and namesake of Mr Saxon who went on to win Strictly Come Dancing in 2011.",
          answer: 'Harry Judd',
        }
      ];

      const [showRound, setShowRound] = useState(false);

      const startQuizButton = () => {
        setShowRound(true)
      }

    return (  <div>
        <div className="round-copy"> 
    <header><h1>You've Played Yourself</h1></header>
    <p>Questions about people who have played themselves in Doctor Who.</p>
    <aside>Mostly taken from the person in question's Tardis Wiki entry, these are clues to the identities of guest stars who played themselves in Doctor Who - name them and you'll earn yourself a glorious point.</aside>
    <aside>There are 10 questions in this round.</aside>
      
      <br />

    {!showRound && (
        <button id="start-round" className="button" onClick={startQuizButton}>
          Start Round
        </button>
      )}

      {showRound && <PlayedThemselvesRound playedThemselvesQuestions={playedThemselvesQuestions} 
                         setIsPlayedThemselvesRoundFinished={setIsPlayedThemselvesRoundFinished}       />}
      </div>
      <Footer />
      </div>
    );
}
 
export default PlayedThemselvesData;