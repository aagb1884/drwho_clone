// import { v4 as uuid } from 'uuid';
// import RoundButtons from './layout/RoundButtons';

// const FinishQuiz = () => {

//     function getDate() {
//         const today = new Date();
//         const month = today.getMonth() + 1;
//         const year = today.getFullYear();
//         const date = today.getDate();
//         const hour = today.getHours() 
//         const minute = today.getMinutes()
//         return `${month}/${date}/${year}-${hour}:${minute}`;
//       }


// const saveQuiz = async (quizData) => {
//     try {
//       const response = await fetch('http://localhost:9000/api/scores/', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(quizData),
//       });
  
//       if (!response.ok) {
//         throw new Error('Failed to save quiz data');
//       }
  
//       const result = await response.json();
//       console.log('Quiz saved successfully:', result);
//     } catch (error) {
//       console.error('Error saving quiz:', error.message);
//     }
  
  
//   const quizData = {
//         quizUser: "username",
//         quizDateFinished: getDate(),
//         roundsCompleted: [{isFirstQuestionsRoundFinished: true}, 
//           {isColinRoundFinished: true}, {isGreekRoundFinished:true}, 
//           {isOddOneOutRoundFinished: true}, {isDogRoundFinished: true},
//           {isEpisodeNamesRoundFinished: true}, {isGeneral1RoundFinished: true},
//           {isGeneral2RoundFinished: true}, {isProductionCodesRoundFinished: true},
//           {isInhumanRoundFinished: true}, {isHowLongRoundFinished: true}, 
//           {isIntros1RoundFinished: true}, {isIntros2RoundFinished: true}, 
//           {isPlayedThemselvesRoundFinished: true}, {isWheelInSpaceRoundFinished: true}],
//         isQuizFinished: true,
//         totalScore: 0,
//       };
//   };
  

  

//     return (
//         <>
//         <RoundButtons saveQuiz={saveQuiz} />
//         </>
//      );
// }
 
// export default FinishQuiz;