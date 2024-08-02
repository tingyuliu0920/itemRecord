import { useState, ChangeEvent, FormEvent } from 'react';
import {
  TextField,
  Button,
  Typography,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  IconButton,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { Visibility, VisibilityOff } from '@mui/icons-material';

import PageLayout from './components/PageLayout';
import FormContainer from './components/FormContainer';

const Login = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    // Dummy validation logic for demonstration purposes
    if (username === 'user' && password === 'pass') {
      alert('Login successful');
    } else {
      setError('Invalid username or password');
    }
  };
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };
  return (
    <PageLayout>
      <FormContainer>
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <TextField
            fullWidth
            id="username"
            label="Username"
            type="text"
            // autoComplete="current-password"
            variant="standard"
            sx={{ margin: '8px 0' }}
          />
          <FormControl sx={{ width: '100%' }} variant="standard">
            <InputLabel htmlFor="standard-adornment-password">
              Password
            </InputLabel>
            <Input
              id="standard-adornment-password"
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          {error && (
            <Typography color="error" variant="body2">
              {error}
            </Typography>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            size="large"
            sx={{ marginTop: '2em', borderRadius: '9999px', paddingY: '8px' }}
          >
            Login
          </Button>
          <p className="text-center mt-8 text-gray-700">
            Don't have an account?
            <Link to="/register">
              <span className=" text-gray-900 hover:underline"> Sign up</span>
            </Link>
          </p>
        </form>
      </FormContainer>
    </PageLayout>
  );
};

export default Login;
