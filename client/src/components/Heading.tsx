import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { Avatar, Tooltip } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import homepic from '../assets/home.png';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const Heading = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Box>
      <AppBar
        position="static"
        color="transparent"
        sx={{ boxShadow: 'none', paddingY: '10px' }}
      >
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
          {location.pathname !== '/add' && (
            <Tooltip title="Add new item" placement="bottom">
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                className="bg-orange-600 w-[54px] h-[54px] fixed bottom-10 right-10 z-10 sm:static sm:mr-4"
                sx={{
                  '&.MuiButton-root': {
                    borderRadius: '50%',
                    minWidth: 'auto',
                  },
                }}
                onClick={() => navigate('/add')}
              >
                <AddIcon fontSize="medium" />
              </Button>
            </Tooltip>
          )}
          <Avatar
            alt="Tingyu"
            src="https://tingyuliu.dev/assets/me-oGumKleA.png"
            className="w-[50px] h-[50px] cursor-pointer"
            onClick={() => navigate('/profile')}
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Heading;
