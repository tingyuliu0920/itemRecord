import {
  Avatar,
  Box,
  Button,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import FormWrapper from '../item/add/components/FormWrapper';
import { Edit } from '@mui/icons-material';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const Profile = () => {
  const handleSubmit = () => {};
  return (
    <div className="sm:max-w-[700px]">
      <Typography
        variant="h4"
        color="text.primary"
        gutterBottom
        className="flex-1"
      >
        Profile
      </Typography>
      <FormWrapper
        component="form"
        onSubmit={handleSubmit}
        className="flex flex-col"
      >
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={4}>
            <label htmlFor="picture" className="font-bold">
              Profile picture
            </label>
          </Grid>
          <Grid item xs={8}>
            <div className="relative inline-block cursor-pointer mb-12">
              <Avatar
                alt="User Avatar"
                src="https://via.placeholder.com/100"
                sx={{ width: 100, height: 100 }}
              />

              <div className="absolute z-2 bottom-0 right-0 bg-white rounded-full p-1 ">
                <Edit fontSize="small" />
              </div>
              <input
                type="file"
                className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
              />
            </div>
          </Grid>
        </Grid>

        <Grid container spacing={2} alignItems="center">
          <Grid item xs={4}>
            <label htmlFor="Name" className="font-bold">
              Name
            </label>
          </Grid>
          <Grid item xs={8}>
            <TextField required fullWidth id="name" defaultValue="" />
          </Grid>
        </Grid>
        <Grid container spacing={2} alignItems="center" marginTop={2}>
          <Grid item xs={4} className="font-bold">
            <label htmlFor="Password">Password</label>
          </Grid>
          <Grid item xs={8}>
            <TextField
              required
              type="password"
              fullWidth
              id="password"
              defaultValue=""
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} alignItems="center" marginTop={2}>
          <Grid item xs={4}>
            <label htmlFor="Email" className="font-bold">
              Email
            </label>
          </Grid>
          <Grid item xs={8}>
            <TextField type="email" fullWidth id="email" defaultValue="" />
          </Grid>
        </Grid>
        <Grid container spacing={2} alignItems="center" marginTop={2}>
          <Grid item xs={4}></Grid>
          <Grid item xs={8}>
            <Box
              width="100%"
              display="flex"
              justifyContent="center"
              marginTop={2}
            >
              <Button variant="contained" className="mr-4">
                Update
              </Button>
            </Box>
          </Grid>
        </Grid>
      </FormWrapper>
    </div>
  );
};

export default Profile;
