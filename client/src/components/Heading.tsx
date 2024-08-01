import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { Avatar, Tooltip } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import homepic from '../assets/home.png';

const Heading = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <AppBar position="static" color="transparent" sx={{ boxShadow: 'none' }}>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => navigate('/')}
            >
              <img src={homepic} alt="" className="w-[70px]" />
            </IconButton>
          </Box>

          <Tooltip title="Open profile">
            <IconButton sx={{ p: 0 }}>
              <Avatar
                alt="Remy Sharp"
                src="https://mui.com/static/images/avatar/2.jpg"
              />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Heading;
