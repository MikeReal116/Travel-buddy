import { CssBaseline } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

import Navbar from '../components/Navbar/Navbar';
import Map from '../components/Map/Map';
import List from '../components/List/List';

const Home = () => {
  return (
    <>
      <CssBaseline />
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Navbar />
        </Grid>
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
