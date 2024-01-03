//hooks
import { useState, useEffect } from 'react';
// components
import HeaderMobile from '../../components/headerMobile/HeaderMobile';
import HeaderDestop from '../../components/headerDestop/HeaderDestop';
import ItemCard from '../../components/itemCard/ItemCard';
import SideMenu from '../../components/sideMenu/SideMenu';
// api
import { getProducts } from '../../api/main';
import { getCategory } from '../../api/main';
// types
import { Product } from '../../types/type';
import { Category } from '../../types/type';
// styling
import './MainPage.scss';

const MainPage: React.FC = () => {
  // states
  const [products, setProducts] = useState<Product[]>([]);
  const [category, setCategory] = useState<Category>([]);
  const [IsSideMenuShow, setIsSideMenuShow] = useState(false);
  const [categoryId, setCategoryId] = useState(1);

  const IsSideMenuShowHandler = (show: boolean) => {
    setIsSideMenuShow(show);
  };

  const categoryIdHandler = (id: number) => {
    setCategoryId(id);
  };

  useEffect(() => {
    const getProductsAsync = async () => {
      try {
        const products = await getProducts();
        console.log(products);
        setProducts(products);
      } catch (error) {
        console.log(error);
      }
    };

    const getCategoryAsync = async () => {
      try {
        const category = await getCategory();
        setCategory(category);
      } catch (error) {
        console.log(error);
      }
    };

    getProductsAsync();
    getCategoryAsync();
  }, []);

  return (
    <div className='mainPage'>
      <HeaderMobile />
      <HeaderDestop
        setIsShow={IsSideMenuShowHandler}
        setMenuId={categoryIdHandler}
        categoryAll={category}
      />
      <div className='title'>
        <h1 className='medium-20 sec-title'>本月新品</h1>
      </div>
      <div className='main-content'>
        <div className='side-part'>
          {IsSideMenuShow && (
            <SideMenu
              setMenuId={categoryIdHandler}
              categoryAll={category}
              products={products}
            />
          )}
        </div>
        <div className='item-sec'>
          {products?.map?.((product) => {
            return (
              product.categoryId === categoryId && (
                <ItemCard key={product.id} productInfo={product} />
              )
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
