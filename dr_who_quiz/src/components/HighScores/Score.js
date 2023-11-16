const Score = ({username, totalscore}) => {

    return ( 
        <section className="score-row-data">
            <div className="username">{username}</div>
            <div className="totalscore">{totalscore}</div>
        </section>
        );
}
 
export default Score;