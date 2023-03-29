import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDataContext } from '../../contexts/DataContext';
import { useNavigate } from 'react-router-dom';
import { ResidentInterface } from '../../types';

// proper styling for cells
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
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

// functionality to create row data
function createData(
  name: String,
  room: String,
  status: String,
  levelofcare: String,
) {
  return { name, room, status, levelofcare };
}

// props for ResidentsTable component
export interface ResidentsDisplayProps {
  programId?: string
}

export default function ResidentsTable({programId}:ResidentsDisplayProps) {

  const {programs, residents} = useDataContext();
  const residentsArray: ResidentInterface[] = [];

  if (programId){
    // grab the program's array attendance with programId
    const attendees = programs[programId].attendance;
    for (let attendee of attendees){
      const {residentId} = attendee;
      const residentObj = residents[residentId];
      residentsArray.push(residentObj);
    }
  } else {
    residentsArray.push(...Object.values(residents));
  }

  // using navigate hook to go to other page when clicked, passing state prop
  const navigate = useNavigate();
  const handleClick = (residentId:number) => {
    const residentObj = residents[residentId];
    navigate(`/resident/${residentId}`, {state: residentObj});
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Residents ({residentsArray.length})</StyledTableCell>
            <StyledTableCell align="right">Room</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
            <StyledTableCell align="right">Level of Care</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {residentsArray.map((residentObj: ResidentInterface) => (
            <StyledTableRow key={residentObj.id}>
              <StyledTableCell sx={{color: 'primary.main', cursor: 'pointer'}} 
                component="th" scope="row" onClick={() => handleClick(residentObj.id)}>
                {residentObj.name}
              </StyledTableCell>
              <StyledTableCell align="right">{residentObj.room}</StyledTableCell>
              <StyledTableCell align="right">{residentObj.status}</StyledTableCell>
              <StyledTableCell align="right">{residentObj.levelOfCare}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}