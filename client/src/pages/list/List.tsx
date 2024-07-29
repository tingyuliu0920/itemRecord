import { Box, Grid, Pagination, Typography } from '@mui/material';
import ListItem from './components/ListItem';

const List = () => {
  const data = [
    {
      id: 1,
      name: 'phone',
      picture: 'https://mui.com/static/images/cards/contemplative-reptile.jpg',
    },
    {
      id: 2,
      name: 'phone',
      picture: 'https://mui.com/static/images/cards/contemplative-reptile.jpg',
    },
    {
      id: 3,
      name: 'phone',
      picture: 'https://mui.com/static/images/cards/contemplative-reptile.jpg',
    },
    {
      id: 4,
      name: 'phone',
      picture: 'https://mui.com/static/images/cards/contemplative-reptile.jpg',
      age: '5 years old',
    },
    {
      id: 5,
      name: 'phone',
      picture: 'https://mui.com/static/images/cards/contemplative-reptile.jpg',
      age: '1 year old',
    },
    {
      id: 6,
      name: 'phone',
      picture: 'https://mui.com/static/images/cards/contemplative-reptile.jpg',
      age: '6 years old',
    },
    {
      id: 7,
      name: 'phone',
      picture: 'https://mui.com/static/images/cards/contemplative-reptile.jpg',
      age: '6 years old',
    },
    {
      id: 8,
      name: 'phone',
      picture: 'https://mui.com/static/images/cards/contemplative-reptile.jpg',
    },
    {
      id: 9,
      name: 'phone',
      picture: 'https://mui.com/static/images/cards/contemplative-reptile.jpg',
    },
    {
      id: 10,
      name: 'phone',
      picture: 'https://mui.com/static/images/cards/contemplative-reptile.jpg',
    },
  ];
  return (
    <div>
      <Typography fontSize={36} marginBottom={3}>
        Electricities
      </Typography>
      <Grid container spacing={2}>
        {data.map((item) => (
          <Grid item xs={6} sm={4} md={3}>
            <ListItem key={item.id} data={item} />
          </Grid>
        ))}
      </Grid>
      <Box display="flex" justifyContent="center" marginTop={8}>
        <Pagination count={10} />
      </Box>
    </div>
  );
};

export default List;
