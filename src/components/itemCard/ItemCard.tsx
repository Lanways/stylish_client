//hooks
import { useNavigate } from 'react-router-dom';
//redux
import { useDispatch, useSelector } from 'react-redux';
import { idActions } from '../../store/idSwitcher';
// types
import { Product } from '../../types/type';
//styling
import './ItemCard.scss';

interface ProductProps {
  productInfo: Product;
}

const ItemCard: React.FC<ProductProps> = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const IdPasserHandler = () => {
    dispatch(idActions.idChanger(String(props?.productInfo?.id)));
  };
  return (
    <div
      className='itemCard'
      onClick={() => {
        IdPasserHandler();
        navigate('/product-detail');
      }}
    >
      <div>
        <img src={props?.productInfo?.image} alt='logo' />
      </div>
      <div className='item-info'>
        <h3 className='medium-14 item-title'>{props?.productInfo?.name}</h3>
        <div className='price'>
          <span className='bold-16'>{`NT$${props?.productInfo?.price}`}</span>
          <span className='regular-13 regular-price'>NT$1,680</span>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
