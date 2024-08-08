import { useState, ChangeEvent, FormEvent } from 'react';
import {
  Button,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  IconButton,
  FormHelperText,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { Visibility, VisibilityOff } from '@mui/icons-material';

import PageLayout from './components/PageLayout';
import FormContainer from './components/FormContainer';
import { validateEmail } from '../../utils/validate';

interface LoginFormData {
  email: string;
  password: string;
}
const Login = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState<Partial<LoginFormData>>({});

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };

  const validate = (): boolean => {
    const emailError = validateEmail(formData.email);
    if (!formData.email.trim()) {
      setErrors({ email: 'Email is required.' });
      return false;
    } else if (emailError) {
      setErrors({ email: emailError });
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

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      // send login request
    }
  };
  return (
    <PageLayout>
      <FormContainer>
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <FormControl sx={{ width: '100%' }} variant="standard">
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input
              fullWidth
              name="email"
              id="email"
              type="text"
              sx={{ margin: '8px 0' }}
              autoFocus
              value={formData.email}
              onChange={handleInputChange}
              error={Boolean(errors.email)}
            />
            {errors.email && (
              <FormHelperText error>{errors.email}</FormHelperText>
            )}
          </FormControl>
          <FormControl sx={{ width: '100%' }} variant="standard">
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              name="password"
              id="password"
              type={showPassword ? 'text' : 'password'}
              value={formData.password}
              onChange={handleInputChange}
              error={Boolean(errors.password)}
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
            {errors.password && (
              <FormHelperText error>{errors.password}</FormHelperText>
            )}
          </FormControl>
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
