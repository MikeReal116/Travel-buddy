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
