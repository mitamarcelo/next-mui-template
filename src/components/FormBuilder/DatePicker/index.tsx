import React from 'react';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import TextField from '@mui/material/TextField';

const DatePicker = (props: any) => (
  <LocalizationProvider dateAdapter={AdapterDateFns}>
    <MobileDatePicker
      label={props.label}
      inputFormat={props.inputFormat}
      value={props.defaultValue}
      onChange={props.onChange}
      renderInput={(params) => <TextField {...params} />}
    />
  </LocalizationProvider>
);

export default DatePicker;
