const UserQuizInfo = ({allUserQuizzes}) => {

    const sortedQuizzes = allUserQuizzes.sort((a, b) => {
        const dateA = new Date(a.quizDateFinished);
        const dateB = new Date(b.quizDateFinished);
        return dateB - dateA;
      });
 
    return ( 
        <div className="user-quiz-info">
      
      <h2>Quiz Information</h2>
      {sortedQuizzes.map((quiz) => (
        <div key={quiz.quizId}>
          
          <p>Date Last Saved {quiz.quizDateFinished}</p>
          <p>Finished: {quiz.isQuizFinished ? 'Yes' : 'No'}</p>
          <p>Score: {quiz.totalScore}</p>
          
        </div>
      ))}
    </div>
  );
};
            
 
export default UserQuizInfo;