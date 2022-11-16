import React, { Component, useState, useEffect } from 'react';
import './Team.css'
import { Fade, Box, Typography, Modal, Backdrop } from '@mui/material';
import Activities from './Activities';
import agent from '../data/agent';

const Team = ({ name, id}) => {
  /* const [activities, setActivities] = useState([
    {name: "Development  in  React  of  the  scoring  application", points:0},
    {name: "Rover  lunar", points:0},
    {name: "TDD  exercises", points:0},
    {name: "Ping-pong  programming", points:0},
    {name: "BugHunting", points:0},
    {name: "Assessment  week  5", points:0},
    {name: "Exercises  with  Selenium", points:0},
    {name: "Assessment  week  6", points:0},

]) */
const [activities, setActivities] = useState([])

//useEffect -> a hook that runs the function inside it everytime the component is rendered
useEffect(() => { 
  //fetches the teams from the api and sets it to the teams state
  (async () => {
    const fetchedTeam = await agent.team.getById(id)
    setActivities(fetchedTeam.activityList)
  })();
});

let totalPointsCounter = 0
activities.forEach(activity => totalPointsCounter += activity.score)
const [totalPoints, setTotalPoints] = useState(totalPointsCounter)

const pointsSubmitHandler = (newActivity) => {
        let newActivities = activities.filter(a => !(a.name == newActivity.name))
        newActivities.push(newActivity)
        /* setActivities(newActivities) */
        setTotalPoints(totalPointsCounter += newActivity.points)
}

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const modelToggler = () => {
    var mainContainer = document.querySelector(".main-container");
    mainContainer.classList.toggle("show");
  }
  const clickTeamHandler = () => {
    alert(`You clicked on ${name}`)
  }

  const boxStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <div className="team" onClick={handleOpen}>
        <div className="description">
          <h1>{name}</h1>
          <h2>{totalPoints}</h2>
        </div>
      </div>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={boxStyle}>
                      <h2 align="center" className='activitiesTeamName'>{name}</h2>
            <Activities activities={activities} pointsSubmitHandler={pointsSubmitHandler}></Activities>
          </Box>
        </Fade>
      </Modal>
    </>
  );

};

export default Team;