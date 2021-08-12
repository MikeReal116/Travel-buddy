import GoogleMapReact from 'google-map-react';

import useStyles from './styles';
import { Coords } from '../../pages/Home';

type PropType = {
  coordinates: {
    lat: number;
    lng: number;
  };
  setBounds: React.Dispatch<
    React.SetStateAction<{
      ne: Coords;
      sw: Coords;
    }>
  >;
  setCoordinates: React.Dispatch<
    React.SetStateAction<{
      lng: number;
      lat: number;
    }>
  >;
};

const Map = ({ coordinates, setBounds, setCoordinates }: PropType) => {
  const classes = useStyles();

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
        onChange={(e) => {
          setCoordinates({ ...e.center });
          setBounds({ ne: { ...e.bounds.ne }, sw: { ...e.bounds.sw } });
        }}
        onChildClick={() => {}}
      ></GoogleMapReact>
    </div>
  );
};

export default Map;
