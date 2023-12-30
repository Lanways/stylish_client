//hooks
import { useState, useEffect } from 'react';
// components
import HeaderMobile from '../../components/headerMobile/HeaderMobile';
import HeaderDestop from '../../components/headerDestop/HeaderDestop';
import ItemCard from '../../components/itemCard/ItemCard';
// api
import { getProducts } from '../../api/main';
// styling
import './MainPage.scss';

const MainPage: React.FC = () => {
  const [products, setProducts] = useState<
    {
      id: number;
      name: string;
      price: number;
      createdAt: string;
      updatedAt: string;
      image: string;
      sizeOptions: string;
      quantity: number;
      description: string;
      additionalImage: string;
    }[]
  >([]);

  useEffect(() => {
    const getProductsAsync = async () => {
      try {
        const products = await getProducts();
        setProducts(products);
      } catch (error) {
        console.log(error);
      }
    };
    getProductsAsync();
  }, []);

  return (
    <div className='mainPage'>
      <HeaderMobile />
      <HeaderDestop />
      <div className='title'>
        <h1 className='medium-20 sec-title'>本月新品</h1>
      </div>
      <div className='item-sec'>
        {products?.map?.((product) => {
          return <ItemCard productInfo={product} />;
        })}
      </div>
    </div>
  );
};

export default MainPage;
