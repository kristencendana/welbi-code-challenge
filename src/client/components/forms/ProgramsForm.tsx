import React, { useState } from "react";
import {Button, Grid, TextField, FormControlLabel, FormControl, FormLabel, RadioGroup, Radio} from "@mui/material"
import { useDataContext } from "../../contexts/DataContext";

// If given more time, we could complete the submit forms

const {addProgram} = useDataContext();

const defaultValues = {
  name: "",
  location: "",
  dimension: "",
  isRepeated: false,
  allDay: false,
};

const dummyData = {
  createdAt: "2023-02-07T06:16:24.847Z",
  end: "2009-11-12T20:00:00.000Z",
  facilitators: ['Abby'],
  hobbies: ['Debate', 'Public Speaking'],
  levelOfCare: ['INDEPENDENT'],
  start: "2009-11-12T19:00:00.000Z",
  tags: ['outing'],
  updatedAt: "2023-02-07T06:16:24.847Z",
  isRepeated: false
}

export default function ProgramsForm() {
const [formValues, setFormValues] = useState(defaultValues);

const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value } = e.target;
  setFormValues({
    ...formValues,
    [name]: value,
  });
};

const handleSubmit = (event: React.FormEvent) => {
  event.preventDefault();

  console.log(formValues);
  const newData = Object.assign({}, formValues, dummyData);
  console.log(newData);
  alert(newData);
  // addProgram(newData)
  setFormValues(defaultValues);
};

  return (
    <form onSubmit={handleSubmit}>
      <Grid container alignItems="center" justifyContent="center" direction="column">
        <Grid item>
        {/* // type for NAME string */}
          <TextField
            id="name-input"
            name="name"
            label="Name"
            type="text"
            value={formValues.name}
            onChange={handleInputChange}
          />
        </Grid>
        {/* String Inputs */}
        <Grid item>
        {/* // type for LOCATION string */}
          <TextField
            id="location-input"
            name="location"
            label="Location"
            type="text"
            value={formValues.location}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item>
        {/* // type for DIMENSION string */}
          <TextField
            id="dimension-input"
            name="dimension"
            label="Dimension"
            type="text"
            value={formValues.dimension}
            onChange={handleInputChange}
          />
        </Grid>
          <Grid item>
            <FormControl>
              <FormLabel>All Day</FormLabel>
              <RadioGroup
                name="gender"
                value={formValues.allDay}
                onChange={handleInputChange}
                row
              >
                <FormControlLabel
                  key="true"
                  value="true"
                  control={<Radio size="small" />}
                  label="True"
                />
                <FormControlLabel
                  key="false"
                  value="false"
                  control={<Radio size="small" />}
                  label="False"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item>
          <Grid item>
            <FormControl>
              <FormLabel>Repeated?</FormLabel>
              <RadioGroup
                name="gender"
                value={formValues.isRepeated}
                onChange={handleInputChange}
                row
              >
                <FormControlLabel
                  key="true"
                  value="true"
                  control={<Radio size="small" />}
                  label="Yes"
                />
                <FormControlLabel
                  key="false"
                  value="false"
                  control={<Radio size="small" />}
                  label="No"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          </Grid>
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
      </Grid>
    </form>
  )
}