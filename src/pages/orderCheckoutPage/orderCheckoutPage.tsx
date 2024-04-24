import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const OrderCheckoutPage = () => {
  const location = useLocation();
  const { orderDetails } = location.state || {};

  useEffect(() => {
    if (orderDetails) {
      console.log('orderDetails', orderDetails)
      const form = document.getElementById('auto-submit-form') as HTMLFormElement
      if (form) {
        // console.log('form')
        form.submit();
      }
    }
  }, [orderDetails]);

  if (!orderDetails) {
    return <p>加載訂單信息中...</p>;
  }

  return (
    <div className="order-checkout-page">
      <form id="auto-submit-form" action={orderDetails.PayGateWay} method="post">
        <input type="hidden" name="MerchantID" value={orderDetails.MerchantID} />
        <input type="hidden" name="TradeSha" value={orderDetails.shaEncrypt} />
        <input type="hidden" name="TradeInfo" value={orderDetails.aesEncrypt} />
         <input type="hidden" name="Version" value={orderDetails.Version} />
      </form>
    </div>
  );
};

export default OrderCheckoutPage;
