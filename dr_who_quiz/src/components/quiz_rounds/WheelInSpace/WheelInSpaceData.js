import WheelInSpaceRound from './WheelInSpaceRound';
import Footer from '../../layout/Footer';
import { useState } from "react";

const WheelInSpaceData = ({isWheelInSpaceRoundFinished, setIsWheelInSpaceRoundFinished}) => {

    const plotPoints = [
        "01000001 - The Cybermen decide they need the Earth's mineral wealth.",
        "01000010 - The Cybermen get some Bernalium, I guess.",
        "01000011 - The Cybermen take control of the Silver Carrier, a supply vessel, and set it drifting off course with a servo robot on board.",
        "01000100 - When the Doctor and Jamie board the vessel, the robot detects them and pilots the Silver Carrier towards the titular scientific, non-military space station.",
        "01000101 - The robot also sends some white pods containing Cybermats towards the titular scientific, non-military space station.",
        "01000110 - The Cybermats will destroy the titular scientific, non-military space station’s Bernalium, which powers their defensive laser.",
        "01000111 - The Cybermen send a star nova so that the crew of the titular scientific, non-military space station will need to fire their defensive laser.",
        "01001000 - The titular scientific, non-military space station will realise they are out of Bernalium.",
        "01001001 - The titular scientific, non-military space station will absolutely have to try boarding the Silver Carrier in case there is some Bernalium on board.",
        "01001010 - Cybermen hidden on board the Silver Carrier will then take over the minds of whoever is sent to investigate so that they can take the Cybermen to the titular scientific, non-military space station hidden in Bernalium crates.",
        "01001011 - The Cybermen then repair the laser so that the meteors from the exploding star don’t hit the titular scientific, non-military space station, as they need to use it as a homing beacon for the Cyberfleet.", 
        "01001100 - The Cybermen invade the Earth!"
    ];

    const wheelInSpaceQuestions = [
        {
            number: 1,
            question: "Type the code for the first stage of the plan.",
            answer: '01000001',
          },
        {
            number: 2,
            question: "Type the code for the second stage of the plan.",
            answer: '01000010',
          },
        {
            number: 3,
            question: "Type the code for the third stage of the plan.",
            answer: '01000011',
          },
        {
            number: 4,
            question: "Type the code for the fourth stage of the plan.",
            answer: '01000100',
          },
        {
            number: 5,
            question: "Type the code for the fifth stage of the plan.",
            answer: '01000101',
          },
        {
            number: 6,
            question: "Type the code for the sixth stage of the plan.",
            answer: '01000110',
          },
        {
            number: 7,
            question: "Type the code for the seventh stage of the plan.",
            answer: '01000111',
          },
        {
            number: 8,
            question: "Type the code for the eighth stage of the plan.",
            answer: '01001000',
          },
        {
            number: 9,
            question: "Type the code for the ninth stage of the plan.",
            answer: '01001001',
          },
        {
            number: 10,
            question: "Type the code for the tenth stage of the plan.",
            answer: '01001010',
          },
        {
            number: 11,
            question: "Type the code for the eleventh stage of the plan.",
            answer: '01001011',
          },
        {
            number: 12,
            question: "Type the code for the final stage of the plan.",
            answer: '01001100',
          },
    ];
    const [showRound, setShowRound] = useState(false);

    let shuffled = plotPoints
      .map(value => ({value, sort: Math.random()}))
      .sort((a, b) => a.sort - b.sort)
      .map(({value}) => value)

  
    const startQuizButton = () => {
      setShowRound(true)
    }
    return ( <div>
        
        <header><h1>Do You Know Our Ways?</h1></header>
        <p>Here are the twelve key points of the Cybermen's plan from the story 'The Wheel in Space', presented in random order.</p> 
        <p>Simply tell us the right order using the handy eight-digit reference numbers provided.</p>
        <br />
    
        {!showRound && (
            <button id="start-round" className="button" onClick={startQuizButton}>
              Start Round
            </button>
          )}
    
          {showRound && <WheelInSpaceRound plotPoints={shuffled} 
                        wheelInSpaceQuestions={wheelInSpaceQuestions}
                        setIsWheelInSpaceRoundFinished={setIsWheelInSpaceRoundFinished}
                                    />}
          <Footer />
          </div>
        );
    }
 
export default WheelInSpaceData;