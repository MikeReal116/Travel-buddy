import { useState, useEffect } from 'react';
import { CssBaseline } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

import Navbar from '../components/Navbar/Navbar';
import Map from '../components/Map/Map';
import List from '../components/List/List';
import useHttp from '../custom-hooks/useHttp';

export type Coords = {
  lng: number;
  lat: number;
};

const Home = () => {
  const [coordinates, setCoordinates] = useState<Coords>({
    lat: 0,
    lng: 0
  });
  const { data, error } = useHttp(
    'https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng',
    coordinates
  );

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { longitude, latitude } }) => {
        setCoordinates({ lng: longitude, lat: latitude });
      }
    );
  }, []);

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
          <Map coordinates={coordinates} setCoordinates={setCoordinates} />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
