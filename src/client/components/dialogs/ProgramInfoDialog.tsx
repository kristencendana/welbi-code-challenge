import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

// const handleClick = () => {

//   // upon click, open up modal component
//   // when clicked, we want to receive data from input form
//   // clean up the data to what we like and then invoke addProgram
//   const test : ProgramOutputInterface = 
//   {
//     allDay: false,
//     createdAt: "2023-02-07T06:16:24.847Z",
//     dimension: "Intellectual",
//     end: "2009-11-12T20:00:00.000Z",
//     facilitators: ['Abby'],
//     hobbies: ['Debate', 'Public Speaking'],
//     levelOfCare: ['INDEPENDENT'],
//     location: "Library",
//     name: "Reading",
//     start: "2009-11-12T19:00:00.000Z",
//     tags: ['outing'],
//     updatedAt: "2023-02-07T06:16:24.847Z",
//     isRepeated: false
//   };
//   addProgram(test);
// }

export default function ProgramInfoDialog() {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState<DialogProps['scroll']>('paper');

  const handleClickOpen = (scrollType: DialogProps['scroll']) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
      <Button variant="contained" onClick={handleClickOpen('paper')}>Add Resident To Program</Button>
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
            {[...new Array(50)]
              .map(
                () => `Insert Form Here`,
              )
              .join('\n')}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
