import './Teams.css';
import * as React from 'react';
import { useState, useEffect } from 'react';
import Team from './Team';
import { Box } from '@mui/system';
import agent from '../data/agent';



export default function Teams() {
    //initializing team state and setting it to an empty array for now(it will get populated when useEffect runs dw)
    const [teams, setTeams] = useState([])

    //useEffect -> a hook that runs the function inside it everytime the component is rendered
    useEffect(() => { 
        //fetches the teams from the api and sets it to the teams state
        (async () => setTeams(await agent.team.getAll()))();
      });

    //Adds a new team and updates the teams state
    const handleClick = () => {
        /* setIndex(teamIndex + 1); */
        setTeams(() => [...teams, { name: `Team ${teams.length + 1}`, points: 0 }]);
    }

    
    



    return (
            <div id='teams-general'>
                <h1 className='title'> Bootcamp Project</h1>
                <div className="divider"></div>
                <div className="teams">
                    {
                        /* for every team in teams it generates a Team.js component
                        N.B: everytime you iterate through an array
                             to render multiple components you should assign
                             a unique key for every iteration */
                        teams.map((team, i) => (
                            //unique key
                            <Team name={team.teamName} activities={team.activityList} key={i}></Team>
                        ))
                    }

                    
                </div>
                {/* {results} */}
                <div className="button">
                    <button className="description" onClick={handleClick}> <h2>Add Team!</h2></button>
                </div>
            
            </div>

    );
}