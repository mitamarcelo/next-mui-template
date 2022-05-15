import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';

interface IAlertProps {
  title?: string | React.ReactNode;
  content?: string | React.ReactNode;
  icon?: React.ReactNode;
  buttons?: React.ReactNode;
  open: boolean;
  onClose: () => void;
}

const Alert = ({ title, content, icon, buttons, open, onClose }: IAlertProps) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle sx={{ display: 'flex', justifyContent: 'center' }}>{icon}</DialogTitle>
      <DialogTitle id="alert-dialog-title" sx={{ display: 'flex', justifyContent: 'center' }}>
        {title}
      </DialogTitle>
      <DialogContent>
        {typeof content === 'string' ? (
          <DialogContentText id="alert-dialog-description">{content}</DialogContentText>
        ) : (
          content
        )}
      </DialogContent>
      <DialogActions>{!!buttons ? buttons : <Button onClick={onClose}>OK!</Button>}</DialogActions>
    </Dialog>
  );
};

export default Alert;
