import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDataContext } from '../../contexts/DataContext';
import {AttendeeOutputInterface} from '../../types';

// props for Program Info Dialog Component
export interface ProgramInfoDialogProps {
  programId: string | undefined
}

// Functionality for Program Info Dialog
export default function ProgramInfoDialog({programId}: ProgramInfoDialogProps) {
  // grab state, create dialog component with open/close state
  const {programs, addResidentToProgram} = useDataContext();
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState<DialogProps['scroll']>('paper');

  const handleClickOpen = (scrollType: DialogProps['scroll']) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // functionality for onlick submission to add resident to program
  const handleSubmit = () => {
    // creating new dummy data
    const newData: AttendeeOutputInterface = 
      {
        residentId: 79,
        status: "Active"
      } 

      // if programId exists from props, check if user is already in program
      // if user already exists, send alert, otherwise add and update state
      if (programId){
        const {attendance} = programs[programId]
        if (attendance.length === 0){
          addResidentToProgram(Number(programId), newData);
        } else {
          for (let attendee of attendance){
            if (attendee.residentId === newData.residentId){
              alert('User already enrolled in Program');
            } else {
              addResidentToProgram(Number(programId), newData);
            }
          }
        }
      }
    setOpen(false);
  }

  // utilizing the useRef hook to create a focus on the open element
  const descriptionElementRef = React.useRef<HTMLElement>(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div>
      <Button variant="contained" size="small" sx={{color: 'black', backgroundColor: 'rgb(150, 172, 210)', 
        ':hover': {
          bgcolor: 'white',
          color: 'black'
          }}} onClick={handleClickOpen('paper')}>Enroll Resident to Program</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Add Resident Form</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            {[...new Array(1)]
              .map(
                () => `Insert Form Here`,
              )
              .join('\n')}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button sx={{color: 'error.main'}}onClick={handleClose}>Cancel</Button>
          <Button sx={{color: 'success.main'}}onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
