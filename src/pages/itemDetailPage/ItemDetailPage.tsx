import { useEffect, useState } from 'react';
//componants
import ItemDetailCard from '../../components/itemDetailCard/ItemDetailCard';
//api
import { getSingleProduct } from '../../api/product';
//redux
import { useSelector } from 'react-redux';
//type
import { ItemDetail } from '../../types/type';
//styling
import './ItemDetailPage.scss';

const ItemDetailPage: React.FC = () => {
  const itemId = useSelector((state: { id: { id: string } }) => state.id.id);
  const [itemInfo, setItemInfo] = useState<ItemDetail>({
    Skus: [],
    additionalImage: '',
    categoryId: 1,
    createdAt: '',
    description: '',
    id: 1,
    image: '',
    name: '',
    price: '',
    updatedAt: '',
  });

  useEffect(() => {
    const getSingleItem = async () => {
      try {
        const singleItem: ItemDetail = await getSingleProduct(itemId);
        console.log(singleItem);
        setItemInfo(singleItem);
      } catch (error) {
        console.log(error);
      }
    };
    getSingleItem();
  }, []);

  return (
    <div className='itemDetailPage'>
      <ItemDetailCard itemInfo={itemInfo} />
    </div>
  );
};

export default ItemDetailPage;
