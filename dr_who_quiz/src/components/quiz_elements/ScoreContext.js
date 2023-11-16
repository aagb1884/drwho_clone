import React, { createContext, useContext, useState } from 'react';

const ScoreContext = createContext();

export function ScoreProvider({ children }) {
  const [totalScore, setTotalScore] = useState([]);

  const updateTotalScore = (roundScore) => {
    
    setTotalScore([...totalScore, roundScore]);
  };

  const resetScoreToZero = () => {
    setTotalScore(0)
  }

  
  return (
    <ScoreContext.Provider value={{ totalScore, updateTotalScore, resetScoreToZero }}>
      {children}
    </ScoreContext.Provider>
  );
}

export function useScore() {
  return useContext(ScoreContext);
}
