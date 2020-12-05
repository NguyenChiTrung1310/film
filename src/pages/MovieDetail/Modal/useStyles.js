import {makeStyles} from '@material-ui/core/styles'

export const useStyles= makeStyles((theme)=>({
  modal:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
  },
  paper:{
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  trailer:{
    width: '800px'
  },
  
  trailerbtn:{
    margin: theme.spacing(3, 0, 2),
    padding: theme.spacing(1),
    backgroundColor: '#03a9f4',
    textTransform: 'none',
    width:'200px',
  },
}));