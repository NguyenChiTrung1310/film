import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 224,
  },
  indicator: {
    backgroundColor: '#03a9f4'
  },
  tabs:{
    '& .MuiTab-textColorSecondary':{
      color: '#fff!important'
    }
  },
}));