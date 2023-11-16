import React from "react";
import Score from "./Score";
import './ScoresTable.css';

const ScoresTable = ({userScores}) => {


  console.log(userScores)
    const filteredScores = userScores.filter(score => 
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
            <Score score={score} username={score.username} totalscore={score.totalScore} />
        </div>
        )
    });


    return (
        <div className="high-scores-container">
          <div className="high-scores-table">
            <div className="header-row">
              <span>Username</span>
              <span>High Score</span>
            </div>
            {scoresList}
          </div>
        </div>
      );
    };
 
export default ScoresTable;