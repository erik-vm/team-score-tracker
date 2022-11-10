import Activity from "./Activity"
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const Activities = () => {
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


    return(
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Activities</StyledTableCell>
            <StyledTableCell align="right">Points</StyledTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
         
            <Activity name={"PingPong game"} points={15} StyledTableCell={StyledTableCell} StyledTableRow={StyledTableRow}></Activity>
            <Activity name={"Idk project"} points={5} StyledTableCell={StyledTableCell} StyledTableRow={StyledTableRow}></Activity>
            <Activity name={"Funny game"} points={7} StyledTableCell={StyledTableCell} StyledTableRow={StyledTableRow}></Activity>
         
        </TableBody>
      </Table>
    </TableContainer>
    )
}

export default Activities