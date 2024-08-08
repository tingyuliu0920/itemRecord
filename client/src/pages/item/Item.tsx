import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { categoryList } from '../../data';
import { calculateAge } from '../../utils/time';
import {
  Button,
  ButtonBase,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Paper,
  Tooltip,
  Typography,
} from '@mui/material';
import { Edit, Update, Delete } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { orange } from '@mui/material/colors';
import { useState } from 'react';
type RouteParams = Record<string, string | undefined>;

interface Item {
  name: string;
  category: string;
  picture: string;
  source: string;
  age: string;
  comment: string;
}

const Item = () => {
  const { id } = useParams<RouteParams>();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const categoryId = query.get('cId');
  const orangeColor = orange[500];
  const darkerOrange = orange[700];
  const [open, setOpen] = useState(false);
  // const navigate = useNavigate();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const item = categoryList
    .find((category) => category.id === categoryId)
    ?.children.find((item) => item.id === id);
  return (
    <div className="flex justify-center">
      {item && (
        <div className="">
          <div className="flex justify-between items-start mb-3 ">
            <Typography
              variant="h4"
              color="text.primary"
              gutterBottom
              className="flex-1"
            >
              {item.name}
            </Typography>
            <div className="flex gap-1 sm:gap-2">
              <IconButton
                sx={{
                  backgroundColor: orangeColor,
                  color: '#fff',
                  p: 1,
                  '&:hover': { backgroundColor: darkerOrange },
                }}
                // onClick={() => navigate('/item/${item.id}/edit')}
              >
                <Tooltip title="Edit">
                  <Edit />
                </Tooltip>
              </IconButton>
              <IconButton
                sx={{
                  backgroundColor: orangeColor,
                  color: '#fff',
                  p: 1,
                  '&:hover': { backgroundColor: darkerOrange },
                }}
              >
                <Tooltip title="Update">
                  <Update />
                </Tooltip>
              </IconButton>
              <IconButton
                sx={{
                  backgroundColor: orangeColor,
                  color: '#fff',
                  p: 1,
                  '&:hover': { backgroundColor: darkerOrange },
                }}
                onClick={handleClickOpen}
              >
                <Tooltip title="Delete">
                  <Delete />
                </Tooltip>
              </IconButton>
            </div>
          </div>
          <Paper className="w-full p-5 sm:max-w-[800px] ">
            <div className="flex  flex-col items-center mb-4">
              <img src={item.picture} alt="" className="w-2/3 sm:w-1/3" />
              <p className="text-lg leading-7"> {calculateAge(item.getDate)}</p>
            </div>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={4} sm={2}>
                <div className="font-bold ">Category :</div>
              </Grid>
              <Grid item xs={8} sm={10}>
                Toys
              </Grid>
              <Grid item xs={4} sm={2}>
                <div className="font-bold">Source :</div>
              </Grid>
              <Grid item xs={8} sm={10}>
                {item.source}
              </Grid>
              <Grid item xs={4} sm={2}>
                <div className="font-bold">Comment :</div>
              </Grid>
              <Grid item xs={12} sm={8}>
                {item.comment}
              </Grid>
            </Grid>
          </Paper>
          {/* dialog-delete */}
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">Move to Trash</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Are you sure you want to delete{' '}
                <span style={{ fontWeight: 'bold' }}> {item.name}</span>?
              </DialogContentText>
            </DialogContent>
            <DialogActions sx={{ justifyContent: 'center' }}>
              <Button onClick={handleClose} variant="contained">
                Cancel
              </Button>
              <Button onClick={handleClose} variant="contained">
                Confirm
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      )}
    </div>
  );
};

export default Item;
