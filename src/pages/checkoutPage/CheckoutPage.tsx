//components
import CartItem from '../../components/cartItem/CartItem';
import ShippingAndPayment from '../../components/shippingAndPayment/ShippingAndPayment';
//img
import './CheckoutPage.scss';

const CheckoutPage: React.FC = () => {
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
            <CartItem />
          </div>
        </div>
        <div className='checkout-lower-sec'>
          <ShippingAndPayment />
          <div className='order-sum'>
            <div className='sum-title'>訂單資訊</div>
            <div className='sum-detail'>
              <div className='sub-total'>
                <span>小計</span>
                <span>NT$1,1680</span>
              </div>
              <div className='shipping-fee'>
                <span>運費</span>
                <span>NT$70</span>
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
