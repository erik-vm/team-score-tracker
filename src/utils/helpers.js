//returns an array of the 10 initial teams
export function populateTeams() {
    const INITIAL_TEAM_SIZE = 10;
    let initialTeams = []
    for(let i = 1; i < INITIAL_TEAM_SIZE + 1; i++ ){
        initialTeams.push({name: `Team ${i}`, points:0})
    }
    return initialTeams;
}