import React from 'react';
import Alert from '.';
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';

interface INIAlert {
  message: string;
  open: boolean;
  onClose: () => void;
}

const NotImplementedAlert = ({ message, open, onClose }: INIAlert) => {
  const icon = <EngineeringOutlinedIcon color="warning" sx={{ fontSize: 56 }} />;
  return (
    <Alert title="Not Implemented" icon={icon} content={message} open={open} onClose={onClose} />
  );
};

export default NotImplementedAlert;
