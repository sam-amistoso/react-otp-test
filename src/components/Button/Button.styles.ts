import { Theme } from '@mui/material';

const ButtonStyles = (theme: Theme) => ({
  root: {},
  containedSecondary: {
    backgroundColor: '#F0F0F0',
    color: '#707070',
    '&:hover': {
      backgroundColor: theme.palette.grey[200],
    },
  },
});

export { ButtonStyles };
