import LocationOnIcon from '@material-ui/icons/LocationOn';

type PropType = {
  lng: string;
  lat: string;
};

const Marker = ({ lat, lng }: PropType) => {
  return (
    <div>
      <LocationOnIcon />
    </div>
  );
};

export default Marker;
