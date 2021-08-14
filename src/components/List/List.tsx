import { useState } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { CircularProgress } from '@material-ui/core';

import useStyles from './styles';
import { PlaceType } from '../../custom-hooks/useHttp';
import Detail from '../Detail/Detail';

type PropType = {
  loading: boolean;
  places: PlaceType[];
};

const List = ({ places, loading }: PropType) => {
  const [category, setCategory] = useState('');
  const [rating, setRating] = useState<number | string>('');
  const classes = useStyles();

  const handleCatChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setCategory(event.target.value as string);
  };
  const handleRatingChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setRating(event.target.value as number);
  };

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <div className={classes.root}>
      <Typography variant='button' display='block' gutterBottom>
        Explore your Travel Bestfriend
      </Typography>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor='select-category'>Type</InputLabel>
        <Select value={category} onChange={handleCatChange}>
          <MenuItem value='restaurants'>Restaurants</MenuItem>
          <MenuItem value='hotels'>Hotels</MenuItem>
          <MenuItem value='places'>Places</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor='rating'>Rating</InputLabel>
        <Select value={rating} onChange={handleRatingChange}>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
        </Select>
      </FormControl>
      <Box className={classes.listDetail}>
        {places.length !== 0 &&
          places.map((place, i) => (
            <Detail
              key={i}
              image={place.photo?.images}
              rating={place.rating}
              ranking={place.ranking}
              name={place.name}
              address={place.address}
              phone={place.phone}
              is_closed={place.is_closed}
              web_url={place.web_url}
              website={place.website}
              num_reviews={place.num_reviews}
            />
          ))}
      </Box>
    </div>
  );
};

export default List;
