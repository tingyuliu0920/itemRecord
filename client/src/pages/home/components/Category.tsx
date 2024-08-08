import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

interface Category {
  id: string;
  name: string;
  icon: string;
}
interface CategoryProps {
  data: Category;
}
const Category = ({ data }: CategoryProps) => {
  const navigate = useNavigate();
  return (
    <Card
      onClick={() => navigate(`/category/${data.id}`)}
      className="cursor-pointer"
    >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.name}
        </Typography>
        <div className="flex justify-center">
          <img src={data.icon} alt="" className="w-3/5" />
        </div>
      </CardContent>
    </Card>
  );
};

export default Category;
