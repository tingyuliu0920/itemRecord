import { useLocation, useParams } from 'react-router-dom';
import { categoryList } from '../../data';
import { calculateAge } from '../../utils/time';

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

  const item = categoryList
    .find((category) => category.id === categoryId)
    ?.children.find((item) => item.id === id);
  return (
    <div className="flex justify-start">
      {item && (
        <div className="sm:max-w-[800px]">
          <h5>{item.name}</h5>
          <p>electrocities</p>
          <div className="w-1/3">
            <img src={item.picture} alt="" />
          </div>
          <p>{item.source}</p>
          <p> {calculateAge(item.getDate)}</p>
          <p>{item.comment}</p>
        </div>
      )}
    </div>
  );
};

export default Item;
