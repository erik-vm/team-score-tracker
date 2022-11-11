import './Teams.css';
import * as React from 'react';
import { useState } from 'react';
import { populateTeams } from '../utils/helpers';
import Team from './Team';



export default function Teams() {
    //teams state that holds the 10 teams initially
    const [teams, setTeams] = useState(populateTeams)

    //Adds a new team and updates the teams state
    const handleClick = () => {
        /* setIndex(teamIndex + 1); */
        setTeams(() => [...teams, {name: `Team ${teams.length + 1}`, points: 0}]);
    }
/* 
    const [teamIndex, setIndex] = useState(10);

    const [teamArray, setTeam] = useState([0,0,0,0,0,0,0,0,0,0]);

    const results = [];


    const [team, findTeam] = useState(0);

    const clickOnTeam1 = () => {
        findTeam(1);
    }
    const clickOnTeam2 = () => {
        findTeam(2);
    }
    const clickOnTeam3 = () => {
        findTeam(3);
    }
    const clickOnTeam4 = () => {
        findTeam(4);
    }
    const clickOnTeam5 = () => {
        findTeam(5);
    }
    const clickOnTeam6 = () => {
        findTeam(6);
    }
    const clickOnTeam7 = () => {
        findTeam(7);
    }
    const clickOnTeam8 = () => {
        findTeam(8);
    }
    const clickOnTeam9 = () => {
        findTeam(9);
    }
    const clickOnTeam10 = () => {
        findTeam(10);
    }



    let j = 1;

    for (const i of teamArray) {
        if (j < 11) {
            j = j + 1;
            continue;

        }
        results.push(
            <div className="teams">
                <div className="team">
                    <div className="description">
                        <h1>Team {j}</h1>
                        <h2>{i}</h2>
                        {team}
                    </div>
                </div>
             </div>
        );
    }
  */




    return (
        <div>
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
                            <Team name={team.name} points={team.points} key={i}></Team>
                        ))
                    }
                    
                    {/* <div className="team" onClick={clickOnTeam2}>
                        <div className="description">
                            <h1>Team 2</h1>
                            <h2>{teamArray[1]}</h2>
                            {team}
                        </div>
                    </div>
                    <div className="team" onClick={clickOnTeam3}>
                        <div className="description">
                            <h1>Team 3</h1>
                            <h2>{teamArray[2]}</h2>
                            {team}
                        </div>
                    </div>
                    <div className="team" onClick={clickOnTeam4}>
                        <div className="description">
                            <h1>Team 4</h1>
                            <h2>{teamArray[3]}</h2>
                            {team}
                        </div>
                    </div>
                    <div className="team" onClick={clickOnTeam5}>
                        <div className="description">
                            <h1>Team 5</h1>
                            <h2>{teamArray[4]}</h2>
                            {team}
                        </div>
                    </div>
                    <div className="team" onClick={clickOnTeam6}>
                        <div className="description">
                            <h1>Team 6</h1>
                            <h2>{teamArray[5]}</h2>
                            {team}
                        </div>
                    </div>
                    <div className="team" onClick={clickOnTeam7}>
                        <div className="description">
                            <h1>Team 7</h1>
                            <h2>{teamArray[6]}</h2>
                            {team}
                        </div>
                    </div>
                    <div className="team" onClick={clickOnTeam8}>
                        <div className="description">
                            <h1>Team 8</h1>
                            <h2>{teamArray[7]}</h2>
                            {team}
                        </div>
                    </div>
                    <div className="team" onClick={clickOnTeam9}>
                        <div className="description">
                            <h1>Team 9</h1>
                            <h2>{teamArray[8]}</h2>
                            {team}
                        </div>
                    </div>
                    <div className="team" onClick={clickOnTeam10}>
                        <div className="description">
                            <h1>Team 10</h1>
                            <h2>{teamArray[9]}</h2>
                            {team}
                        </div>
                    </div> */}
                </div>
                {/* {results} */}
            </div>
            <div id="button">
                <button className="description" onClick={handleClick}> <h2>Add Team!</h2></button>
            </div>
        </div>

    );
}