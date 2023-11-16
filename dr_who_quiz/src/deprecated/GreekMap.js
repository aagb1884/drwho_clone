import GreekQuestion from "./GreekQuestion";

const GreekMap = ({greekQuestions}) => {

    const GreekRoundData = greekQuestions.map((question, answer, number) => {
        return <GreekQuestion question={question} answer={answer} key={number} />
    })

return (  
       <>
       {GreekRoundData}
       </>
    );
}
 
export default GreekMap;