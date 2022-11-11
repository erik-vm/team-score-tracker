import React, { Component, useState } from 'react';
import './Team.css'
import { Fade, Box, Typography, Modal, Backdrop } from '@mui/material';
import Activities from './Activities';

const Team = ({ name, points }) => {

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
          <h2>{points}</h2>
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
            <h2 className='activitiesTeamName'>{name}</h2>
            <Activities></Activities>
          </Box>
        </Fade>
      </Modal>
    </>
  );

};

export default Team;