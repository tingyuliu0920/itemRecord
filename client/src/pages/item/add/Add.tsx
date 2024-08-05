import {
  Box,
  Button,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';

import { categoryList } from '../../../data';
import FormWrapper from './components/FormWrapper';

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

const Add = () => {
  const handleSubmit = () => {};
  return (
    <div className="sm:max-w-[700px]">
      <Typography variant="h4" color="text.primary" gutterBottom>
        Add Item
      </Typography>
      <FormWrapper
        component="form"
        onSubmit={handleSubmit}
        className="flex flex-col"
      >
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={4}>
            <label htmlFor="name">Item Name</label>
          </Grid>
          <Grid item xs={8}>
            <TextField required fullWidth id="name" defaultValue="" />
          </Grid>
        </Grid>
        <Grid container spacing={2} alignItems="center" marginTop={2}>
          <Grid item xs={4}>
            <label htmlFor="category">Category</label>
          </Grid>
          <Grid item xs={8}>
            <TextField
              required
              select
              fullWidth
              id="outlined-select-currency"
              defaultValue=""
            >
              {categoryList.map((option) => (
                <MenuItem key={option.name} value={option.id}>
                  {option.name}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>
        <Grid container spacing={2} alignItems="center" marginTop={2}>
          <Grid item xs={4}>
            <label htmlFor="picture">Picture</label>
          </Grid>
          <Grid item xs={8}>
            <Button
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              startIcon={<CloudUploadIcon />}
            >
              Upload
              <VisuallyHiddenInput type="file" />
            </Button>
            {/* <div className="w-4/5">
              <img
                src="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                alt=""
              />
            </div> */}
          </Grid>
        </Grid>
        <Grid container spacing={2} alignItems="center" marginTop={2}>
          <Grid item xs={4}>
            <label htmlFor="source">Source</label>
          </Grid>
          <Grid item xs={8}>
            <TextField fullWidth id="source" defaultValue="" />
          </Grid>
        </Grid>
        <Grid container spacing={2} alignItems="center" marginTop={2}>
          <Grid item xs={4}>
            <label htmlFor="date">Date</label>
          </Grid>
          <Grid item xs={8}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker className="w-full" />
            </LocalizationProvider>
          </Grid>
        </Grid>

        <Grid container spacing={2} alignItems="start" marginTop={2}>
          <Grid item xs={4}>
            <label htmlFor="comment">Comment</label>
          </Grid>
          <Grid item xs={8}>
            <TextField
              fullWidth
              id="comment"
              multiline
              rows={6}
              defaultValue=""
            />
          </Grid>
        </Grid>
        <Box width="100%" display="flex" justifyContent="end" marginTop={2}>
          <Button variant="contained" className="mr-4">
            Cancel
          </Button>
          <Button variant="contained" className="mr-4">
            Submit
          </Button>
        </Box>
      </FormWrapper>
    </div>
  );
};

export default Add;
