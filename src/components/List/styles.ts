import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    paddingLeft: '24px'
  },
  formControl: {
    minWidth: 120,
    marginRight: theme.spacing(3),
    marginBottom: theme.spacing(3)
  },
  listDetail: {
    height: '75vh',
    overflow: 'auto'
  }
}));

export default useStyles;
