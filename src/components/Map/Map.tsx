import GoogleMapReact from 'google-map-react';

import useStyles from './styles';

type PropType = {
  coordinates: {
    lat: number;
    lng: number;
  };
  setCoordinates: React.Dispatch<
    React.SetStateAction<{
      lng: number;
      lat: number;
    }>
  >;
};

const Map = ({ coordinates, setCoordinates }: PropType) => {
  const classes = useStyles();

  const mapOptions = {
    panControl: false,
    mapTypeControl: false
  };

  return (
    <div className={classes.root}>
      {coordinates.lat && (
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API as string }}
          defaultZoom={11}
          margin={[50, 50, 50, 50]}
          center={coordinates}
          options={mapOptions}
          onClick={() => {}}
          onChange={(e) => {
            console.log(coordinates);
            setCoordinates({ ...e.center });
          }}
          onChildClick={() => {}}
        ></GoogleMapReact>
      )}
    </div>
  );
};

export default Map;
