import Header from './layout/Header';
import Footer from "./layout/Footer";
import RoundButtons from './layout/RoundButtons';
import { useAuth0 } from "@auth0/auth0-react";

const HomePage = ({totalScore, isFirstQuestionsRoundFinished,
        isColinRoundFinished, isGreekRoundFinished, isOddOneOutRoundFinished,
        isDogRoundFinished, isEpisodeNamesRoundFinished, isGeneral1RoundFinished,
        isGeneral2RoundFinished, isProductionCodesRoundFinished, isInhumanRoundFinished,
        isHowLongRoundFinished, isIntros1RoundFinished, isIntros2RoundFinished, 
        isPlayedThemselvesRoundFinished, isWheelInSpaceRoundFinished, resetQuiz, 
        isQuizFinished, saveQuiz, finishQuiz, quizData}) => {
            const { isAuthenticated } = useAuth0();
           

    return (  
        <section className='home-container'>
        <Header />
        <br/>
        <div className='home-page-wrapper'>
        {/* {!isAuthenticated && (
                    <div className='login-text'>
                        <h1>Log in to see the quiz.</h1>
                    </div>
                )}
                 {isAuthenticated && (
                    <> */}
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
        />
        
        {/* </>
        )} */}
        </div>
        <Footer />
        </section>
    );
}
 
export default HomePage;