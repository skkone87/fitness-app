import React from 'react';
import TextField from '@material-ui/core/TextField';
import '../../App.css';

const Services =()=> {
  // const dateValue: Date = (new Date().getFullYear(),new Date().getMonth,20);

  return(
    <div style={{margin:'auto', display:'block',width:'fit-content'}}>
      <h4>Pick Appoinment for the next training</h4>
      <TextField id='date' label='Choose the convinience date' type='date'
      //  defaultValue='2021-10-28'
      InputLabelProps={{shrink:true}} />
    </div>)
}
export default Services
