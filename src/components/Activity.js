import { Typography, Input } from '@mui/material';
import * as React from 'react';

const Activity = ({StyledTableCell, StyledTableRow, name, points}) => {
    const [pointIsClicked, setPointIsClicked] = React.useState(false)
    
    return (
        <StyledTableRow>
        <StyledTableCell component="th" scope="row">
          {name}
        </StyledTableCell>
        {
            pointIsClicked ? (
                <Input defaultValue={points} />
            ) : (
                <Typography onClick={() => setPointIsClicked(true)}>{points}</Typography>
            )
        }
        
      </StyledTableRow>
    )
}

export default Activity