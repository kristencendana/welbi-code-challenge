import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDataContext } from '../../contexts/DataContext';
import {ProgramOutputInterface} from '../../types';
import { useForm, SubmitHandler } from "react-hook-form";

// Functionality for Program Dialog Component
export default function ProgramDialog() {
  // grab state, create dialog component with open/close state
  const {addProgram} = useDataContext();
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState<DialogProps['scroll']>('paper');

  // const childRef = React.useRef<RefType>(null);

  const handleClickOpen = (scrollType: DialogProps['scroll']) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // handle oncklick submission of button to add new program
  // const handleSubmit = () => {
  //   // creating a randomly generated string for dummy user name
  //   const result = Math.random().toString(36).substring(2,7);
  //   const newData : ProgramOutputInterface = 
  //     {
  //       allDay: false,
  //       createdAt: "2023-02-07T06:16:24.847Z",
  //       dimension: "Intellectual",
  //       end: "2009-11-12T20:00:00.000Z",
  //       facilitators: ['Abby'],
  //       hobbies: ['Debate', 'Public Speaking'],
  //       levelOfCare: ['INDEPENDENT'],
  //       location: "Library",
  //       name: result,
  //       start: "2009-11-12T19:00:00.000Z",
  //       tags: ['outing'],
  //       updatedAt: "2023-02-07T06:16:24.847Z",
  //       isRepeated: false
  //     };
  //   addProgram(newData);
  //   setOpen(false);
  // }

  // const submitChildForm = () => {
  //   if (childRef && childRef.current) {
  //     childRef.current.submitForm();
  //   }
  // };

  enum GenderEnum {
    female = "female",
    male = "male",
    other = "other"
  }
  
  interface IFormInput {
    firstName: String;
    gender: GenderEnum;
  }

  const { register, handleSubmit } = useForm<IFormInput>();
   const onSubmit: SubmitHandler<IFormInput> = data => {
    console.log(data);
    alert('button clicked')
    const result = Math.random().toString(36).substring(2,7);
    const newData : ProgramOutputInterface = 
      {
        allDay: false,
        createdAt: "2023-02-07T06:16:24.847Z",
        dimension: "Intellectual",
        end: "2009-11-12T20:00:00.000Z",
        facilitators: ['Abby'],
        hobbies: ['Debate', 'Public Speaking'],
        levelOfCare: ['INDEPENDENT'],
        location: "Library",
        name: result,
        start: "2009-11-12T19:00:00.000Z",
        tags: ['outing'],
        updatedAt: "2023-02-07T06:16:24.847Z",
        isRepeated: false
      };
    addProgram(newData);
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
    <div className="dialog">
      <Button variant="contained" size="small" sx={{color: 'black', backgroundColor: 'rgb(150, 172, 210)', 
        ':hover': {
          bgcolor: 'white',
          color: 'black'
          }}} onClick={handleClickOpen('paper')}>Add Program</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Program Details Form</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            {/* {[...new Array(1)]
              .map(
                () => <ProgramsForm />,
              )
              .join('\n')} */}
              {/* <ProgramsForm ref={childRef}/> */}
              <form id="hook-form" onSubmit={handleSubmit(onSubmit)}>
                <label>First Name</label>
                <input {...register("firstName")} />
                <label>Gender Selection</label>
                <select {...register("gender")} >
                  <option value="female">female</option>
                  <option value="male">male</option>
                  <option value="other">other</option>
                </select>
                {/* <input type="submit" /> */}
              </form>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button sx={{color: 'error.main'}}onClick={handleClose}>Cancel</Button>
          <Button type="submit" form="hook-form" onClick={handleClose} sx={{color: 'success.main'}}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
