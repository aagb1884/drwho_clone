import { NavLink } from "react-router-dom";

const UserInfoBox = ({totalScore}) => {

    let total = 0;
    for (let i = 0; i < totalScore.length; i++) {
        total += totalScore[i];
    }
    
    // totalScore.reduce((acc, score) => acc + score, 0);
    
    console.log("hello from inside the app")

    return ( 
        <section className="user-info-box">
        
        <p>userName</p>
        <p>Total Score: {total}</p>
        <NavLink to="/user">User Page</NavLink>
        
        </section>
     );
}
 
export default UserInfoBox;