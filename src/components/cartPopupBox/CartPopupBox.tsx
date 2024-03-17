//react
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
//api
import { getCart } from '../../api/cart';
//type
import { CartItemType } from '../../types/type';
//style
import './CartPopupBox.scss';

interface CartPopupBoxProps {
  setShow: (show: boolean) => void;
}

const CartPopupBox: React.FC<CartPopupBoxProps> = (props) => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState<CartItemType[]>([
    {
      Sku: {
        Product: {
          image: '',
          name: '',
        },
        color: '',
        inventoryQuantity: 1,
        price: 1,
        size: '',
      },
      id: 1,
      quantity: 1,
      skuId: 1,
    },
  ]);

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.target as HTMLDivElement;
    if (target.className === 'cart-popup') {
      props.setShow(false);
    }
  };

  // const handlePassSubTotal = () => {
  //   const subTotal = cartItems
  //     .map((item) => item?.Sku?.price * item?.quantity)
  //     .reduce((acc, cur) => {
  //       return acc + cur;
  //     }, 0);

  //   localStorage.setItem('subTotal', String(subTotal));
  // };

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
          {cartItems?.map((item) => {
            return (
              <div key={item?.id} className='item-content'>
                <img src={item?.Sku?.Product?.image} alt='item-img' />
                <div>
                  <span>{item?.Sku?.Product?.name}</span>
                  <span>{item?.Sku?.size}</span>
                  <span>x{item?.quantity}</span>
                  <span>NT${item?.Sku?.price * item?.quantity}</span>
                </div>
              </div>
            );
          })}
        </div>
        <div className='checkout-btn'>
          <button
            onClick={() => {
              //handlePassSubTotal();
              navigate('/cart-checkout');
            }}
          >
            訂單結帳
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPopupBox;
