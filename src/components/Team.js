import React, { Component, useState }  from 'react';
import './Team.css'

const Team = (props) => {

  const [teamName, setName] = useState(props.teamName);

  const modelToggler= ()=>{
    var mainContainer = document.querySelector(".main-container");
    mainContainer.classList.toggle("show");

  }
  return (

    <div className="main-container">
      <div className="team-container">
        <div className="team-header"><h2>Team 5 </h2> <button className="btn">Edit</button></div>
        <div className="score">100</div>
      </div>
      <div><button className="close" onClick={modelToggler}>X</button></div>
    </div>

  );
};

export default Team;