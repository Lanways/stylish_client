//hooks
import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
// components
import HeaderMobile from '../../components/headerMobile/HeaderMobile';
import HeaderDestop from '../../components/headerDestop/HeaderDestop';
import ItemCard from '../../components/itemCard/ItemCard';
import SideMenu from '../../components/sideMenu/SideMenu';
import ProductFilter from '../../components/productFilter/ProductFilter';
// api
import { getProducts } from '../../api/main';
import { getCategory } from '../../api/main';
// types
import { Product, Category, ProductParam } from '../../types/type';
// styling
import './MainPage.scss';
//import bootstrap
import { Pagination } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const MainPage: React.FC = () => {
  // states
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [category, setCategory] = useState<Category>([]);
  const [IsSideMenuShow, setIsSideMenuShow] = useState(false);
  const [page, setPage] = useState(1);
  const [categoryId, setCategoryId] = useState('');
  const [limit, setLimit] = useState('&limit=20');

  //pagination and API

  const {
    isLoading,
    isError,
    error,
    data: items,
    isFetching,
    isPreviousData,
  } = useQuery(
    ['/items', page, limit, categoryId],
    () =>
      getProducts({
        page,
        limit,
        categoryId,
      }),
    {
      keepPreviousData: true,
    }
  );

  const content = items?.products?.map?.((item: Product) => (
    <ItemCard key={item.id} productInfo={item} />
  ));

  const nextPage = () => setPage((prev) => prev + 1);
  const prevPage = () => setPage((prev) => prev - 1);

  const pagesArray = items?.pagination?.pages;

  const pagination = items && (
    <Pagination>
      <Pagination.Prev
        onClick={prevPage}
        disabled={isPreviousData || page === 1}
      />

      {pagesArray?.map?.((pg: number) => (
        <Pagination.Item
          key={pg}
          onClick={() => setPage(pg)}
          active={page === pg}
          disabled={isPreviousData}
        >
          {pg}
        </Pagination.Item>
      ))}
      <Pagination.Next
        onClick={nextPage}
        disabled={isPreviousData || page === items.pagination.totalPage}
      />
    </Pagination>
  );

  //function handlers
  const IsSideMenuShowHandler = (show: boolean) => {
    setIsSideMenuShow(show);
  };

  const categoryIdHandler = (id: string) => {
    setCategoryId(id);
  };

  useEffect(() => {
    const getAllProductsAsync = async () => {
      const param: ProductParam = {
        page: 1,
        limit: '',
        categoryId: '',
      };
      try {
        const allItems = await getProducts(param);
        setAllProducts(allItems.products);
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
    getAllProductsAsync();
    getCategoryAsync();
    console.log(items);
  }, [items]);

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
      <ProductFilter />
      <div className='main-content'>
        <div className='side-part'>
          {IsSideMenuShow && (
            <SideMenu
              setMenuId={categoryIdHandler}
              categoryAll={category}
              products={allProducts}
            />
          )}
        </div>
        <div className='item-sec'>{content}</div>
        <div className='pagination'>{pagination}</div>
      </div>
    </div>
  );
};

export default MainPage;
