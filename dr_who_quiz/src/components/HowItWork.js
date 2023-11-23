import Footer from "./layout/Footer";


const HowItWorks = () => {
    return ( 
        <>
        <h1>How to play</h1>
        <section className="how-to-play">
            <p>Choose a username.</p>
            <p>Click on any round in any order.</p>
            <p>You will have 60 seconds per question, after that the quiz moves onto the next question.</p>
            <p>Answers are not capitalised, so if the answer is 'Cyberman' then 'cyberman' or 'Cyberman' will be accepted as correct.</p>
            <p>Once you complete a round, you won't be able to restart it until you start a new quiz.</p>
            <p>You can start a new quiz at any time, but you can only submit your score for the leaderboard if the whole quiz is finished.</p>
            <br />
            <p>It's meant to be silly and difficult. Don't take it too seriously.</p>
        </section>
        <Footer />
        </>
     );
}
 
export default HowItWorks;