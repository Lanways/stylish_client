//react
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
//component
import HeaderDestop from '../../components/headerDestop/HeaderDestop';
import Input from '../../components/input/Input';
//api
import { postOrder } from '../../api/checkout';
//type
import { Category } from '../../types/type';
//style
import './InfoCheckoutPage.scss';
import { checkOrder } from '../../api/checkout';

const InfoCheckoutPage = () => {
  //header - start
  const [categoryId, setCategoryId] = useState('');
  const [category, setCategory] = useState<Category>([]);

  const categoryIdHandler = (id: string) => {
    setCategoryId(id);
  };
  //header - end

  const navigate = useNavigate();
  const [hasError, setHasError] = useState(false);

  // data from previous page
  const { state } = useLocation();
  console.log(state);

  const [recipient, setRecipient] = useState('');
  const [number, setNumber] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');

  const orderItems = state?.skuIds?.map((id: number, i: number) => {
    return {
      skuId: id,
      quantity: state?.orderNumbers[i],
    };
  });

  //const shippingFeeId = state.shippingId[0]?.id;

  const handleCheckout = async () => {
    if (recipient !== '' && number !== '' && address !== '' && email !== '') {
      setHasError(false);
      const formate = {
        total: state?.total,
        recipient: recipient,
        address: address,
        number: number,
        payment: state?.paymentMethod,
        orderItems: orderItems,
        shippingFeeId: state?.shippingId[0]?.id,
        email: email
      };
      console.log('email', email)
      const res = await postOrder(formate);

      if (res?.status === 200) {
        const orderId = res.data.data.TimeStamp
        const orderDetails = await checkOrder(orderId);
        navigate('/order-form', { state: { orderDetails } })
      }
    } else {
      setHasError(true);
    }
  };

  return (
    <div className='Info-checkout-page-container'>
      <HeaderDestop setMenuId={categoryIdHandler} categoryAll={category} />
      <div className='Info-checkout-main'>
        <div className='shipping-detail'>
          <div className='title'>
            <span>送貨資料</span>
            <span className='shipping-fee'>運費: NT$ {state.shippingFee}</span>
          </div>
          <div className='recipient-info'>
            <div className='shipping-method'>
              選擇送貨方式: {state.shippingMethod}
            </div>
            <div className='input-group'>
              <Input
                label='收件人名稱'
                type='text'
                name=''
                placeholder={'請輸入收件人'}
                value={recipient}
                onChange={(recipientInputValue: string) =>
                  setRecipient(recipientInputValue)
                }
              />
              <Input
                label='收件人電話號碼'
                type='text'
                name=''
                placeholder={'請輸入電話號碼'}
                value={number}
                onChange={(numberInputValue: string) =>
                  setNumber(numberInputValue)
                }
              />
              <Input
                label='宅配地址/門市地址'
                type='text'
                name=''
                placeholder={'請輸入運送地址'}
                value={address}
                onChange={(addressInputValue: string) =>
                  setAddress(addressInputValue)
                }
              />
              <Input
                label='電子郵件'
                type='email'
                name='email'
                placeholder='請輸入您的電子郵件'
                value={email}
                onChange={(emailInputValue: string) => setEmail(emailInputValue)}
              />
            </div>
          </div>
        </div>
        <div className='payment-detail'>
          <div className='title'>
            <span>付款資料</span>
          </div>
          <div className='payment-sumup'>
            <div className='payment-method'>
              選擇的付款方式: {state.paymentMethod}
            </div>
            <div className='payment-total'>合計: NT${state.total}</div>
          </div>
        </div>
      </div>
      <div className='checkout-action' onClick={handleCheckout}>
        <div className='forward-order'>
          <button className='checkout-btn'>送出訂單</button>
          {hasError && <div className='input-error'>欄位不可空白</div>}
        </div>
      </div>
    </div>
  );
};

export default InfoCheckoutPage;
