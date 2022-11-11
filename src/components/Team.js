import React, { Component, useState } from 'react';
import './Team.css'

const Team = ({name, points}) => {
  


  const modelToggler = () => {
    var mainContainer = document.querySelector(".main-container");
    mainContainer.classList.toggle("show");
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

};

export default Team;