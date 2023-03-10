import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { AttendeeInterface } from '../../types';

// Creating state for Residents in specified Program
function createData(
  name: string,
  firstName: string,
  lastName: string,
  birthDate: string,
  programs: AttendeeInterface[],
  room: string,
  status: string,
) {
  return { name, firstName, lastName, birthDate, programs, room, status };
}
// props for ResidentTable component
export interface ResidentTableProps {
  residentId: number
  name: string
  firstName: string
  lastName: string
  birthDate: string
  room: string
  status: string
}

export default function ResidentTable({residentId, name, firstName, lastName, birthDate, room, status}: ResidentTableProps) {
  
  // using an array to loop through data via map method in return
  const residentInfo = [['First Name', firstName], ["Last Name", lastName], ["Birthday", birthDate], 
    , ["Room", room], ["Status", status]];

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 450 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>{name}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {residentInfo.map((row) => {
            const a = row![0];
            const b = row![1];
            return (
              <TableRow
                key={residentId}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {a}
                </TableCell>
                <TableCell align="center">{b}</TableCell>
              </TableRow>
              )})}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
