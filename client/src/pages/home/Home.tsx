import Category from './components/Category';
import { Grid } from '@mui/material';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';
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
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="flex">
      {categoryList.length > 0 && (
        <div className="flex-1">
          <Grid container spacing={2} columns={12}>
            {categoryList.map((category) => (
              <Grid item xs={4}>
                <Category key={category.id} data={category} />
              </Grid>
            ))}
          </Grid>
        </div>
      )}
      <div className="w-[200px] text-center px-7">
        {categoryList.length == 0 && <p>Let's add something right now! 😃</p>}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="large"
          className="bg-orange-600 w-[60px] h-[60px]"
          sx={{ '&.MuiButton-root': { borderRadius: '50%' } }}
          onClick={() => navigate('/add')}
        >
          <AddIcon fontSize="large" />
        </Button>
      </div>
    </div>
  );
};

export default Home;
