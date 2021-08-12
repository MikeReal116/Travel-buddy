import GoogleMapReact from 'google-map-react';

import useStyles from './styles';

const Map = () => {
  const classes = useStyles();
  const coordinates = {
    lat: 0,
    lng: 0
  };

  const mapOptions = {
    panControl: false,
    mapTypeControl: false
  };

  return (
    <div className={classes.root}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API as string }}
        defaultCenter={coordinates}
        defaultZoom={11}
        margin={[50, 50, 50, 50]}
        center={coordinates}
        options={mapOptions}
        onClick={() => {}}
        onChange={() => {}}
        onChildClick={() => {}}
      ></GoogleMapReact>
    </div>
  );
};

export default Map;
