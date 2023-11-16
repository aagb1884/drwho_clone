import DogRound from "./DogRound";
import Footer from "../../layout/Footer";
import { useState } from "react";

const DogData = ({isDogRoundFinished, setIsDogRoundFinished}) => {

    const DogQuestions = [
        {
          number: 1,
          question: "What two-word term is given to Karvanista and the Lupari's call to defend Earth from the Flux?",
          answers: ['Species Recall'],
        },
        {
          number: 2,
          question: "In 'Rise Of The Cybermen', what breed of dog is Rose?",
          answers: ['Yorkshire Terrier', 'Terrier'],
        },
        {
          number: 3,
          question: 'On the good ship Terminus, the Garm is in charge of the decontamination process for what alien disease?',
          answers: ["Lazar's disease", 'Lazars Disease', 'Lazars'],
        },
        {
          number: 4,
          question: "Where does Sarah Jane Smith meet a dog and start whistling 'Daddy Wouldn't Buy Me A Bow Wow'?",
          answers: ['Aberdeen'],
        },
        {
          number: 5,
          question: "In which village does Sarah Jane Smith first meet K9?",
          answers: ['Moreton Harwood'],
        },
        {
          number: 6,
          question: "Which planet has got dogs with no noses?",
          answers: ['Barcelona'],
        },
        {
          number: 7,
          question: 'Prisoner Zero imitates Leadworth resident Barney Collins and his dog - what breed is the dog?',
          answers: ['Rottweiler'],
        },
        {
          number: 8,
          question: 'Very good dog Gromit featured in the BBC One Christmas idents before which episode?',
          answers: ['Next Doctor', 'The Next Doctor'],
        },
        {
          number: 9,
          question: 'In which story did Colin Baker inadvertently rub dog shit on his face?',
          answers: ['Mark of the Rani', 'The Mark of the Rani'],
        },
        {
          number: 10,
          question: "In 'The Curse Of Fatal Death', the Doctor's fiancee Emma compares the dying Doctor to Father Christmas, The Wizard Of Oz, and which fictional dog?",
          answers: ['Scooby-Doo', 'Scooby'],
        }
      ];

      const [showRound, setShowRound] = useState(false);

      const startQuizButton = () => {
        setShowRound(true)
      }

    return ( 
      <div>
        
    <header><h1>They're All Good Dogs</h1></header>
    <p>A round based on dogs and/or dog-like characters.</p>
    <aside>There are 10 questions in this round.</aside>
      <br />

    {!showRound && (
        <button id="start-round" className="button" onClick={startQuizButton}>
          Start Round
        </button>
      )}

      {showRound && <DogRound DogQuestions={DogQuestions} 
                     setIsDogRoundFinished={setIsDogRoundFinished} />}
      <Footer/>
      </div>
    );
}

 
export default DogData;