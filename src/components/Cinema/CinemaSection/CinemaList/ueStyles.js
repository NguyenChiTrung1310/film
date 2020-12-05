import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    // maxWidth: '36ch',
    cursor: 'pointer',
    backgroundColor: 'red'
  },
  inline: {
    display: 'flex',
    flexDirection: 'column',
    width: '30%',
    position: 'relative',
    marginBottom: '40px',
    borderRight: '1px solid #ccc',
    padding: '10px 20px',
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
      backgroundColor: '#03a9f4'
    }
  },
  nameTheater: {
    color: '#fff',
    fontSize: '20px'  
  },
  address: {
    color: '#ccc'
  },
  divider: {
    backgroundColor: '#fff',
    position: 'absolute',
    width: '100%',
    height: '1px',
    bottom: 0,
    left: 0
  }
}));