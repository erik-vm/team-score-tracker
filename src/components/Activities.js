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


const Activities = () => {
const [activities, setActivities] = useState([
    {name: "Development  in  React  of  the  scoring  application", points:0},
    {name: "Rover  lunar", points:0},
    {name: "TDD  exercises", points:0},
    {name: "Ping-pong  programming", points:0},
    {name: "BugHunting", points:0},
    {name: "Assessment  week  5", points:0},
    {name: "Exercises  with  Selenium", points:0},
    {name: "Assessment  week  6", points:0},

])

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
        },
      }));
      
      const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
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
            <StyledTableCell align="right">Points: {totalPoints}</StyledTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
            {
                activities.map((activity) => (
                    <Activity name={activity.name} points={activity.points} StyledTableCell={StyledTableCell} StyledTableRow={StyledTableRow}></Activity>
                ))
            }
           
        </TableBody>
      </Table>
    </TableContainer>
    )
}

export default Activities