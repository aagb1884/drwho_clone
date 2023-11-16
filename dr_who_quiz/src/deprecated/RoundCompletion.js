import RoundButtons from "../components/layout/RoundButtons";

const RoundCompletion = () => {
    const [roundsCompletionStatus, setRoundsCompletionStatus] = useState({
        firstQuestions: false,
        greek: false,
        oddOneOut: false,
        // Add more rounds here
      });

      const handleRoundCompletion = (roundName) => {
        setRoundsCompletionStatus((prevStatus) => ({
          ...prevStatus,
          [roundName]: true,
        }));
      };
      
      
    return (
        <> 
            <RoundButtons   roundsCompletionStatus={roundsCompletionStatus}
                            handleRoundCompletion={handleRoundCompletion}
                            />
        </>
         );
}
 
export default RoundCompletion;