import { useEffect, useState } from 'react';
//componants
import ItemDetailCard from '../../components/itemDetailCard/ItemDetailCard';
//api
import { getSingleProduct } from '../../api/product';
//redux
import { useSelector } from 'react-redux';
//styling
import './ItemDetailPage.scss';

const ItemDetailPage: React.FC = () => {
  const itemId = useSelector((state: { id: { id: string } }) => state.id.id);

  useEffect(() => {
    const getSingleItem = async () => {
      try {
        const singleItem = await getSingleProduct(itemId);
        console.log(singleItem);
      } catch (error) {
        console.log(error);
      }
    };
    getSingleItem();
  }, []);

  return (
    <div className='itemDetailPage'>
      <ItemDetailCard />
    </div>
  );
};

export default ItemDetailPage;
