import { Box, Grid, Pagination, Typography } from '@mui/material';
import ListItem from './components/ListItem';
import { categoryList } from '../../data';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { ListItemProps } from './components/ListItem';

type RouteParams = Record<string, string | undefined>;
const ITEMS_PER_PAGE = 4;

const List = () => {
  const { id } = useParams<RouteParams>();
  const [page, setPage] = useState<number>(1);
  const category = categoryList.find((category) => category.id === id);
  if (!category) return;
  const { name, children: list } = category;

  const pageCount: number = Math.ceil(list.length / ITEMS_PER_PAGE);

  const displayedItems: ListItemProps[] = list.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE,
  );

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  return (
    <div>
      <Typography variant="h4" color="text.primary" gutterBottom>
        {name}
      </Typography>
      <Grid container spacing={2} columns={24}>
        {displayedItems.map((item) => (
          <Grid item xs={12} sm={8} md={6} lg={6}>
            <ListItem key={item.id} categoryId={id} data={item} />
          </Grid>
        ))}
      </Grid>
      <Box display="flex" justifyContent="center" marginTop={8}>
        <Pagination
          count={pageCount}
          page={page}
          onChange={handleChange}
          variant="outlined"
          shape="rounded"
          color="primary"
          sx={{
            '& .MuiPaginationItem-root': {
              bgcolor: '#FFB74D',
              color: '#ffffff',
              border: '1px solid #FFB74D',
              fontSize: '1.5rem',
              width: '50px',
              height: '50px',
              borderRadius: '5px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.3)',
              '&:hover': {
                bgcolor: '#FF9800',
                borderColor: '#FF9800',
              },
            },
            '& .MuiPaginationItem-ellipsis': {
              fontSize: '1.5rem',
              color: '#FFB74D',
            },
            '& .MuiPaginationItem-page.Mui-selected': {
              bgcolor: '#FF6F00',
              color: '#ffffff',
              borderColor: '#FF6F00',
            },
          }}
        />
      </Box>
    </div>
  );
};

export default List;
