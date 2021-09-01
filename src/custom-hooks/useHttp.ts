import { useEffect, useState } from 'react';
import axios from 'axios';

interface Coordinates {
  lat: number;
  lng: number;
}
interface ReturnData<TData> {
  data: TData | null;
  error: string;
  loading: boolean;
}
const useHttp = <T>(url: string, coordinates: Coordinates): ReturnData<T> => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState(' ');
  const [loading, setLoading] = useState(false);
  const { lat, lng } = coordinates;
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
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
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, [url, lng, lat]);

  return { data, error, loading };
};

export default useHttp;
