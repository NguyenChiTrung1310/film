import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(25),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  registerLink: {
    color: '#ccc',
  },
  link: {
    color: '#03a9f4',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  field: {
    '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      borderColor: '#ccc',
    },
    '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      borderColor: '#fff',
    },
    '& .MuiOutlinedInput-input': {
      color: '#ccc',
    },
    '&:hover .MuiOutlinedInput-input': {
      color: '#fff',
    },
    '& .MuiInputLabel-outlined': {
      color: '#ccc',
    },
    '&:hover .MuiInputLabel-outlined': {
      color: '#fff',
    },
  },
}));
