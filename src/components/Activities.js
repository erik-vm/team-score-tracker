import Activity from "./Activity"
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState } from "react";


const Activities = ({activities, pointsSubmitHandler}) => {


    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: '#5F9EA0',
          color: '#214e34',
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
        },
      }));
      
      const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
          backgroundColor: '#D7ECD9',
        },
        // hide last border
        '&:last-child td, &:last-child th': {
          border: 0,
        },
      }));
      

      let totalPoints = 0
      activities.forEach(activity => totalPoints += activity.points)


    return(
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Activities</StyledTableCell>
            <StyledTableCell>Points: {totalPoints}</StyledTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
            {
                activities.map((activity, i) => (
                    <Activity pointsSubmitHandler={pointsSubmitHandler} name={activity.name} points={activity.points} StyledTableCell={StyledTableCell} StyledTableRow={StyledTableRow} key={i}></Activity>
                ))
            }
        </TableBody>
      </Table>
    </TableContainer>
    )
}

export default Activities