import * as React from 'react';

const Activity = ({StyledTableCell, StyledTableRow, name, points}) => {
    return (
        <StyledTableRow>
        <StyledTableCell component="th" scope="row">
          {name}
        </StyledTableCell>
        <StyledTableCell align="right">{points}</StyledTableCell>
      </StyledTableRow>
    )
}

export default Activity