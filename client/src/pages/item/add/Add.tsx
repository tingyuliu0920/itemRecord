import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Grid,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Dayjs } from 'dayjs';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';

import { categoryList } from '../../../data';
import FormWrapper from './components/FormWrapper';
import { useState } from 'react';

const VisuallyHiddenInput = styled('input')({
  display: 'none',
});

interface ItemFormData {
  name: string;
  categoryId: string;
  source: string;
  picture: File | null;
  date: Dayjs | null;
  comment: string;
}

const Add = () => {
  const [item, setItem] = useState<ItemFormData>({
    name: '',
    categoryId: '',
    source: '',
    date: null,
    picture: null,
    comment: '',
  });

  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const [errors, setErrors] = useState<
    Partial<Record<keyof ItemFormData, string>>
  >({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setItem({
      ...item,
      [e.target.name]: e.target.value,
    });
  };

  const handleCategoryChange = (e: SelectChangeEvent) => {
    setItem({
      ...item,
      categoryId: e.target.value as string,
    });
  };

  const handlePictureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const imageFile = e.target.files[0];
      setItem({
        ...item,
        picture: imageFile,
      });
      setImagePreview(URL.createObjectURL(imageFile));
    }
  };

  const handleDateChange = (date: Dayjs | null) => {
    setItem({
      ...item,
      date,
    });
  };

  const validate = (): boolean => {
    if (!item.name.trim()) {
      setErrors({ name: 'Item name is required.' });
      return false;
    }
    if (!item.categoryId) {
      setErrors({ categoryId: 'Category is required.' });
      return false;
    }
    if (!item.picture) {
      setErrors({ picture: 'Picture is required.' });
      return false;
    }
    if (!item.date) {
      setErrors({ date: 'Date is required.' });
      return false;
    }
    setErrors({});
    return true;
  };
  const handleSubmit = (e: React.FormEvent<HTMLDivElement>) => {
    e.preventDefault();

    if (validate()) {
      // send request
    }
  };
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
            <TextField
              fullWidth
              id="name"
              name="name"
              value={item.name}
              onChange={handleChange}
              error={Boolean(errors.name)}
              helperText={errors.name}
            />
          </Grid>
        </Grid>

        <Grid container spacing={2} alignItems="center" marginTop={2}>
          <Grid item xs={4}>
            <label htmlFor="category">Category</label>
          </Grid>
          <Grid item xs={8}>
            <FormControl fullWidth error={Boolean(errors.categoryId)}>
              <Select
                fullWidth
                id="category"
                value={item.categoryId}
                onChange={handleCategoryChange}
              >
                {categoryList.map((category) => (
                  <MenuItem key={category.id} value={category.id}>
                    {category.name}
                  </MenuItem>
                ))}
              </Select>
              {errors.categoryId && (
                <FormHelperText error>{errors.categoryId}</FormHelperText>
              )}
            </FormControl>
          </Grid>
        </Grid>
        <Grid container spacing={2} alignItems="top" marginTop={2}>
          <Grid item xs={4}>
            <label htmlFor="picture">Picture</label>
          </Grid>
          <Grid item xs={8}>
            <Button
              component="label"
              variant="contained"
              id="picture"
              startIcon={<CloudUploadIcon />}
            >
              Upload
              <VisuallyHiddenInput
                type="file"
                accept="image/*"
                onChange={handlePictureChange}
                onError={() => Boolean(errors.picture)}
              />
            </Button>
            {errors.picture && (
              <FormHelperText error>{errors.picture}</FormHelperText>
            )}

            {imagePreview && (
              <Box
                component="img"
                mt={2}
                src={imagePreview}
                alt="Selected"
                sx={{ width: '100%', maxHeight: 300, objectFit: 'contain' }}
              />
            )}
          </Grid>
        </Grid>
        <Grid container spacing={2} alignItems="center" marginTop={2}>
          <Grid item xs={4}>
            <label htmlFor="source">Source</label>
          </Grid>
          <Grid item xs={8}>
            <TextField
              fullWidth
              id="source"
              name="source"
              value={item.source}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} alignItems="center" marginTop={2}>
          <Grid item xs={4}>
            <label htmlFor="date">Date</label>
          </Grid>
          <Grid item xs={8}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                className="w-full"
                disableFuture
                value={item.date}
                onChange={handleDateChange}
                slotProps={{
                  textField: {
                    error: Boolean(errors.date),
                    helperText: errors.date,
                  },
                }}
              />
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
              name="comment"
              value={item.comment}
              onChange={handleChange}
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
              <Button variant="contained" className="mr-4" type="submit">
                Submit
              </Button>
            </Box>
          </Grid>
        </Grid>
      </FormWrapper>
    </div>
  );
};

export default Add;
