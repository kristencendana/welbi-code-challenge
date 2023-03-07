import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDataContext } from '../../contexts/DataContext';
import {ResidentOutputInterface} from '../../types';

// Dialog Component for the Residents Page
export default function ResidentDialog() {
  // grabbing state
  const {addResident} = useDataContext();
  // functionality below for opening and closing dialog
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState<DialogProps['scroll']>('paper');

  const handleClickOpen = (scrollType: DialogProps['scroll']) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Functionality for onClick to add data and update state
  const handleSubmit = () => {

    const result = Math.random().toString(36).substring(2,7);
    const newData : ResidentOutputInterface = 
    {
      ambulation: "CANE",
      birthDate: "1974-12-28T07:00:00.000Z",
      createdAt: "2009-09-17T04:44:10.000Z",
      firstName: "New",
      lastName: "Jerry",
      levelOfCare: "INDEPENDENT",
      moveInDate: "2009-09-17T07:00:00.000Z",
      name: result,
      preferredName: "Person",
      room: "1",
      status: "HERE",
      updatedAt: "2009-09-17T04:44:10.000Z"
    };
    addResident(newData);
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
          }}} onClick={handleClickOpen('paper')}>Add Resident</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Resident Details Form</DialogTitle>
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
