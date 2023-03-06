import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { AttendeeInterface, ProgramInterface, ResidentInterface, useDataContext } from '../contexts/DataContext';
import { useNavigate } from 'react-router-dom';

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

function createData(
  name: String,
  room: String,
  status: String,
  levelofcare: String,
) {
  return { name, room, status, levelofcare };
}

export interface ResidentsDisplayProps {
  programId?: string
}


export default function ResidentsTable({programId}:ResidentsDisplayProps) {

  const {programs, residents} = useDataContext();

  const residentsArray: ResidentInterface[] = [];
  const noAttendance = [];

  if (programId){
    console.log(programId)
    // grab the program's array attendance with programId
    const attendees = programs[programId].attendance;
    // console.log(attendees);
    if (attendees.length === 0){
      noAttendance.push(<div>No Current Attendees</div>)
    } else {
      for (let attendee of attendees){
        const {residentId} = attendee;
        const residentObj = residents[residentId];
        residentsArray.push(residentObj);
      }
    }
  } else {
    residentsArray.push(...Object.values(residents));
  }

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
          {noAttendance}
          {residentsArray.map((row: ResidentInterface) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row" onClick={() => handleClick(row.id)}>
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.room}</StyledTableCell>
              <StyledTableCell align="right">{row.status}</StyledTableCell>
              <StyledTableCell align="right">{row.levelOfCare}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}