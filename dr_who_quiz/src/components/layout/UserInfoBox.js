import { NavLink } from "react-router-dom";

const UserInfoBox = ({totalScore, username}) => {

    let total = 0;
    for (let i = 0; i < totalScore.length; i++) {
        total += totalScore[i];
    }

  
    return ( 
        <section className="user-info-box">
        
        <p>{!username ? 'Enter a username below' : username}</p>
        <p>Total Score: {total}</p>
        
        </section>
     );
}
 
export default UserInfoBox;