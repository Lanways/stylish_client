//react
import { useState } from 'react';
//type
import { CartItemType } from '../../types/type';
//style
import './CartItem.scss';

interface CartItemProps {
  item: CartItemType;
  setSubTotal: (prev: any) => void;
}

const CartItem: React.FC<CartItemProps> = (props) => {
  const [quantity, setQuantity] = useState(props?.item?.quantity);
  console.log(props);

  return (
    <div className='cart-item-container'>
      <div className='cart-item'>
        <img src={props?.item?.Sku?.Product?.image} alt='' />
        <div className='item-name'>{props?.item?.Sku?.Product?.name}</div>
        <div>{props?.item?.Sku?.size}</div>
        <div>NT${props?.item?.Sku?.price}</div>
      </div>
      <div className='quantity-action'>
        <button
          className='minus'
          onClick={() => {
            if (quantity > 0) {
              setQuantity((prev) => prev - 1);
              props.setSubTotal((prev: any) => prev - props?.item?.Sku?.price);
            }
          }}
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
          onClick={() => {
            setQuantity((prev) => prev + 1);
            props.setSubTotal((prev: any) => prev + props?.item?.Sku?.price);
          }}
        >
          +
        </button>
      </div>
      <div className='sub-total'>NT${props?.item?.Sku?.price * quantity}</div>
    </div>
  );
};

export default CartItem;
