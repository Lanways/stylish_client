// components
import HeaderMobile from '../../components/headerMobile/HeaderMobile';
import HeaderDestop from '../../components/headerDestop/HeaderDestop';
import ItemCard from '../../components/itemCard/ItemCard';
// styling
import './MainPage.scss';

const MainPage: React.FC = () => {
  return (
    <div className='mainPage'>
      <HeaderMobile />
      <HeaderDestop />
      <div className='title'>
        <h1 className='medium-20 sec-title'>本月新品</h1>
      </div>
      <div className='item-sec'>
        <ItemCard />
      </div>
    </div>
  );
};

export default MainPage;
