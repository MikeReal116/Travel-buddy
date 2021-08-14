import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    maxWidth: 400,
    marginBottom: theme.spacing(5)
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
    marginBottom: '5px'
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'space-between'
  }
}));

export default useStyles;
