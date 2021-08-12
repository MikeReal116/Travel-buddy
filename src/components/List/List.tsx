import { useState } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';

import useStyles from './styles';

const List = () => {
  const [category, setCategory] = useState('');
  const [rating, setRating] = useState<number | string>('');
  const classes = useStyles();

  const handleCatChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setCategory(event.target.value as string);
  };
  const handleRatingChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setRating(event.target.value as number);
  };

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
    </div>
  );
};

export default List;
