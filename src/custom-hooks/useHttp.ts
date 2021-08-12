import { useEffect, useState } from 'react';
import axios from 'axios';
import { Coords } from '../pages/Home';

type BoundaryType = {
  ne: Coords;
  sw: Coords;
};
const GetData = <T>(
  url: string,
  bounds: BoundaryType
): { data: T[]; error: string } => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState(' ');
  const { ne, sw } = bounds;
  const { lng: tr_longitude, lat: tr_latitude } = ne;
  const { lng: bl_longitude, lat: bl_latitude } = sw;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(url, {
          params: {
            bl_latitude,
            tr_latitude,
            bl_longitude,
            tr_longitude
          },
          headers: {
            'x-rapidapi-key': process.env.REACT_APP_RAPID,
            'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
          }
        });
        setData(data.data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, [url, bl_longitude, bl_latitude, tr_longitude, tr_latitude]);

  return { data, error };
};

export default GetData;
