import { NavLink } from "react-router-dom";
import UserInfoBox from "./UserInfoBox";
import QuizButtons from "./QuizButtons";

const RoundButtons = (
        { isFirstQuestionsRoundFinished, isColinRoundFinished, isGreekRoundFinished, isOddOneOutRoundFinished,
        isDogRoundFinished, isEpisodeNamesRoundFinished, isGeneral1RoundFinished,
        isGeneral2RoundFinished, isProductionCodesRoundFinished, isInhumanRoundFinished,
        isHowLongRoundFinished, isIntros1RoundFinished, isIntros2RoundFinished, 
        isPlayedThemselvesRoundFinished, isWheelInSpaceRoundFinished, resetQuiz, totalScore, isQuizFinished, 
        saveQuiz, finishQuiz, quizData, username, setUsername}) => {
                
     

    return ( 
        <div className="round-buttons-wrapper">

        <h2>Choose Your Next Round</h2>     

            <section className="round-buttons-component">
      
            <div className="first-question">
            <NavLink to="/first-questions" className={isFirstQuestionsRoundFinished ? 'disabled' : 'round-buttons'}
            >
                <img    src="/images/button_images/first_question.jpeg" 
                        alt="first-question-button" 
                        border="0"
                        className="button-image"/>
                <div className="button-text">The First Question</div>
            </NavLink>
            </div>


            <div className="all-greek">
        
            <NavLink to="/greek" className={isGreekRoundFinished ? 'disabled' : 'round-buttons'}>
            <div className="button-text">It's All Greek to Me</div>
            <img    src="/images/button_images/all_greek.png" 
                    alt="greek-button" 
                    border="0"
                    className="button-image" />
            </NavLink>
          
            </div>

            <div className="colin-cliffhanger">
            <NavLink to="/colin-cliffhanger" className={isColinRoundFinished ? 'disabled' : 'round-buttons'} >
            <div className="button-text">The Many Cliffhanger Faces of Colin Baker</div>
            <img    src="/images/button_images/colin_cliffhanger.jpeg"
                    alt="colin-cliffhanger-button" 
                    border="0"
                    className="button-image" />
            </NavLink>
            </div>

            <div  className="intros-pop">
            <NavLink to="/intros-pop" className={isIntros2RoundFinished ? 'disabled' : 'round-buttons'}>
            <div className="button-text">The Intros Round - Pop</div>
            <img    src="/images/button_images/tainted_love.gif" 
                    alt="intros-pop-button" 
                    className="button-image"/>
                    </NavLink>
                </div>

            <div className="general1">
            <NavLink to="/general1" className={isGeneral1RoundFinished ? 'disabled' : 'round-buttons'}>
            <div className="button-text">General Knowledge - Part One</div> 
            <img    src="/images/button_images/general_knowledge copy.jpg" 
                    alt="general-knowledge1-button" 
                    border="0" 
                    className="button-image"/>
            </NavLink>
            </div>

        

            <div  className="odd-one-out">
            <NavLink to="/odd-one" className={isOddOneOutRoundFinished ? 'disabled' : 'round-buttons'}>
            <div className="button-text">Odd One Out</div>
            <img    src="/images/button_images/odd_one_out copy.jpg" 
                    alt="ood-one-out-button" 

                    border="0" 
                    className="button-image"/>
            </NavLink>
            </div>

            <div className="good-dogs">
            <NavLink to="/dogs" className={isDogRoundFinished ? 'disabled' : 'round-buttons'}>
            <div className="button-text">They're All Good Dogs</div>
            <img    src="/images/button_images/good_dog.jpeg" 
                    alt="dogs-button" 
                    border="0" 
                    className="button-image"/>
            </NavLink>
            </div>

            <div className="inhuman">
            <NavLink to="/inhuman" className={isInhumanRoundFinished ? 'disabled' : 'round-buttons'}>
            <div className="button-text">They're Inhuman</div>
            <img    src="/images/button_images/theyre_inhuman.png" 
                    alt="inhuman-button" 
                    border="0" 
                    className="button-image"/>
            </NavLink>
            </div>

            <div className="quiz-of-necessity">
            <NavLink to="/episode-names" className={isEpisodeNamesRoundFinished ? 'disabled' : 'round-buttons'}>

            {/* no text, text is in image */}
            <img    src="/images/button_images/quiz_of_necessity.jpeg" 
                    alt="quiz-of-necessity-button" 
                    border="0" 
                    className="button-image"/>
            </NavLink>
            </div>

            <div className="general2">
            <NavLink to="/general2" className={isGeneral2RoundFinished ? 'disabled' : 'round-buttons'}>
            <div className="button-text">General Knowledge - Part Two</div>
            <img    src="/images/button_images/general_knowledge copy.jpg" 
                    alt="wheel-button" 
                    className="button-image"/>
                    </NavLink>
                    </div>

            <div className="wheel">
            <NavLink to="/wheel-in-space" className={isWheelInSpaceRoundFinished ? 'disabled' : 'round-buttons'}>
            <div className="button-text">You Know. Our Ways.</div>
            <img    src="/images/button_images/wheel_in_space.jpg" 
                    alt="wheel-button" 
                    className="button-image"/>
                    </NavLink>
                    </div>
            
            <div className="production-codes">
            <NavLink to="/production-codes" className={isProductionCodesRoundFinished ? 'disabled' : 'round-buttons'}>
            <div className="button-text">Seize the Codes of Production</div>
            <img    src="/images/button_images/production_codes.png" 
                    alt="production-codes-button" 
                    border="0" 
                    className="button-image"/>
            </NavLink>
            </div>

            <div  className="intros-incidental">
            <NavLink to="/intros-incidental" className={isIntros1RoundFinished ? 'disabled' : 'round-buttons'}>
            <div className="button-text">The Intros Round - Incidental Music</div>
            <img    src="/images/button_images/incidental_music.jpeg" 
                    alt="intros-incidental-button" 
                    border="0" 
                    className="button-image"/>
            </NavLink>
            </div>

            <div className="played-themselves">
            <NavLink to="/played-themselves" className={isPlayedThemselvesRoundFinished ? 'disabled' : 'round-buttons'}>
            <div className="button-text">You've Played Yourself</div>
            <img    src="/images/button_images/played_yourself.png" 
                    alt="played-themselves-button" 
                    border="0" 
                    className="button-image"/>
            </NavLink>
            </div>

            <div className="how-long">
            <NavLink to="/how-long" className={isHowLongRoundFinished ? 'disabled' : 'round-buttons'}>
            <div className="button-text">How Long...</div>
            <img    src="/images/button_images/how_long.png" 
                    alt="how-long-button" 
                    border="0" 
                    className="button-image"/>
            </NavLink>

            </div>
            
            </section>
            
            <UserInfoBox totalScore={totalScore} username={username} />
                <QuizButtons resetQuiz={resetQuiz}
                saveQuiz={saveQuiz} isQuizFinished={isQuizFinished}
                finishQuiz={finishQuiz} username={username} setUsername={setUsername} />

           
            </div>
        
     );
}
 
export default RoundButtons;