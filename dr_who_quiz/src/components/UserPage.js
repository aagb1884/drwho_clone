import { getQuizzes } from "./HighScores/UserQuizDataService";
import { useState, useEffect } from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import UserQuizInfo from "./UserQuizInfo";

const UserPage = ({setSelectedQuiz, username}) => {
    const [userScores, setUserScores] = useState([]);

    useEffect(()=> {
        getQuizzes().then((scores) => {
            setUserScores(scores)
        })
    }, []);

    const allUserQuizzes = userScores.filter((quiz) => quiz.quizUser === username)
   

    return ( 
        <>
        <Header />
        <section className="user-page-content">
            <h1>{username.length === 0 ? "User Info Page" : `${username}'s Info Page`}</h1>
            <UserQuizInfo allUserQuizzes={allUserQuizzes}
                          setSelectedQuiz={setSelectedQuiz}  
                            />
        </section>
        <Footer />
        </>
     );
}
 
export default UserPage;