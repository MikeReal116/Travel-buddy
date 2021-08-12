import { useEffect, useState } from 'react';
import axios from 'axios';

const GetData = <T>(
  url: string,
  coordinates: { lat: number; lng: number }
): { data: T[]; error: string } => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState(' ');
  const { lat, lng } = coordinates;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(url, {
          params: {
            longitude: lng,
            latitude: lat
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
  }, [url, lng, lat]);

  return { data, error };
};

export default GetData;
