import Footer from "./layout/Footer";


const HowItWorks = () => {
    return ( 
        <>
        <h1>How to play</h1>
        <section className="how-to-play">
            <p>When you log in, you will be asked to start a new quiz.</p>
            <p>You will then be shown all the rounds in the quiz.</p>
            <p>Click on any round in any order.</p>
            <p>You will have 60 seconds per question, after that the quiz moves onto the next question.</p>
            <p>Please make sure you read the instructions for each round. They will tell you what kind of information we're looking for.</p>
            <p>Answers are not capitalised, so if the answer is 'Cyberman' then 'cyberman' or 'Cyberman' will be accepted as correct.</p>
            <p>Once you complete a round, you won't be able to restart it until you start a new quiz.</p>
            <p>Complete the entire quiz and see if you made the leaderboard.</p>
            <p>It's meant to be silly and difficult. Don't take it too seriously.</p>
        </section>
        <Footer />
        </>
     );
}
 
export default HowItWorks;