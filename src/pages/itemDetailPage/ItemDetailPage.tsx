import { useEffect, useState } from 'react';
//componants
import ItemDetailCard from '../../components/itemDetailCard/ItemDetailCard';
//api
import { getSingleProduct } from '../../api/product';
//type
import { ItemDetail } from '../../types/type';
//styling
import './ItemDetailPage.scss';

const ItemDetailPage: React.FC = () => {
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
        const ItemKey = localStorage.getItem('itemKey');
        if (ItemKey) {
          const singleItem: ItemDetail = await getSingleProduct(ItemKey);
          console.log(ItemKey);
          console.log(singleItem);
          setItemInfo(singleItem);
        }
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
