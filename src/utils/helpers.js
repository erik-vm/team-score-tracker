import agent from '../data/agent';
//N.B: We dont need this anymore
//returns an array of the 10 initial teams
export function populateTeams() {
    const INITIAL_TEAM_SIZE = 10;
    let initialTeams = [];
    for(let i = 1; i < INITIAL_TEAM_SIZE + 1; i++ ){
        //initialTeams.push({name: `Team ${i}`, points:0})
        agent.activity.update(i);
        initialTeams.push(agent.team.getById(i));
    }
    //initialTeams.push(agent.team.getAll());
    return initialTeams;
}