import TextField from '@mui/material/TextField';
import DatePicker from 'components/FormBuilder/DatePicker';
import { IField } from 'components/FormBuilder';

export const loginFormStructure: IField[] = [
  {
    component: TextField,
    params: {
      name: 'email',
      label: 'Email',
      required: true,
      type: 'email',
    },
  },
  {
    component: TextField,
    params: {
      name: 'password',
      label: 'Senha',
      required: true,
      type: 'password',
    },
  },
];

export const signupFormStructure: IField[] = [
  ...loginFormStructure,
  {
    component: TextField,
    params: {
      name: 'name',
      label: 'Name',
      required: true,
      type: 'text',
    },
  },
  {
    component: DatePicker,
    params: {
      name: 'dateOfBirth',
      label: 'Date of Birth',
      required: true,
      inputFormat: 'dd/MM/yyyy',
      placeholder: 'Date of Birth',
      inputType: 'datepicker',
    },
  },
];
