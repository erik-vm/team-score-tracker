import React, { Component, useState } from 'react';
import './Team.css'

const Team = ({name, points}) => {

  const modelToggler = () => {
    var mainContainer = document.querySelector(".main-container");
    mainContainer.classList.toggle("show")
  }

  const clickTeamHandler = () => {
    alert(`You clicked on ${name}`)
  }
  return (
    <div className="team" onClick={clickTeamHandler}>
      <div className="description">
        <h1>{name}</h1>
        <h2>{points}</h2> 
      </div>
    </div>
  );

    {/* <div className="main-container">
      <div className="team-container">
        <div className="team-header"><h2>Team 5 </h2> <button className="btn">Edit</button></div>
        <div className="score">100</div>
      </div>
      <div><button className="close" onClick={modelToggler}>X</button></div>
    </div>
 */}
  
};

export default Team;