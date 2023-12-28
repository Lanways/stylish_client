// img
import Sample from '../../assets/item-sample.png';
//styling
import './ItemCard.scss';

const ItemCard: React.FC = () => {
  return (
    <div className='itemCard'>
      <div>
        <img src={Sample} alt='logo' />
      </div>
      <div className='item-info'>
        <h3 className='medium-14 item-title'>灰色針織兩件式套裝</h3>
        <div className='price'>
          <span className='bold-16'>NT$2,400</span>
          <span className='regular-13 regular-price'>NT$1,680</span>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
