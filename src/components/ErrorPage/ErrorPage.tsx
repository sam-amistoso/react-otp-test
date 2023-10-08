import React from 'react';
import Box from '@mui/material/Box';
import Typo from '@mui/material/Typography';
import ErrorIcon from '@mui/icons-material/Error';
import Button from '../Button';
import useStyles from './ErrorPage.styles';

interface IErrorPage {
  message: string;
  onTrigger: () => void;
}
const ErrorPage: React.FC<IErrorPage> = (props) => {
  const classes = useStyles();
  return (
    <Box sx={classes.container}>
      <Box sx={classes.infoWrapper}>
        <ErrorIcon sx={{ width: '32px', height: '32px', color: '#F44336' }} />
        <Typo fontSize={16} fontWeight={500} sx={{ color: '#474747' }}>
          {props.message}
        </Typo>
      </Box>
      <Button fullWidth neutral onClick={() => props.onTrigger()}>
        TRY AGAIN
      </Button>
    </Box>
  );
};

export default ErrorPage;
