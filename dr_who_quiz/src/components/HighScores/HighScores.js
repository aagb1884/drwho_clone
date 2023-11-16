import Header from '../layout/Header';
import Footer from "../layout/Footer";
import { getScores } from './UserQuizDataService';
import { useState, useEffect } from 'react';
import ScoresTable from './ScoresTable';


const HighScores = () => {

    const [userScores, setUserScores] = useState([]);

    useEffect(()=> {
        getScores().then((allScores) => {
            setUserScores(allScores)
        })
    }, []);

 

    return (
                <section className='high-score-main-container'>
                <Header />
                <br/>
                <div className='high-score-wrapper'>
                    <h1>HIGH SCORES</h1>
                
                <ScoresTable userScores={userScores} />
                </div>
                <Footer />
                </section>
            );
        }

export default HighScores;