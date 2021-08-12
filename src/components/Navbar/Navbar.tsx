import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

import useStyles from './styles';

const Navbar = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <AppBar position='fixed'>
          <Toolbar>
            <Typography variant='h6' noWrap className={classes.title}>
              Travel Buddy
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder='Search...'
                classes={{ root: classes.inputRoot, input: classes.inputInput }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
          </Toolbar>
        </AppBar>
      </div>
      <div className={classes.offset} />
    </>
  );
};

export default Navbar;
