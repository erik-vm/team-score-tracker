import { Typography, Input } from '@mui/material';
import * as React from 'react';

const Activity = ({ StyledTableCell, StyledTableRow, activity, pointsSubmitHandler }) => {
    const [pointIsClicked, setPointIsClicked] = React.useState(false)
    const [newPoints, setNewPoints] = React.useState(0)

    const pointsChangeHandler = (event) => {
        
        setNewPoints(event.target.value)
    }

    const submitPoints = (e) => {
        e.preventDefault()
        pointsSubmitHandler(newPoints, activity.activityId)
        console.log(activity)
        activity.score = newPoints
        setPointIsClicked(false)
    }




    return (
        <StyledTableRow>
            <StyledTableCell component="th" scope="row" align="center">
                {activity.activityName}
            </StyledTableCell>
            <StyledTableCell component="th" scope="row" align="center">
            {
                pointIsClicked ? (
                    <td>
                        <form onSubmit={submitPoints}>
                            <Input type='number' onChange={pointsChangeHandler} defaultValue={activity.score} sx={{maxWidth: "40px", align:"center"}}/>
                            <button type='submit' >submit</button>
                        </form>
                    </td>

                ) : (
                    <Typography onClick={() => setPointIsClicked(true)}>{activity.score}</Typography>
                )
            }
            </StyledTableCell>
            

        </StyledTableRow>
    )
}

export default Activity