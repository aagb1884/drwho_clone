import './App.css';
import MainContainer from './Container';
import React from "react";
import { ScoreProvider } from './components/quiz_elements/ScoreContext';


function App() {


 
  return (
    <div className="App">
      
     
      <ScoreProvider>
        <MainContainer />
      </ScoreProvider>
     
     
    </div>
  );
}

export default App;
