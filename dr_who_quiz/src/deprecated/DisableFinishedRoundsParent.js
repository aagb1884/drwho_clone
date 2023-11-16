import RoundButtons from "../components/layout/RoundButtons";

const DisableFinishedRoundsParent = (isFirstQuestionsRoundFinished) => {
    

    return (
        <>
        <RoundButtons isFirstQuestionsRoundFinished={isFirstQuestionsRoundFinished} 
        />
        </>
      );
}
 
export default DisableFinishedRoundsParent;