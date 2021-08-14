import GoogleMapReact from 'google-map-react';

import useStyles from './styles';
import { PlaceType } from '../../custom-hooks/useHttp';
import Marker from '../Marker';

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
  places: PlaceType[];
};

const Map = ({ coordinates, setCoordinates, places }: PropType) => {
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
            setCoordinates({ ...e.center });
          }}
          onChildClick={(child) => {
            console.log(child);
          }}
        >
          {places.length !== 0 &&
            places.map((place, i) => (
              <Marker key={i} lng={place.longitude} lat={place.latitude} />
            ))}
        </GoogleMapReact>
      )}
    </div>
  );
};

export default Map;
