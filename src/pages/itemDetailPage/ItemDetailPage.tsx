import { useEffect, useState } from 'react';
//componants
import ItemDetailCard from '../../components/itemDetailCard/ItemDetailCard';
import HeaderDestop from '../../components/headerDestop/HeaderDestop';
//api
import { getSingleProduct } from '../../api/product';
//type
import { Category } from '../../types/type';
import { ItemDetail } from '../../types/type';
//styling
import './ItemDetailPage.scss';

const ItemDetailPage: React.FC = () => {
  //header - start
  const [categoryId, setCategoryId] = useState('');
  const [category, setCategory] = useState<Category>([]);

  const categoryIdHandler = (id: string) => {
    setCategoryId(id);
  };

  //header - end

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
      <HeaderDestop setMenuId={categoryIdHandler} categoryAll={category} />
      <ItemDetailCard itemInfo={itemInfo} />
    </div>
  );
};

export default ItemDetailPage;
