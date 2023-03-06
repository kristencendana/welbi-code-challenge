import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ProgramInterface, useDataContext } from '../contexts/DataContext';
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
  dimension: String,
  tags: String[],
  location: String,
  facilitators: String[],
) {
  return { name, dimension, tags, location, facilitators };
}

export default function ProgramsTable() {

  const {programs} = useDataContext();

  const programsArray = Object.values(programs);

  const navigate = useNavigate();
  const handleClick = (programId:number) => {
    navigate(`/program/${programId}`);
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Programs ({programsArray.length})</StyledTableCell>
            <StyledTableCell align="right">Location</StyledTableCell>
            <StyledTableCell align="right">Facilitators</StyledTableCell>
            <StyledTableCell align="right">Dimension</StyledTableCell>
            <StyledTableCell align="right">Tags</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {programsArray.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row" onClick={() => handleClick(row.id)}>
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.location}</StyledTableCell>
              <StyledTableCell align="right">{row.facilitators[0]}</StyledTableCell>
              <StyledTableCell align="right">{row.dimension}</StyledTableCell>
              <StyledTableCell align="right">{row.tags}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}