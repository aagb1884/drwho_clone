import { useState } from "react";
import HowLongRound from "./HowLongRound";
import Footer from "../../layout/Footer";

const HowLongData = ({isHowLongRoundFinished, setIsHowLongRoundFinished}) => {

    const howLongQuestions = [
        {
            number: 1,
            question: "…does Mordred's maniacal laugh last for in 'Battlefield' (seconds) ?",
            answers: ['25', 'Twenty-five', 'Twenty five'],
          },
          {
            number: 2,
            question: "…how long does the Twelfth Doctor take to bring Clara the takeaway coffee she sends him for at the end of 'Deep Breath' (weeks) ?",
            answers: ['3', 'Three'],
          },
          {
            number: 3,
            question: "…is the panning shot on Brighton beach in 'The Leisure Hive' (seconds)?",
            answers: ['90', 'Ninety'],
          },
          {
            number: 4,
            question: "…did the United Nations Intelligence Taskforce last for? (years)",
            answers: ['21', 'Twenty-one', 'Twenty one'],
          },
          {
            number: 5,
            question: "…is the countdown to the detonation of the reality bomb (rels)?",
            answers: ['200', 'Two hundred', 'Two-hundred'],
          },
          {
            number: 6,
            question: "…is the fuse meant to be on Ace's Nitro-Nine (seconds)?",
            answers: ["10", "Ten"],
          },
          {
            number: 7,
            question: "…is the chase sequence in 'Planet of the Spiders' Part 2 (minutes)? ",
            answers:  ['12', 'Twelve'],
          },
          {
            number: 8,
            question: "…does the Davison era opening title sequence last (seconds)? ",
            answers: ['36', 'Thirty-six', 'Thirty six'],
          },
          {
            number: 9,
            question: "…did Terrence Dicks script edit the show for (years)?",
            answers: ['6', 'Six'],
          },
          {
            number: 10,
            question: "…between the guard saying he had a boyfriend and the guard getting killed in Resolution (seconds)? ",
            answers: ['10', 'Ten'],
          }
        ];
  
        const [showRound, setShowRound] = useState(false);
  
        const startQuizButton = () => {
          setShowRound(true)
        }
    return ( <div>
        
        <header><h1>How Long...</h1></header>
        <aside>How long, in terms of time, were the following (all answers rounded to nearest whole number, measurements specified in each question).</aside>
        <aside>There are 10 questions in this round.</aside>
          <br />
    
        {!showRound && (
            <button id="start-round" className="button" onClick={startQuizButton}>
              Start Round
            </button>
          )}
    
          {showRound && <HowLongRound howLongQuestions={howLongQuestions} 
                                    setIsHowLongRoundFinished={setIsHowLongRoundFinished}/>}
          <Footer />
          </div>
        );
    }
 
export default HowLongData;