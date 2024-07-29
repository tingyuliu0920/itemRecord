import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';
interface ListItemProps {
  id: number;
  name: string;
  picture: string;
  age?: string;
}
const ListItem = ({ data }: { data: ListItemProps }) => {
  const navigate = useNavigate();
  return (
    <Card
      sx={{ maxWidth: 250, minWidth: 180 }}
      onClick={() => {
        navigate(`/item/${data.id}`);
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={data.picture}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.age}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ListItem;
