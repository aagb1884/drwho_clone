import GreekData from "./components/quiz_rounds/Greek/GreekData";
import MultipleChoiceData from "./components/quiz_rounds/odd_one_out/MultipleChoiceData";
import HomePage from "./components/HomePage";
import ErrorPage from "./components/ErrorPage";
import DogData from "./components/quiz_rounds/Dogs/DogData";
import GeneralKnowledge2Data from "./components/quiz_rounds/GeneralKnowledge2/GeneralKnowledge2Data";
import { BrowserRouter as BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { useScore } from "./components/quiz_elements/ScoreContext";
import EpisodeNameData from "./components/quiz_rounds/EpisodeNames/EpisodeNameData";
import ColinCliffhangerData from "./components/quiz_rounds/ColinCliffhangers/ColinCliffhangerData";
import GeneralKnowledgeOneData from "./components/quiz_rounds/GeneralKnowledge1/GeneralKnowledge1Data";
import AboutPage from "./components/About";
import ProductionCodesData from "./components/quiz_rounds/ProductionCodes/ProductionCodesData";
import FirstQuestionData from "./components/quiz_rounds/FirstQuestion/FirstQuestionData";
import InhumanData from "./components/quiz_rounds/inhuman/InhumanData";
import HowItWorks from "./components/HowItWork";
import HowLongData from "./components/quiz_rounds/HowLong/HowLongData";
import IncidentalIntrosData from "./components/quiz_rounds/IncidentalIntros/IncidentalIntrosData";
import PopIntrosData from "./components/quiz_rounds/PopIntros/PopIntrosData";
import PlayedThemselvesData from "./components/quiz_rounds/PlayedThemselves/PlayedThemselvesData";
import WheelInSpaceData from "./components/quiz_rounds/WheelInSpace/WheelInSpaceData";
import LandingPage from './deprecated/Landing';
import HighScores from "./components/HighScores/HighScores";
import { v4 as uuid } from 'uuid';
import { postQuiz } from "./components/HighScores/UserQuizDataService";
import UserPage from "./deprecated/UserPage";


const MainContainer = () => {
    const { totalScore, resetScoreToZero } = useScore();
    const [username, setUsername] = useState("")
    const [isFirstQuestionsRoundFinished, setIsFirstQuestionsRoundFinished] = useState(false);
    const [isColinRoundFinished, setIsColinRoundFinished] = useState(false);
    const [isGreekRoundFinished, setIsGreekRoundFinished] = useState(false);
    const [isOddOneOutRoundFinished, setIsOddOneOutRoundFinished] = useState(false);
    const [isDogRoundFinished, setIsDogRoundFinished] = useState(false);
    const [isEpisodeNamesRoundFinished, setIsEpisodeNamesRoundFinished] = useState(false);
    const [isGeneral1RoundFinished, setIsGeneral1RoundFinished] = useState(false);
    const [isGeneral2RoundFinished, setIsGeneral2RoundFinished] = useState(false);
    const [isProductionCodesRoundFinished, setIsProductionCodesRoundFinished] = useState(false);
    const [isInhumanRoundFinished, setIsInhumanRoundFinished] = useState(false);
    const [isHowLongRoundFinished, setIsHowLongRoundFinished] = useState(false);
    const [isIntros1RoundFinished, setIsIntros1Finished] = useState(false);
    const [isIntros2RoundFinished, setIsIntros2Finished] = useState(false);
    const [isPlayedThemselvesRoundFinished, setIsPlayedThemselvesRoundFinished] = useState(false);
    const [isWheelInSpaceRoundFinished, setIsWheelInSpaceRoundFinished] = useState(false);
    const [isQuizFinished, setIsQuizFinished] = useState(false);


    const resetQuiz = () => {
        setIsFirstQuestionsRoundFinished(false);
        setIsColinRoundFinished(false);
        setIsGreekRoundFinished(false);
        setIsOddOneOutRoundFinished(false);
        setIsDogRoundFinished(false);
        setIsEpisodeNamesRoundFinished(false);
        setIsGeneral1RoundFinished(false);
        setIsGeneral2RoundFinished(false);
        setIsProductionCodesRoundFinished(false);
        setIsInhumanRoundFinished(false);
        setIsHowLongRoundFinished(false);
        setIsIntros1Finished(false);
        setIsIntros2Finished(false);
        setIsPlayedThemselvesRoundFinished(false);
        setIsWheelInSpaceRoundFinished(false);
        resetScoreToZero();
      };

      useEffect(() => {
        const allRoundsFinished =
          isFirstQuestionsRoundFinished &&
          isColinRoundFinished &&
          isGreekRoundFinished &&
          isOddOneOutRoundFinished &&
          isDogRoundFinished &&
          isEpisodeNamesRoundFinished &&
          isGeneral1RoundFinished && isGeneral2RoundFinished &&
          isProductionCodesRoundFinished &&
          isInhumanRoundFinished &&
          isHowLongRoundFinished &&
          isIntros1RoundFinished && isIntros2RoundFinished &&
          isPlayedThemselvesRoundFinished &&
          isWheelInSpaceRoundFinished;
    
        setIsQuizFinished(allRoundsFinished);
      }, [
        isFirstQuestionsRoundFinished,
        isColinRoundFinished,
        isGreekRoundFinished,
        isOddOneOutRoundFinished,
        isDogRoundFinished,
        isEpisodeNamesRoundFinished,
        isGeneral1RoundFinished, isGeneral2RoundFinished,
        isProductionCodesRoundFinished,
        isInhumanRoundFinished, 
        isHowLongRoundFinished,
        isIntros1RoundFinished, isIntros2RoundFinished,
        isPlayedThemselvesRoundFinished,
        isWheelInSpaceRoundFinished,
      ]);

      function getDate() {
        const today = new Date();
        const month = today.getMonth() + 1;
        const year = today.getFullYear();
        const date = today.getDate();
        const hour = today.getHours() 
        const minute = today.getMinutes()
        return `${month}.${date}.${year}-${hour}:${minute}`;
      }

      // this is just here so I can test the submit score button without having to go through the entire quiz
      const finishQuiz = () => {
        setIsQuizFinished(true)
}
const quizData = {
  quizUser: username,
  quizDateFinished: getDate(),
  roundsCompleted: [{isFirstQuestionsRoundFinished: isFirstQuestionsRoundFinished}, 
    {isColinRoundFinished: isColinRoundFinished}, {isGreekRoundFinished: isGreekRoundFinished}, 
    {isOddOneOutRoundFinished: isOddOneOutRoundFinished}, {isDogRoundFinished: isDogRoundFinished},
    {isEpisodeNamesRoundFinished: isEpisodeNamesRoundFinished}, {isGeneral1RoundFinished: isGeneral1RoundFinished},
    {isGeneral2RoundFinished: isGeneral2RoundFinished}, {isProductionCodesRoundFinished: isProductionCodesRoundFinished},
    {isInhumanRoundFinished: isInhumanRoundFinished}, {isHowLongRoundFinished: isHowLongRoundFinished}, 
    {isIntros1RoundFinished: isIntros1RoundFinished}, {isIntros2RoundFinished: isIntros2RoundFinished}, 
    {isPlayedThemselvesRoundFinished: isPlayedThemselvesRoundFinished}, {isWheelInSpaceRoundFinished: isWheelInSpaceRoundFinished}],
  isQuizFinished: isQuizFinished,
  totalScore: totalScore,
};

      const saveQuiz = async () => {
        try {
          const response = await postQuiz(quizData);
      
          console.log('Quiz saved successfully:', response);
        } catch (error) {
          console.error('Error saving quiz:', error.message);
        }
      };

    
     
      
    //  for testing quiz data content
 const jsonString = JSON.stringify(quizData);
console.log('Serialized Quiz Data:', jsonString);

    return (
        <>
        
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<HomePage totalScore={totalScore}
                                      isFirstQuestionsRoundFinished={isFirstQuestionsRoundFinished}
                                      isColinRoundFinished={isColinRoundFinished}
                                      isGreekRoundFinished={isGreekRoundFinished}
                                      isOddOneOutRoundFinished={isOddOneOutRoundFinished}
                                      isDogRoundFinished={isDogRoundFinished} 
                                      isEpisodeNamesRoundFinished={isEpisodeNamesRoundFinished}
                                      isGeneral1RoundFinished={isGeneral1RoundFinished}
                                      isGeneral2RoundFinished={isGeneral2RoundFinished}
                                      isProductionCodesRoundFinished={isProductionCodesRoundFinished}
                                      isInhumanRoundFinished={isInhumanRoundFinished}
                                      isHowLongRoundFinished={isHowLongRoundFinished}
                                      isIntros1RoundFinished={isIntros1RoundFinished}
                                      isIntros2RoundFinished={isIntros2RoundFinished}
                                      isPlayedThemselvesRoundFinished={isPlayedThemselvesRoundFinished}
                                      isWheelInSpaceRoundFinished={isWheelInSpaceRoundFinished}
                                      resetQuiz={resetQuiz}
                                      isQuizFinished={isQuizFinished}
                                      saveQuiz={saveQuiz} 
                                      finishQuiz={finishQuiz}
                                      quizData={quizData}
                                      username={username}
                                      setUsername={setUsername}
                                      />} />
              <Route path="/first-questions" element={<FirstQuestionData 
                                      isFirstQuestionsRoundFinished={isFirstQuestionsRoundFinished}
                                      setIsFirstQuestionsRoundFinished={setIsFirstQuestionsRoundFinished} />} />
              <Route path="/greek" element={<GreekData 
                                      isGreekRoundFinished={isGreekRoundFinished}
                                      setIsGreekRoundFinished={setIsGreekRoundFinished}
              />} />
              <Route path="/odd-one" element={<MultipleChoiceData 
                                      isOddOneOutRoundFinished={isOddOneOutRoundFinished}
                                      setIsOddOneOutRoundFinished={setIsOddOneOutRoundFinished} />} />
              <Route path="/dogs" element={<DogData 
                                      isDogRoundFinished={isDogRoundFinished} 
                                      setIsDogRoundFinished={setIsDogRoundFinished}
              />} />
              <Route path="/episode-names" element={<EpisodeNameData 
                                      isEpisodeNamesRoundFinished={isEpisodeNamesRoundFinished}
                                      setIsEpisodeNamesRoundFinished={setIsEpisodeNamesRoundFinished}
              />} />
              <Route path="/colin-cliffhanger" element={<ColinCliffhangerData 
                                      isColinRoundFinished={isColinRoundFinished}
                                      setIsColinRoundFinished={setIsColinRoundFinished}
              />} />
              <Route path="/general1" element={<GeneralKnowledgeOneData 
                                      isGeneral1RoundFinished={isGeneral1RoundFinished}
                                      setIsGeneral1RoundFinished={setIsGeneral1RoundFinished}
              />} />
              <Route path="/general2" element={<GeneralKnowledge2Data 
                                      isGeneral2RoundFinished={isGeneral2RoundFinished}
                                      setIsGeneral2RoundFinished={setIsGeneral2RoundFinished}
              />} />
              <Route path="/production-codes" element={<ProductionCodesData 
                                      isProductionCodesRoundFinished={isProductionCodesRoundFinished}
                                      setIsProductionCodesRoundFinished={setIsProductionCodesRoundFinished}
              />} />
              <Route path="/inhuman" element={<InhumanData 
                                      isInhumanRoundFinished={isInhumanRoundFinished}
                                      setIsInhumanRoundFinished={setIsInhumanRoundFinished}
              />} />
              <Route path="/how-long" element={<HowLongData 
                                      isHowLongRoundFinished={isHowLongRoundFinished}
                                      setIsHowLongRoundFinished={setIsHowLongRoundFinished}
              />} />
              <Route path="/intros-incidental" element={<IncidentalIntrosData 
                                      isIntros1RoundFinished={isIntros1RoundFinished}
                                      setIsIntros1Finished={setIsIntros1Finished}
              />} />
              <Route path="/intros-pop" element={<PopIntrosData 
                                      isIntros2RoundFinished={isIntros2RoundFinished}
                                      setIsIntros2Finished={setIsIntros2Finished}
              />} />
              <Route path="/played-themselves" element={<PlayedThemselvesData 
                                      isPlayedThemselvesRoundFinished={isPlayedThemselvesRoundFinished}
                                      setIsPlayedThemselvesRoundFinished={setIsPlayedThemselvesRoundFinished}
              />} />
              <Route path="/wheel-in-space" element={<WheelInSpaceData 
                                      isWheelInSpaceRoundFinished={isWheelInSpaceRoundFinished}
                                      setIsWheelInSpaceRoundFinished={setIsWheelInSpaceRoundFinished}
              />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/how" element={<HowItWorks />} />
              <Route path="/high-scores" element={<HighScores />} />
              <Route path="*" element={<ErrorPage/>} />
            </Routes>
      </BrowserRouter>
      </>
     );
}
 
export default MainContainer;