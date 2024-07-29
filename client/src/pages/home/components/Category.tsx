import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

interface Category {
  id: number;
  name: string;
  picture: string;
}
interface CategoryProps {
  data: Category;
}
const Category = ({ data }: CategoryProps) => {
  const navigate = useNavigate();
  return (
    <Card onClick={() => navigate(`/category/${data.id}`)}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.name}
        </Typography>
        <img src={data.picture} alt="" className="w-full" />
      </CardContent>
    </Card>
  );
};

export default Category;
