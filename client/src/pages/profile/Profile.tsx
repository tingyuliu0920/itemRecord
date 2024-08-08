import {
  Avatar,
  Box,
  Button,
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import FormWrapper from '../item/add/components/FormWrapper';
import { Edit, Visibility, VisibilityOff } from '@mui/icons-material';
import { useState } from 'react';
import { validateEmail } from '../../utils/validate';

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

interface ProfileFormData {
  avatar: File | null;
  userName: string;
  email: string;
  password: string;
}
const Profile = () => {
  const [formData, setFormData] = useState<ProfileFormData>({
    avatar: null,
    userName: 'Tingyu',
    email: 'tingyuliu.dev@gmail.com',
    password: '123456',
  });
  const [errors, setErrors] = useState<
    Partial<Record<keyof ProfileFormData, string>>
  >({});
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prevData) => ({
        ...prevData,
        avatar: e.target.files[0],
      }));
    }
  };
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };

  const validate = () => {
    if (!formData.userName.trim()) {
      setErrors({ userName: 'Username is required.' });
      return false;
    }

    if (!formData.password.trim()) {
      setErrors({ password: 'Password is required.' });
      return false;
    } else if (formData.password.length < 6) {
      setErrors({
        password: 'The password you provided must have at least 6 characters.',
      });
      return false;
    }
    setErrors({});
    return true;
  };
  const handleSubmit = (e: React.FormEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (validate()) {
      // send update request
    }
  };
  return (
    <div className="sm:max-w-[700px]">
      <Typography variant="h4" color="text.primary">
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
            <div className="relative inline-block mb-12">
              <label htmlFor="avatarUpload" className="cursor-pointer">
                <Avatar
                  alt="User Avatar"
                  src={
                    formData.avatar
                      ? URL.createObjectURL(formData.avatar)
                      : undefined
                  }
                  sx={{ width: 100, height: 100 }}
                />
                <Input
                  id="avatarUpload"
                  type="file"
                  inputProps={{ accept: 'image/*' }}
                  sx={{ display: 'none' }}
                  onChange={handleAvatarChange}
                />
                <div className="absolute z-2 bottom-0 right-0 bg-white rounded-full p-1 ">
                  <Edit fontSize="small" />
                </div>
              </label>
              {errors.avatar && (
                <FormHelperText error>{errors.avatar}</FormHelperText>
              )}
            </div>
          </Grid>
        </Grid>

        <Grid container spacing={2} alignItems="center">
          <Grid item xs={4}>
            <label htmlFor="username" className="font-bold">
              Username
            </label>
          </Grid>
          <Grid item xs={8}>
            <TextField
              fullWidth
              id="username"
              name="userName"
              value={formData.userName}
              onChange={handleInputChange}
              error={Boolean(errors.userName)}
              helperText={errors.userName}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} alignItems="center" marginTop={2}>
          <Grid item xs={4} className="font-bold">
            <label htmlFor="Password">Password</label>
          </Grid>
          <Grid item xs={8}>
            <FormControl sx={{ width: '100%' }} variant="outlined">
              <TextField
                name="password"
                id="password"
                variant="outlined"
                type={showPassword ? 'text' : 'password'}
                value={formData.password}
                onChange={handleInputChange}
                error={Boolean(errors.password)}
                helperText={errors.password}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </FormControl>
          </Grid>
        </Grid>
        <Grid container spacing={2} alignItems="center" marginTop={2}>
          <Grid item xs={4}>
            <label htmlFor="Email" className="font-bold">
              Email
            </label>
          </Grid>
          <Grid item xs={8}>
            <TextField
              type="email"
              name="email"
              fullWidth
              id="email"
              disabled
              value={formData.email}
            />
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
              <Button variant="contained" type="submit" className="mr-4">
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
