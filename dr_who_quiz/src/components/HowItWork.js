import Footer from "./layout/Footer";


const HowItWorks = () => {
    return ( 
        <>
        <h1>How to play</h1>
        <section className="how-to-play">
            <p>When you log in, you will be shown all the rounds in the quiz</p>
            <p>Click on any round in any order.</p>
            <p>You will have 60 seconds per question, after that the quiz moves onto the next question.</p>
            <p>Answers are not capitalised, so if the answer is 'Cyberman' then 'cyberman' or 'Cyberman' will be accepted as correct.</p>
            <p>Once you complete a round, you won't be able to restart it until you start a new quiz.</p>
            <p>You can start a new quiz at any time, but only finished quizzes will qualify for the high scores page.</p>
            <p>Complete the entire quiz and see if you made the leaderboard.</p>
            <p>It's meant to be silly and difficult. Don't take it too seriously.</p>
        </section>
        <Footer />
        </>
     );
}
 
export default HowItWorks;