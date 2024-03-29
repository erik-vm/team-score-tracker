import Activity from "./Activity"
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';




const Activities = ({activities, pointsSubmitHandler}) => {

    const StyledTableCell = styled(TableCell )(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: '#D7ECD9',
            color: '#214e34',
           
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
            
            
        },
      }));
      
      const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
              backgroundColor: '#fafcfa',

        },
        // hide last border
        '&:last-child td, &:last-child th': {
          border: 0,
        },
      }));
      

      let totalPoints = 0
      activities.forEach(activity => totalPoints += activity.score)


    return(
        <TableContainer component={Paper} >
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                        <StyledTableCell align="center"><strong>Activities</strong></StyledTableCell>
                        <StyledTableCell align="center"><strong>Points: {totalPoints}</strong></StyledTableCell>
            
              </TableRow>
            </TableHead>
            <TableBody align= "center">
                {
                    activities.map((activity, i) => (
                        <Activity pointsSubmitHandler={pointsSubmitHandler} activity={activity} StyledTableCell={StyledTableCell} StyledTableRow={StyledTableRow} key={i}></Activity>
                    ))
                }
            </TableBody>
          </Table>
        </TableContainer>
    )
}

export default Activities