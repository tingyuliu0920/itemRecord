import { Box, Grid } from '@mui/material';

const Item = () => {
  return (
    <div>
      <Box>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={3}>
            <label htmlFor="name">Item Name</label>
          </Grid>
          <Grid item xs={9}>
            <p>iphone8</p>
          </Grid>
        </Grid>
        <Grid container spacing={2} alignItems="center" marginTop={2}>
          <Grid item xs={3}>
            <label htmlFor="category">Category</label>
          </Grid>
          <Grid item xs={9}>
            <p>electrocities</p>
          </Grid>
        </Grid>
        <Grid container spacing={2} alignItems="center" marginTop={2}>
          <Grid item xs={3}>
            <label htmlFor="picture">Picture</label>
          </Grid>
          <Grid item xs={9}>
            <div className="w-2/3">
              <img
                src="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                alt=""
              />
            </div>
          </Grid>
        </Grid>
        <Grid container spacing={2} alignItems="center" marginTop={2}>
          <Grid item xs={3}>
            <label htmlFor="source">Source</label>
          </Grid>
          <Grid item xs={9}>
            <p>自己买的</p>
          </Grid>
        </Grid>
        <Grid container spacing={2} alignItems="center" marginTop={2}>
          <Grid item xs={3}>
            <label htmlFor="date">Age</label>
          </Grid>
          <Grid item xs={9}>
            5 years old
          </Grid>
        </Grid>

        <Grid container spacing={2} alignItems="start" marginTop={2}>
          <Grid item xs={3}>
            <label htmlFor="comment">Comment</label>
          </Grid>
          <Grid item xs={9}>
            真的很喜欢，攒了好久的钱才买到的。
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Item;
