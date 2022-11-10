import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

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