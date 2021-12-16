import TextField from '@mui/material/TextField';
import { IField } from 'components/FormBuilder';

const formStructure: IField[] = [
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

export default formStructure;
