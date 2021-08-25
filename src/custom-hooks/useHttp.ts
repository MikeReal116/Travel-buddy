import { useEffect, useState } from 'react';
import axios from 'axios';

export type Img = {
  large: {
    url: string;
  };
  medium: {
    url: string;
  };
  original: {
    url: string;
  };
  small: {
    url: string;
  };
};

export type PlaceType = {
  name: string;
  address: string;
  photo?: {
    images: Img;
  };
  rating: string;
  num_reviews: string;
  ranking: string;
  web_url: string;
  website: string;
  phone: string;
  is_closed: boolean;
  latitude: string;
  longitude: string;
};

const useHttp = (
  url: string,
  coordinates: { lat: number; lng: number }
): { data: PlaceType[]; error: string; loading: boolean } => {
  const [data, setData] = useState<PlaceType[]>([]);
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
