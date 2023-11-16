import { useState } from "react";
import MultipleChoiceRound from "./MultipleChoiceRound";
import Footer from "../../layout/Footer";

const MultipleChoiceData = ({isOddOneOutRoundFinished,
                            setIsOddOneOutRoundFinished}) => {

    const MultipleChoiceQuestions = [
        {
          question: 'Which of these authors have not written Doctor Who books?',
          options: ['Alastair Reynolds', 'Douglas Adams', 'Stephen Baxter', 'Malorie Blackman'],
          answer: 'Douglas Adams',
        },
        {
          question: 'Which of these comic writers has not written a Doctor Who strip?',
          options: ['Grant Morrison', 'Alan Moore', 'Gail Simone', 'Dan Abnett'],
          answer: 'Gail Simone',
        },
        {
          question: 'Which of these music acts has not had  song appear in Doctor Who?',
          options: ['Little Mix', 'Joy Division', 'Girls Aloud', 'The Streets'],
          answer: 'Girls Aloud',
        },
        {
          question: 'Doctor Who?',
          options: ['Christopher Eccleston', 'David Tennant', 'Matt Smith', 'Peter Capaldi'],
          answer: 'Christopher Eccleston',
        },
        {
          question: 'Which of these is not a real line of dialogue from Earthshock?',
          options: [
            'Activate…the device.',
            'I know that object.',
            'Fire Your Weaponry',
            'Explode The Bomb'
          ],
          answer: 'Fire Your Weaponry',
        },
        {
          question: "Which of these is not an actual plan of the Doctor's?",
          options: ['Overload a nuclear reactor and escape in the confusion', 
                    'Use some Victorians as a decoy and beat the crap out of a war criminal', 
                    'Bung a rock at it',
                    'Terraform Skaro into a verdant pastoral idyll'],
          answer: 'Terraform Skaro into a verdant pastoral idyll',
        },
        {
          question: 'Which of these is not the working title of an unmade Doctor Who story?',
          options: [
            'Yellow Fever and How To Cure It',
            'Terradorm of the Deep',
            'The Suicide Exhibition',
            'Children of the Erinella'
          ],
          answer: 'Children of the Erinella',
        },
        {
          question: 'Which actor has not been in a Big Finish audio play?',
          options: ['Hayley Atwell', 'Duncan from Blue', 'Michelle Gomez', 'Gemma Chan'],
          answer: 'Gemma Chan',
        },
        {
          question: 'Which of these Target novelisations was not written by Terrance Dicks?',
          options: [
            'The Ribos Operation', 
            'The Smugglers', 
            'The Mysterious Planet', 
            'Kinda'
          ],
          answer: 'The Ribos Operation',
        },
        {
          question: 'Which of these is not a name created by Chris Chibnall?',
          options: ['Qurunx', 'Feekat', 'Awsok', 'Ekzor'],
          answer: 'Ekzor',
        }
      ];

      const [showRound, setShowRound] = useState(false);

      const startQuizButton = () => {
        setShowRound(true)
      }
    
    return ( 
      <div>
      <header><h1>Odd One Out</h1></header>
      <p>Pick the correct answer from four options.</p>
      <aside>There are 10 questions in this round.</aside>
        <br />
  
      {!showRound && (
          <button id="start-round" className="button" onClick={startQuizButton}>
            Start Round
          </button>
        )}
  
        {showRound && <MultipleChoiceRound 
                      MultipleChoiceQuestions={MultipleChoiceQuestions} 
                      setIsOddOneOutRoundFinished={setIsOddOneOutRoundFinished}/>}
        <Footer />
        </div>
      );
  }

export default MultipleChoiceData;