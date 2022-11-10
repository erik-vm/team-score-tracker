import './Teams.css';
import React, { useState } from "react";

export default function Teams() {


    const handleClick = () => {
        setIndex(teamIndex + 1);
        setTeam(teamArray.concat(0));
    }

    const [teamIndex, setIndex] = useState(0);

    const [teamArray, setTeam] = useState([]);

    const results = [];

    let j = 1;
    for (const i of teamArray) {
        results.push(
        <div className="team">
            <div className="description">
                    <h1>Team {j}</h1>
                    <h2>{i}</h2>
             </div>
        </div>,
        );
        j = j + 1;
    }
    j = 0;


    return (
        <div id='teams-general'>
            <h1 className='title'> Bootcamp Project</h1>
            <div className="divider"></div>
            <div className="teams">
                {results}

            </div>
            <div className="divider"></div>
            <div>
                <button onClick={handleClick}> Button</button>
                {teamArray }
            </div>
        </div>

    );
}