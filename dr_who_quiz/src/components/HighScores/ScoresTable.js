import React from "react";
import Score from "./Score";
import './ScoresTable.css';

const ScoresTable = ({allScores}) => {

    const filteredScores = allScores.filter(score => 
                                          score && score.totalScore !== null &&
                                          score.totalScore !== undefined && 
                                          score.totalScore !== '' &&
                                          score.isQuizFinished)
                                          .slice(0, 20);
    
    const sortedScores = filteredScores.sort((a, b) => b.totalScore - a.totalScore);
    
    const scoresList = sortedScores.map((score, index) => {    
      const rowClass = index % 2 === 0 ? "even-row" : "odd-row"


        return (
        <div className={`score-row ${rowClass}`} key={score._id}>
            <Score score={score} username={score.quizUser} totalscore={score.totalScore} date={score.quizDateFinished}/>
        </div>
        )
    });


    return (
        <div className="high-scores-container">
          <div className="high-scores-table">
            <div className="header-row">
              <span>Username</span>
              <span>High Score</span>
              <span>Date Finished</span>
            </div>
            {scoresList}
          </div>
        </div>
      );
    };
 
export default ScoresTable;