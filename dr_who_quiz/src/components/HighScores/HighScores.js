import Header from '../layout/Header';
import Footer from "../layout/Footer";
import { getQuizzes } from './UserQuizDataService';
import { useState, useEffect } from 'react';
import ScoresTable from './ScoresTable';


const HighScores = () => {

    const [allScores, setAllScores] = useState([]);

    useEffect(()=> {
        getQuizzes().then((scores) => {
            setAllScores(scores)
        })
    }, []);

 

    return (
                <section className='high-score-main-container'>
                <Header />
                <br/>
                <div className='high-score-wrapper'>
                    <h1>HIGH SCORES</h1>
                
                <ScoresTable allScores={allScores} />
                </div>
                <Footer />
                </section>
            );
        }

export default HighScores;