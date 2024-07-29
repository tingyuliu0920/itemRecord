import Category from './components/Category';
import { Grid } from '@mui/material';
import HomeLayout from '../../components/MainLayout';
const categoryList = [
  {
    id: 1,
    name: 'Electoric Devices',
    picture: 'https://mui.com/static/images/cards/contemplative-reptile.jpg',
  },
  {
    id: 2,
    name: 'Electoric Devices',
    picture: 'https://mui.com/static/images/cards/contemplative-reptile.jpg',
  },
  {
    id: 3,
    name: 'Electoric Devices',
    picture: 'https://mui.com/static/images/cards/contemplative-reptile.jpg',
  },
  {
    id: 4,
    name: 'Electoric Devices',
    picture: 'https://mui.com/static/images/cards/contemplative-reptile.jpg',
  },
  {
    id: 5,
    name: 'Electoric Devices',
    picture: 'https://mui.com/static/images/cards/contemplative-reptile.jpg',
  },
  {
    id: 6,
    name: 'Electoric Devices',
    picture: 'https://mui.com/static/images/cards/contemplative-reptile.jpg',
  },
];
const home = () => {
  return (
    <Grid container spacing={2} columns={12}>
      {categoryList.map((category) => (
        <Grid item xs={4}>
          <Category key={category.id} data={category} />
        </Grid>
      ))}
    </Grid>
  );
};

export default home;
