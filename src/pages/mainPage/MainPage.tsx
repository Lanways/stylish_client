//hooks
import { useState, useEffect } from 'react';
// components
import HeaderMobile from '../../components/headerMobile/HeaderMobile';
import HeaderDestop from '../../components/headerDestop/HeaderDestop';
import ItemCard from '../../components/itemCard/ItemCard';
import SideMenu from '../../components/sideMenu/SideMenu';
// api
import { getProducts } from '../../api/main';
// styling
import './MainPage.scss';

const MainPage: React.FC = () => {
  // states
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

  const [IsSideMenuShow, setIsSideMenuShow] = useState(false);

  const IsSideMenuShowHandler = (show: boolean) => {
    setIsSideMenuShow(show);
  };

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
      <HeaderDestop setIsShow={IsSideMenuShowHandler} />
      <div className='title'>
        <h1 className='medium-20 sec-title'>本月新品</h1>
      </div>
      <div className='main-content'>
        <div className='side-part'>{IsSideMenuShow && <SideMenu />}</div>
        <div className='item-sec'>
          {products?.map?.((product) => {
            return <ItemCard productInfo={product} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
