const Score = ({username, totalscore, date}) => {

    return ( 
        <section className="score-row-data">
            <div className="username">{username}</div>
            <div className="totalscore">{totalscore}</div>
            <div className="date-finished">{date}</div>
        </section>
        );
}
 
export default Score;