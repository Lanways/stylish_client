//react
import { useState, useEffect } from 'react';
//api
import { getCart } from '../../api/cart';
//style
import './CartPopupBox.scss';
//img
import itemPic from '../../assets/item-sample.png';

interface CartPopupBoxProps {
  setShow: (show: boolean) => void;
}

const CartPopupBox: React.FC<CartPopupBoxProps> = (props) => {
  const [cartItems, setCartItems] = useState<
    {
      cartId: number;
      createdAt: string;
      id: number;
      quantity: number;
      skuId: number;
      updatedAt: string;
    }[]
  >([
    {
      cartId: 0,
      createdAt: 'string',
      id: 0,
      quantity: 0,
      skuId: 0,
      updatedAt: 'string',
    },
  ]);

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.target as HTMLDivElement;
    if (target.className === 'cart-popup') {
      props.setShow(false);
    }
  };

  useEffect(() => {
    const getCartItems = async () => {
      try {
        const items = await getCart();
        console.log(items);
        setCartItems(items);
      } catch (error) {
        console.log(error);
      }
    };

    getCartItems();
  }, []);

  return (
    <div id='popup' className='cart-popup' onClick={handleClick}>
      <div className='popup-content'>
        <div className='popup-title'>購物車</div>
        <div className='cart-list'>
          {cartItems.map((item) => {
            return (
              <div className='item-content'>
                <img src={itemPic} alt='' />
                <div>
                  <span>商品名稱</span>
                  <span>S</span>
                  <span>x{item?.quantity}</span>
                  <span>NT$1600</span>
                </div>
              </div>
            );
          })}
        </div>
        <div className='checkout-btn'>
          <button>訂單結帳</button>
        </div>
      </div>
    </div>
  );
};

export default CartPopupBox;
