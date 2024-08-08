import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { calculateAge } from '../../../utils/time';

export interface ListItemProps {
  id: string;
  name: string;
  picture: string;
  getDate?: string;
}
const ListItem = ({
  categoryId,
  data,
}: {
  categoryId: string | undefined;
  data: ListItemProps;
}) => {
  const navigate = useNavigate();
  return (
    <Card
      onClick={() => {
        navigate(`/item/${data.id}?cId=${categoryId}`);
      }}
    >
      <CardActionArea>
        <div className="flex justify-center py-4">
          <img src={data.picture} alt="" className="w-3/5" />
        </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.name}
          </Typography>
          {data.getDate && (
            <Typography variant="body2" color="text.secondary">
              {calculateAge(data.getDate)}
            </Typography>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ListItem;
