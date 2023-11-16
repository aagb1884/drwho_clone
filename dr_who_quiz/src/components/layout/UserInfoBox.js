const UserInfoBox = ({totalScore}) => {

    let total = 0;
    for (let i = 0; i < totalScore.length; i++) {
        total += totalScore[i];
    }
    
    // totalScore.reduce((acc, score) => acc + score, 0);
    

    return ( 
        <section className="user-info-box">
        
        <p>userName</p>
        <p>Total Score: {total}</p>
        <p>Log Out</p>
        
        </section>
     );
}
 
export default UserInfoBox;