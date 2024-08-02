import Category from './components/Category';
import { Grid } from '@mui/material';
import { categoryList } from '../../data';

const Home = () => {
  return (
    <div className="flex">
      {categoryList.length > 0 && (
        <div className="flex-1">
          <Grid container spacing={2} columns={24}>
            {categoryList.map((category) => (
              <Grid item xs={12} sm={8} md={6} lg={6} key={category.id}>
                <Category data={category} />
              </Grid>
            ))}
          </Grid>
        </div>
      )}
    </div>
  );
};

export default Home;
