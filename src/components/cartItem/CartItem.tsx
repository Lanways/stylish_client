//react
import { useState } from 'react';
//img
import itemPic from '../../assets/item-sample.png';
//style
import './CartItem.scss';

const CartItem: React.FC = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className='cart-item-container'>
      <div className='cart-item'>
        <img src={itemPic} alt='' />
        <div className='item-name'>保暖舒服大翻領毛衣</div>
        <div>S</div>
        <div>NT$1,600</div>
      </div>
      <div className='quantity-action'>
        <button
          className='minus'
          onClick={() => quantity > 1 && setQuantity((prev) => prev - 1)}
        >
          -
        </button>
        <input
          className='regular-14'
          type='text'
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        />
        <button
          className='plus'
          onClick={() => setQuantity((prev) => prev + 1)}
        >
          +
        </button>
      </div>
      <div className='sub-total'>NT1,690</div>
    </div>
  );
};

export default CartItem;
