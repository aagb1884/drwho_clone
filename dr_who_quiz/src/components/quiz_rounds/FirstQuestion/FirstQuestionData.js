import { useState } from 'react';
import FirstQuestionRound from './FirstQuestionRound';
import Footer from '../../layout/Footer';

const FirstQuestionData = ({isFirstQuestionsRoundFinished, setIsFirstQuestionsRoundFinished}) => {
  

    const firstQuestionsQuestions = [
        {
          number: 1,
          question: "The Time of the Doctor",
          answers: ['Handles'],
        },
        {
          number: 2,
          question: "An Unearthly Child",
          answers: ['Ian', 'Ian Chesterton'],
        },
        {
          number: 3,
          question: "The Name of the Doctor",
          answers: ['Dr Simeon', 'Simeon', 'Walter Simeon', 'The Great Intelligence', 'Great Intelligence'],
        },
        {
          number: 4,
          question: "The Empty Child",
          answers: ['Rose', 'Rose Tyler'],
        },
        {
          number: 5,
          question: "The Wedding of River Song",
          answers: ['Dorium', 'Dorium Maldovar', 'Maldovar'],
        },
        {
          number: 6,
          question: "The Next Doctor",
          answers: ['Rosita', 'Rosita Farisi'],
        },
        {
          number: 7,
          question: "The Christmas Invasion",
          answers:  ['Jackie', 'Jackie Tyler'],
        },
        {
          number: 8,
          question: "The Snowmen",
          answers: ['Clara', 'Clara Oswald', 'Clara Oswin Oswald'],
        },
        {
          number: 9,
          question: "The War Machines",
          answers: ['WOTAN'],
        },
        {
          number: 10,
          question: "World Enough and Time",
          answers: ['Missy','The Master', 'Master'],
        }
      ];

      const [showRound, setShowRound] = useState(false);

      const startQuizButton = () => {
        setShowRound(true)
      }

 

    return ( 
        <div>
        
    <header><h1>The First Question</h1></header>
    <p>Name the character who says 'Doctor Who' in each of these stories where someone says 'Doctor Who'.</p>
    <aside>There are 10 questions in this round.</aside>
      <br />

    {!showRound && (
        <button id="start-round" className="button" onClick={startQuizButton}>
          Start Round
        </button>
      )}

      {showRound && <FirstQuestionRound firstQuestionsQuestions={firstQuestionsQuestions}
                                        setIsFirstQuestionsRoundFinished={setIsFirstQuestionsRoundFinished}
                                />}
      <Footer />
      </div>
     );
}
 
export default FirstQuestionData;