import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import { Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Rating } from '@material-ui/lab';

import useStyles from './styles';
import { Img } from '../../custom-hooks/useHttp';

type PropType = {
  image: Img | undefined;
  rating: string;
  ranking: string;
  name: string;
  address: string;
  num_reviews: string;
  web_url: string;
  website: string;
  phone: string;
  is_closed: boolean;
};

const Detail = ({
  image,
  rating,
  ranking,
  name,
  address,
  num_reviews,
  web_url,
  website,
  phone,
  is_closed
}: PropType) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={
          image?.medium.url ||
          'https://i.ibb.co/Tr93h1r/platter-2009590-640.jpg'
        }
        title={name}
      />
      <CardContent>
        <Typography variant='h6' paragraph>
          {name}
        </Typography>
        <Box display='flex' justifyContent='space-between' mb='5px'>
          <LocationOnIcon />
          <Typography variant='body2'>{address}</Typography>
        </Box>
        <Box display='flex' justifyContent='space-between' mb='5px'>
          <Rating name='read-only' value={+rating} readOnly />
          <Typography variant='body2'>{`out of ${num_reviews} reviews`}</Typography>
        </Box>
        <Box display='flex' justifyContent='space-between' mb='5px'>
          <Typography variant='body2'>Ranking:</Typography>
          <Typography variant='body2'>{ranking}</Typography>
        </Box>
        <Box display='flex' justifyContent='space-between' mb='5px'>
          <Typography variant='body2'>Open:</Typography>
          <Typography variant='body2'>{is_closed ? 'No' : 'Yes'}</Typography>
        </Box>
        <Box display='flex' justifyContent='space-between' mb='5px'>
          <Typography variant='body2'>Phone:</Typography>
          <Typography variant='body2'>{phone}</Typography>
        </Box>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size='small' onClick={() => window.open(web_url, '_blank')}>
          View Travel advisor
        </Button>
        <Button size='small' onClick={() => window.open(website, '_blank')}>
          View Webpage
        </Button>
      </CardActions>
    </Card>
  );
};

export default Detail;
