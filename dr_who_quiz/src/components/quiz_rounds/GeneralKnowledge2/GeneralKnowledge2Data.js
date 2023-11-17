import { useState } from "react";
import GeneralKnowledge2Round from "./GeneralKnowledge2Round";
import Footer from "../../layout/Footer";

const GeneralKnowledge2Data = ({isGeneral2RoundFinished, setIsGeneral2RoundFinished}) => {

    const generalKnowledgeQuestions2 = [
        {
          number: 1,
          question: "What is the name of the army General from 'The Stolen Earth'?",
          answers: ['General Sanchez', 'Sanchez'],
        },
        {
          number: 2,
          question: "How many words per minute can Donna type?",
          answers: ['100', 'a hundred', 'hundred'],
        },
        {
          number: 3,
          question: "What brand of ice lolly had tie-in adverts featuring the Second Doctor and the Daleks?",
          answers: ['Sky Ray', 'Skyray'],
        },
        {
          number: 4,
          question: "Which jazz tune is performed by the Seventh Doctor and then Earl Sigma on harmonica throughout 'The Happiness Patrol'?",
          answers: ['As Time Goes By'],
        },
        {
          number: 5,
          question: "What character from 'New Earth' do the Doctor and Rose eat in 'The End of the World'?",
          answers: ['Chip', 'Chips'],
        },
        {
          number: 6,
          question: "Where do Benton and Yates take the Brigadier's helicopter to?",
          answers: ["Devil's End", 'Devils End'],
        },
        {
          number: 7,
          question: "What is the desert planet in 'The Chase' called?",
          answers:  ['Aridius'],
        },
        {
          number: 8,
          question: "In 'World War 3' what is the password to UNIT's website?",
          answers: ['Buffalo'],
        },
        {
          number: 9,
          question: "In 'Tooth and Claw' the Doctor describes 1979 as a 'hell of a year', noting 'China invades Vietnam. The Muppet Movie. Margaret Thatcher…' and what other historical event? ",
          answers: ['Skylab', 'Skylab falls to Earth'],
        },
        {
          number: 10,
          question: "Is cress ever mentioned onscreen in Doctor Who?",
          answers: ['No', 'Nope', 'It is not'],
        }
      ];

      const [showRound, setShowRound] = useState(false);

      const startQuizButton = () => {
        setShowRound(true)
      }

    return( <div>
        <div className="round-copy"> 
    <header><h1>General Knowledge - Part Two</h1></header>
    <p>Further questions about Doctor Who in general.</p>
    <aside>There are 10 questions in this round.</aside>
      <br />
       
    {!showRound && (
        <button id="start-round" className="button" onClick={startQuizButton}>
          Start Round
        </button>
      )}

      {showRound && <GeneralKnowledge2Round generalKnowledgeQuestions2={generalKnowledgeQuestions2} 
                             setIsGeneral2RoundFinished={setIsGeneral2RoundFinished}   />}
       </div>
       <Footer />
      </div>
    );
}
export default GeneralKnowledge2Data;