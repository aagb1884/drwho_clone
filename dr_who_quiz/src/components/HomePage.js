import Header from './layout/Header';
import Footer from "./layout/Footer";
import RoundButtons from './layout/RoundButtons';

const HomePage = ({totalScore, isFirstQuestionsRoundFinished,
        isColinRoundFinished, isGreekRoundFinished, isOddOneOutRoundFinished,
        isDogRoundFinished, isEpisodeNamesRoundFinished, isGeneral1RoundFinished,
        isGeneral2RoundFinished, isProductionCodesRoundFinished, isInhumanRoundFinished,
        isHowLongRoundFinished, isIntros1RoundFinished, isIntros2RoundFinished, 
        isPlayedThemselvesRoundFinished, isWheelInSpaceRoundFinished, resetQuiz, 
        isQuizFinished, saveQuiz, finishQuiz, quizData, username, setUsername}) => {
         
           

    return (  
        <section className='home-container'>
        <Header />
        <br/>
        <div className='home-page-wrapper'>
       
        <RoundButtons  
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
        totalScore={totalScore}
        resetQuiz={resetQuiz}
        isQuizFinished={isQuizFinished}
        saveQuiz={saveQuiz}
        finishQuiz={finishQuiz}
        quizData={quizData}
        username={username}
        setUsername={setUsername}
        />
        
      
        </div>
        <Footer />
        </section>
    );
}
 
export default HomePage;