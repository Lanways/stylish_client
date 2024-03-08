//react
import { useState, useEffect } from 'react';
//components
import CartItem from '../../components/cartItem/CartItem';
import ShippingAndPayment from '../../components/shippingAndPayment/ShippingAndPayment';
//api
import { getCart } from '../../api/cart';
import { getShipping } from '../../api/checkout';
//type
import { CartItemType } from '../../types/type';
import { ShippingType } from '../../types/type';
//img
import './CheckoutPage.scss';

const CheckoutPage: React.FC = () => {
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

  const [shippingData, setShippingData] = useState<ShippingType[]>([
    {
      country: '',
      fee: '',
      id: 0,
      paymentMethod: '',
      shippingMethod: '',
    },
  ]);

  //fee info
  const [shippingFee, setShippingFee] = useState('0');

  // shipping and payment method dropdown
  const [shipping, setShipping] = useState('送貨方式');
  const [payment, setPayment] = useState('付款方式');

  useEffect(() => {
    const getCartItemsAsync = async () => {
      try {
        const items = await getCart();
        console.log(items);
        setCartItems(items);
      } catch (error) {
        console.log(error);
      }
    };

    const getShippingAsync = async () => {
      try {
        const shipping = await getShipping();
        setShippingData(shipping);
      } catch (error) {
        console.error('[Get Shipping Data failed]: ', error);
      }
    };

    const fee = shippingData
      ?.filter(
        (option) =>
          option.paymentMethod === payment && option.shippingMethod === shipping
      )
      ?.map((option) => option.fee);

    console.log(fee);

    fee.length !== 0 && setShippingFee(fee[0]);
    getShippingAsync();
    getCartItemsAsync();
  }, [shipping, payment, shippingData]);

  return (
    <div className='checkout-page-container'>
      <div className='checkout-main'>
        <div className='item-in-cart'>
          <div className='cart-title'>購物車</div>
          <div className='list-titles'>
            <div className='title-sec1'>
              <div>商品資料</div>
              <div>商品名稱</div>
              <div>尺寸</div>
              <div>價格</div>
            </div>
            <div className='title-sec2'>數量</div>
            <div className='title-sec3'>小計</div>
          </div>
          <div className='cart-list'>
            {cartItems.map((item) => (
              <CartItem key={item.skuId} item={item} />
            ))}
          </div>
        </div>
        <div className='checkout-lower-sec'>
          <ShippingAndPayment
            shippingData={shippingData}
            shipping={shipping}
            setShipping={(method) => setShipping(method)}
            payment={payment}
            setPayment={(method) => setPayment(method)}
          />
          <div className='order-sum'>
            <div className='sum-title'>訂單資訊</div>
            <div className='sum-detail'>
              <div className='sub-total'>
                <span>小計</span>
                <span>NT$1,1680</span>
              </div>
              <div className='shipping-fee'>
                <span>運費</span>
                <span>NT${shippingFee}</span>
              </div>
              <div className='checkout-forward'>
                <div className='sum-total'>
                  <span>合計</span>
                  <span>NT$1,750</span>
                </div>
                <button>前往結賬</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
