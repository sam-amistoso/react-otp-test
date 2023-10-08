import React from 'react';
import { styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import MuiButton, { ButtonProps as MuiButtonProps } from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

// import { ButtonStyles } from './Button.styles';

interface ButtonProps extends MuiButtonProps {
  alternate?: boolean;
  neutral?: boolean;
  progress?: boolean;
}

function ProgressIcon() {
  return <CircularProgress color='inherit' size={22} sx={{ mr: 0.5 }} />;
}

const SecondaryButton = styled(MuiButton)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(grey[500]),
  backgroundColor: grey[300],
  '&:hover': {
    backgroundColor: grey[400],
  },
}));

const Button: React.FC<ButtonProps> = ({
  alternate,
  neutral,
  progress = false,
  ...props
}: ButtonProps) => {
  if (neutral) {
    return (
      <SecondaryButton
        variant={alternate ? 'outlined' : 'contained'}
        startIcon={!progress && props.startIcon}
        endIcon={progress ? <ProgressIcon /> : props.endIcon}
        disableElevation
        {...props}>
        {props.children}
      </SecondaryButton>
    );
  } else {
    return (
      <MuiButton
        variant={alternate ? 'outlined' : 'contained'}
        startIcon={!progress && props.startIcon}
        endIcon={progress ? <ProgressIcon /> : props.endIcon}
        disableElevation
        {...props}>
        {props.children}
      </MuiButton>
    );
  }
};

export default Button;
