import { useLocation } from 'react-router-dom';
import './orderCheckoutPage.scss';

const OrderCheckoutPage = () => {
  const location = useLocation();
  const { orderDetails } = location.state || {};
  console.log('orderDetails', orderDetails)
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // 處理提交邏輯
    console.log("訂單已提交");
  };

  if (!orderDetails) {
    return <p>加載訂單信息中...</p>;
  }

  return (
    <div className="order-checkout-page">
      <h2>訂單詳情</h2>
      <form action={orderDetails.PayGateWay} method="post">
        <input type="text" name="MerchantID" value={orderDetails.MerchantID} />
        <input type="text" name="TradeSha" value={orderDetails.order.shaEncrypt} />
        <input type="text" name="TradeInfo" value={orderDetails.order.aesEncrypt} />
        <input type="text" name="TimeStamp" value={orderDetails.order.TimeStamp} />
        <input type="text" name="Version" value={orderDetails.Version} />
        <input type="text" name="NotifyUrl" value={orderDetails.NotifyUrl} />
        <input type="text" name="ReturnUrl" value={orderDetails.ReturnUrl} />
        <div>
          <label htmlFor="">訂單編號:</label>
          <input type="text" name="MerchantOrderNo" value={orderDetails.order.MerchantOrderNo} />
        </div>
        <div>
          <label htmlFor="totalPrice">總價:</label>
          <input type="text" name="Amt" value={orderDetails.order.Amt} />
        </div>
        <input type="text" name="ItemDesc" value={orderDetails.order.MerchantOrderNo} />
        <input type="email" name="Email" value={orderDetails.order.email} />
        <input type="text" name='CREDIT' value={orderDetails.CREDIT} />
        <input type="text" name='WEBATM' value={orderDetails.WEBATM} />
        <button type="submit">送出</button>
      </form>
    </div>
  );
};

export default OrderCheckoutPage;
