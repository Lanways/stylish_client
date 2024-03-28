import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const OrderCheckoutPage = () => {
  const location = useLocation();
  const { orderDetails } = location.state || {};

  useEffect(() => {
    if (orderDetails) {
      const form = document.getElementById('auto-submit-form') as HTMLFormElement
      if (form) {
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
        <input type="hidden" name="TradeSha" value={orderDetails.order.shaEncrypt} />
        <input type="hidden" name="TradeInfo" value={orderDetails.order.aesEncrypt} />
        <input type="hidden" name="TimeStamp" value={orderDetails.order.TimeStamp} />
        <input type="hidden" name="Version" value={orderDetails.Version} />
        <input type="hidden" name="MerchantOrderNo" value={orderDetails.order.MerchantOrderNo} />
        <input type="hidden" name="Amt" value={orderDetails.order.Amt} />
        <input type="hidden" name="ItemDesc" value={orderDetails.order.MerchantOrderNo} />
      </form>
    </div>
  );
};

export default OrderCheckoutPage;
