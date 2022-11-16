import './Teams.css';
import * as React from 'react';
import { useState, useEffect } from 'react';
import Team from './Team';
//import { Box } from '@mui/system';
import agent from '../data/agent';



export default function Teams() {
    //initializing team state and setting it to an empty array for now(it will get populated when useEffect runs dw)
    const [teams, setTeams] = useState([])

    //useEffect -> a hook that runs the function inside it everytime the component is rendered
    useEffect(() => { 
        //fetches the teams from the api and sets it to the teams state
        
        (async () => setTeams(await agent.team.getAll()))();
    }, []);

    const activityList = [
        {
            activityId: 1, activityName: "Development  in  React  of  the  scoring  application", score: 5
        },
        {
            activityId: 2, activityName: "Rover  lunar", score: 0
        },
        {
            activityId: 3, activityName: "TDD  exercises", score: 0
        },
        {
            activityId: 4, activityName: "Ping-pong  programming", score: 0
        },
        {
            activityId: 4, activityName: "BugHunting", score: 0
        },
        {
            activityId: 6, activityName: "Assessment  week  5", score: 0
        },
        {
            activityId: 7, activityName: "Exercises  with  Selenium", score: 0
        },
        {
            activityId: 8, activityName: "Assessment  week  6", score: 0
        }
    ]

    //Adds a new team and updates the teams state
    const handleClick = async () => {
        const newTeam =
        {
            "teamName": `Team ${teams.length + 1}`,
            "teamScore": 0,
            "activityList": activityList
        };
        /* setIndex(teamIndex + 1); */

        const added = await agent.team.addTeam(newTeam);

        console.log(added)
        setTeams(() => [...teams, added]);
        
        

    }

    
    
    //"teamId": `${teams.length + 1}`,


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
                            <Team name={team.name} id={team.id} key={i}></Team>
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