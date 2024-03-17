//react
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
//component
import HeaderDestop from '../../components/headerDestop/HeaderDestop';
import Input from '../../components/input/Input';
//type
import { Category } from '../../types/type';
//style
import './InfoCheckoutPage.scss';

const InfoCheckoutPage = () => {
  //header - start
  const [categoryId, setCategoryId] = useState('');
  const [category, setCategory] = useState<Category>([]);

  const categoryIdHandler = (id: string) => {
    setCategoryId(id);
  };
  //header - end

  // data from previous page
  const { state } = useLocation();
  console.log(state);

  const [recipient, setRecipient] = useState('');
  const [number, setNumber] = useState('');
  const [address, setAddress] = useState('');

  const orderItems = state?.skuIds?.map((id: number, i: number) => {
    return {
      skuId: id,
      quantity: state?.orderNumbers[i],
    };
  });

  const shippingFeeId = state.shippingId[0]?.id;

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
    </div>
  );
};

export default InfoCheckoutPage;
