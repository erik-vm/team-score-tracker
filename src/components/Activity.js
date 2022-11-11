import { Typography, Input } from '@mui/material';
import * as React from 'react';

const Activity = ({ StyledTableCell, StyledTableRow, name, points, pointsSubmitHandler }) => {
    const [pointIsClicked, setPointIsClicked] = React.useState(false)
    const [newPoints, setNewPoints] = React.useState(0)

    React.useEffect(()=>{

    }, points)
    const pointsChangeHandler = (event) => {
        
        setNewPoints(event.target.value)
    }

    const submitPoints = (e) => {
        e.preventDefault()
        pointsSubmitHandler({ name: name, points: parseInt(newPoints) })
        points = newPoints
        setPointIsClicked(false)
    }




    return (
        <StyledTableRow>
            <StyledTableCell component="th" scope="row" align="center">
                {name}
            </StyledTableCell>
            <StyledTableCell component="th" scope="row" align="center">
            {
                pointIsClicked ? (
                    <td>
                        <form onSubmit={submitPoints}>
                            <Input type='number' onChange={pointsChangeHandler} defaultValue={points} />
                            <button type='submit' >submit</button>
                        </form>
                    </td>

                ) : (
                    <Typography onClick={() => setPointIsClicked(true)}>{points}</Typography>
                )
            }
            </StyledTableCell>
            

        </StyledTableRow>
    )
}

export default Activity