// import React, { useState, forwardRef, useImperativeHandle, ReactNode } from 'react';
// import ReactDOM from "react-dom";
// import { useForm, SubmitHandler } from "react-hook-form";
// // import { forwardRef, useImperativeHandle,  } from 'react';

// export interface RefType {
//   doSomething: () => void;
// }

// interface Props {
//   children?: ReactNode;
//   type: 'submit' | 'button';
// }

// export type Ref = HTMLButtonElement;

// enum GenderEnum {
//   female = "female",
//   male = "male",
//   other = "other"
// }

// interface IFormInput {
//   firstName: String;
//   gender: GenderEnum;
// }

// export const ProgramsForm = React.forwardRef<Ref, Props>((props, ref) => {
//   const { register, handleSubmit } = useForm<IFormInput>();
//   //   defaultValues: { name: "Mr Smith", description: "A nice guy" }
//   // });

//   // const [formData, setFormData] = useState([]);

//   // const myRef = React.useRef<HTMLFormElement>(null);

//   // const onSubmit: SubmitHandler<IFormInput> = data => {
//   //   console.log(data);
//   //   alert('button clicked')
//     // const result = Math.random().toString(36).substring(2,7);
//     // const newData : ProgramOutputInterface = 
//     //   {
//     //     allDay: false,
//     //     createdAt: "2023-02-07T06:16:24.847Z",
//     //     dimension: "Intellectual",
//     //     end: "2009-11-12T20:00:00.000Z",
//     //     facilitators: ['Abby'],
//     //     hobbies: ['Debate', 'Public Speaking'],
//     //     levelOfCare: ['INDEPENDENT'],
//     //     location: "Library",
//     //     name: result,
//     //     start: "2009-11-12T19:00:00.000Z",
//     //     tags: ['outing'],
//     //     updatedAt: "2023-02-07T06:16:24.847Z",
//     //     isRepeated: false
//     //   };
//     // addProgram(newData);
//   // }

//   // const onSubmit = (d) => {
//   //   setFormData([...formData, d]);
//   // };

//   // const onError = (e) => {
//   //   console.error(e);
//   // };

//   // // Expose submitForm method to parent component.
//   // useImperativeHandle(ref, () => ({
//   //   submitForm() {
//   //     handleSubmit(onSubmit, onError)();
//   //   }
//   // }));

//   return (
//     <form ref={myRef} onSubmit={handleSubmit(onSubmit)}>
//       <label>First Name</label>
//       <input {...register("firstName")} />
//       <label>Gender Selection</label>
//       <select {...register("gender")} >
//         <option value="female">female</option>
//         <option value="male">male</option>
//         <option value="other">other</option>
//       </select>
//       <input type="submit" />
//     </form>
//     // <div>
//     //   <p>Hello</p>
//     // </div>
//   );
// });