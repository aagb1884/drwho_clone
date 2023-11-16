import { useState } from "react";
import Footer from "../../layout/Footer";
import ProductionCodesRound from "./ProductionCodesRound";

const ProductionCodesData = ({isProductionCodesRoundFinished,
                          setIsProductionCodesRoundFinished}) => {

    const productionCodesQuestions = [
        {
          question: "What stories' production codes spell 'MARS'?",
          options: ['The Romans, An Unearthly Child, The Space Museum, The Chase', 
                    'The Romans, An Unearthly Child, The Chase, The Time Meddler', 
                    'The Web Planet, An Unearthly Child, The Chase, The Time Meddler',
                    'The Web Planet, An Unearthly Child, The Space Museum, The Chase'],
          answer:   'The Romans, An Unearthly Child, The Chase, The Time Meddler',
        },
        {
          question: "What stories' production codes spell 'MOON'?",
          options: ['The Web Planet, The Enemy of the World, The Crusade', 
                    'The Romans, The Crusade, The Crusade, The Web Planet', 
                    'The Web Planet, The Ice Warriors, The Space Museum', 
                    'The Romans, The Ice Warriors, The Web Planet'],
          answer:   "The Romans, The Ice Warriors, The Web Planet",
        },
        {
          question: "What stories' production codes spell 'YAZ'?",
          options: ['The Celestial Toymaker, An Unearthly Child, The Gunfighters', 
                    'The Gunfighters, The Pilot, The Savages', 
                    'The Celestial Toymaker, The Pilot, The Gunfighters', 
                    'The Gunfighters, An Unearthly Child, The Savages'],
          answer:   'The Celestial Toymaker, An Unearthly Child, The Gunfighters',
        },
        {
          question: "What story's production code is also a type of gun?",
          options: ['The War Machines', 'The Smugglers', 'The Tenth Planet', 'The Power of the Daleks'],
          answer: 'The War Machines',
        },
        {
          question: 'What story has the most sarcastic sounding production code?',
          options: [
            'The Curse of Peladon',
            'The Mutants',
            'The Time Monster',
            'Carnival of Monsters'
          ],
          answer: 'The Time Monster',
        },
        {
          question: "What story's production code implies it to be hardcore?",
          options: ['Invasion of the Dinosaurs', 
                    'Death to the Daleks', 
                    'The Monster of Peladon',
                    'Planet of the Spiders'],
          answer: 'Death to the Daleks',
        },
        {
          question: 'Which story has production code 5A?',
          options: [
            'Castrovalva',
            'Logopolis',
            'The Leisure Hive',
            'The Ribos Operation'
          ],
          answer: 'The Ribos Operation',
        },
        {
          question: 'Which story has production code 6A?',
          options: ['Logopolis', 'Black Orchid', 'The Twin Dilemma', 'Attack of the Cybermen'],
          answer: 'Black Orchid',
        },
        {
          question: 'What is the last story to have a production code?',
          options: [
            'The Wedding of River Song', 
            'The Husbands of River Song', 
            'Twice Upon a Time', 
            'The Power of the Doctor'
          ],
          answer: 'The Wedding of River Song',
        },
        {
          question: "What stories' production codes spell 'Eric Saward'?",
          options: ['The Keys of Marinus, The Chase, Planet of the Giants, Edge of Destruction, The Time Meddler, An Unearthly Child, The Massacre, An Unearthly Child, The Chase, Marco Polo', 
                    'The Keys of Marinus, The Space Museum, The Reign of Terror, Edge of Destruction, Robot, Image of the Fendahl, An Unearthly Child, The Chase, Marco Polo', 
                    'The Aztecs, The Chase, Planet of the Giants, Edge of Destruction, The Time Meddler, An Unearthly Child, The Massacre, An Unearthly Child, The Chase, Marco Polo', 
                    "You can't spell 'Eric Saward' with production codes"],
          answer: "You can't spell 'Eric Saward' with production codes",
        }
      ];

      const [showRound, setShowRound] = useState(false);

      const startQuizButton = () => {
        setShowRound(true)
      }
    
    return ( 
      <div>
      <header><h1>Seize the Codes of Production</h1></header>
      <p>Pick the correct answer from four options.</p>
      <aside>A production code is an alphanumberic designation used to uniquely identify episodes within a television series.</aside>
      <aside>There are 10 questions in this round.</aside>
        <br />
  
      {!showRound && (
          <button id="start-round" className="button" onClick={startQuizButton}>
            Start Round
          </button>
        )}
  
        {showRound && <ProductionCodesRound
                      productionCodesQuestions={productionCodesQuestions} 
                      setIsProductionCodesRoundFinished={setIsProductionCodesRoundFinished}
                      />}
        <Footer />
        </div>
      );
  }

 
export default ProductionCodesData;