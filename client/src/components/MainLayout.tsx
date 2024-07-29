import { ReactNode } from 'react';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';
import Heading from './Heading';

const MainLayout = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  return (
    <div className="flex  flex-col items-center w-full min-h-screen bg-orange-200">
      <div className="w-[1200px]">
        <Heading />
        <div className="flex px-10">
          <div className="flex-1">{children}</div>
          <div className="w-[200px] text-center px-7">
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
      </div>
    </div>
  );
};

export default MainLayout;
