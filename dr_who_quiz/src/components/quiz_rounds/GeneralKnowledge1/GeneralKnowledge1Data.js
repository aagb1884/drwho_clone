import { useState } from "react";
import GeneralKnowledgeOneRound from "./GeneralKnowledge1Round";
import Footer from "../../layout/Footer";

const GeneralKnowledgeOneData = ({isGeneral1RoundFinished, setIsGeneral1RoundFinished}) => {

    const generalKnowledgeQuestions1 = [
        {
          number: 1,
          question: "What is the name of the army General from 'Invasion of the Dinosaurs'?",
          answers: ['General Finch', 'Finch'],
        },
        {
          number: 2,
          question: "How many episodes does Turlough appear in where he isn't wearing his school uniform?",
          answers: ['3', 'Three'],
        },
        {
          number: 3,
          question: "True or false: Richard Hearne lost the role of the Fourth Doctor because he wanted to play it as his other character Mr Pastry?",
          answers: ['True'],
        },
        {
          number: 4,
          question: 'True or false: Spike Milligan lost the role of the Fourth Doctor because he wanted input into the scripts?',
          answers: ['False'],
        },
        {
          number: 5,
          question: "Which companion started referring to the TARDIS as 'Time and Relative Dimensions in Space'?",
          answers: ['Vicki'],
        },
        {
          number: 6,
          question: "What are the colours of the Prydonian chapter of Time Lords?",
          answers: ['Scarlet Orange', 'Scarlet and Orange', 'Scarlet & Orange', 'Scarlet, Orange', 'Scarlet. Orange', 'Scarlet + Orange',
                    'Orange Scarlet', 'orange and scarlet', 'orange & scarlet', 'Orange, Scarlet', 'Orange. Scarlet', 'Orange + Scarlet'],
        },
        {
          number: 7,
          question: 'What is the moon?',
          answers:  ['Egg', 'An egg'],
        },
        {
          number: 8,
          question: 'What two characters in Doctor Who were voiced by David Brierley?',
          answers: ['K9 Drathro', 'K9 and Drathro', 'K9 & Drathro', 'K9 + Drathro', 'K9, Drathro', 'K9. Drathro',
                    'Drathro K9', 'Drathro and K9', 'Drathro & K9', 'Drathro + K9', 'Drathro, K9', 'Drathro. K9'],
        },
        {
          number: 9,
          question: "Which city is both Jodie Whittaker's middle name and the location of Ruby White's phony institute in The Sarah Jane Adventures?",
          answers: ['Auckland'],
        },
        {
          number: 10,
          question: "In 'The Doctor, The Widow, And The Wardrobe', which planet do the harvesters come from?",
          answers: ['Androzani Major'],
        }
      ];

      const [showRound, setShowRound] = useState(false);

      const startQuizButton = () => {
        setShowRound(true)
      }

    return( <div>
        
    <header><h1>General Knowledge - Part One</h1></header>
    <p>Questions about Doctor Who in general.</p>
    <aside>There are 10 questions in this round.</aside>
      <br />

    {!showRound && (
        <button id="start-round" className="button" onClick={startQuizButton}>
          Start Round
        </button>
      )}

      {showRound && <GeneralKnowledgeOneRound generalKnowledgeQuestions1={generalKnowledgeQuestions1} 
                                setIsGeneral1RoundFinished={setIsGeneral1RoundFinished}/>}
      <Footer/>
      </div>
    );
}
 
export default GeneralKnowledgeOneData;