import { useState } from "react";
import GreekRound from "./GreekRound";
import Footer from "../../layout/Footer";

const GreekData = ({isGreekRoundFinished, setIsGreekRoundFinished}) => {

    const GreekQuestions = [
        {
          number: 1,
          question: "Which Federation diplomat was voiced by Ysanne Churchman?",
          answers: ['Alpha Centauri'],
        },
        {
          number: 2,
          question: "What is the name of the Ood that reaches out to the Doctor and Donna in 'Planet Of The Ood'?",
          answers: ['Sigma'],
        },
        {
          number: 3,
          question: "Which letter of the alphabet connects 'Kinda', 'The Parting Of The Ways' and a Season 24 story?",
          answers: ['Delta'],
        },
        {
          number: 4,
          question: "What is the name of the planet of evil in 'Planet Of Evil'?",
          answers: ['Zeta Minor'],
        },
        {
          number: 5,
          question: "What names, in alphabetical order, does the Doctor give the three humanised Daleks in 'Evil of the Daleks'?",
          answers: ['Alpha, Beta, Omega', 'Alpha Beta Omega'],
        },
        {
          number: 6,
          question: "In 'A Good Man Goes To War', what is the name of Lorna Bucket's pondless, river-y homeland?",
          answers: ['Gamma Forest', 'Gamma Forests', 'The Gamm Forest', 'The Gamma Forests'],
        },
        {
          number: 7,
          question: "Which character is played by Jonathan Bailey in 'Time Heist'?",
          answers: ['Psi'],
        },
        {
          number: 8,
          question: 'On which human colony is it illegal to be unhappy?',
          answers: ['Terra Alpha'],
        },
        {
          number: 9,
          question: "What letter connects 'The Five Doctors', 'Midnight', and 'Flatline'?",
          answers: ['Pi'],
        },
        {
          number: 10,
          question: "According to Drax in 'The Armageddon Factor', what was the Doctor's nickname at the Academy?",
          answers: ['Theta Sigma'],
        },
        {
          number: 11,
          question: "Which bewhiskered Gond scientist helped Jamie attack the Kroton's ship with sulphuric acid?",
          answers: ['Beta'],
        },
        {
          number: 12,
          question: 'Which two-time TV baddy was K9 to battle in the unproduced movie spin-off K9: Timequake?',
          answers: ['Omega'],
        },
        {
          number: 13,
          question: 'Where was the Dominator ship on course for before it landed on Dulkis?',
          answers: ['Epsilon', 'Epsilon 4', 'Epsilon Four'],
        },
        {
          number: 14,
          question: 'Which letter of the alphabet is a Judoon most likely to say?',
          answers: ['Rho'],
        },
        {
          number: 15,
          question: "What was the name of the evil corporation in 'Torchwood: Miracle Day'?",
          answers: ['PhiCorp'],
        }
      ];

      const [showRound, setShowRound] = useState(false);

      const startQuizButton = () => {
        setShowRound(true)
      }

    return ( 
      <div>
        
    <header><h1>It's All Greek to Me</h1></header>
    <p>A round based on letters of the Greek alphabet</p>
    <aside>We are looking for answers as English words, not Greek letters.</aside> 
    <aside>There are 10 questions in this round.</aside> 
      <br />

    {!showRound && (
        <button id="start-round" className="button" onClick={startQuizButton}>
          Start Round
        </button>
      )}

      {showRound && <GreekRound greekQuestions={GreekQuestions} 
                                setIsGreekRoundFinished={setIsGreekRoundFinished}/>}
      <Footer />
      </div>
    );
}
 
export default GreekData;