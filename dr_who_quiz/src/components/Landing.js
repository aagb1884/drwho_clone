import React, {useEffect, useState} from 'react';
import { postQuiz } from './HighScores/UserQuizDataService';
import { NavLink } from "react-router-dom";

const LandingPage = () => {
    const [quizzers, setQuizzers] = useState([]);
    const [formData, setFormData] = useState({
      username: "",
      roundsCompleted: [],
      totalScore: ""
      })

      const onChange = (e) =>{
        const newFormData = Object.assign({}, formData);
        newFormData[e.target.name] = e.target.value;
        setFormData(newFormData);
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        postQuiz(formData).then((data)=>{
            addQuizzer(data);
        })
        // Reset the form input values
        setFormData({
          username: "",
          roundsCompleted: [],
          totalScore: ""
        });
    }


    useEffect(() => {
      fetch('http://localhost:9000')
      .then(res => res.json())
      .then(data => setQuizzers(data.message));
    })

    const addQuizzer = (quizzer) => {
      setQuizzers([...quizzers, quizzer]);
    
    }

    const removeQuizzer = (id) => {
      const quizzersToKeep = quizzers.filter(quizzer => quizzer._id !== id)
      setQuizzers(quizzersToKeep);
    }

    return (  
        <>
        <h1>TESTING LANDING PAGE</h1>
        <p>Before we start, please enter a username.</p>
        <form onSubmit={onSubmit} id="sightings-form" >
           
            <div className="formWrap">
                <label htmlFor="species">Username:</label>
                <input 
                    onChange={onChange} 
                    type="text" 
                    id="username" 
                    name="username"
                    value={formData.username} />
            </div>

            <input type="submit" value="Save" id="save"/>
	    </form>
      <NavLink to="/">Home</NavLink>
        </>
    );
}

 
export default LandingPage;