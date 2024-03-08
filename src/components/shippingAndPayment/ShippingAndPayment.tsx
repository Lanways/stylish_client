//react
import { useState } from 'react';
//type
import { ShippingType } from '../../types/type';
//bootstrap
import { Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
//style
import './ShippingAndPayment.scss';

interface ShippingAndPaymentProps {
  shippingData: ShippingType[];
}

const ShippingAndPayment: React.FC<ShippingAndPaymentProps> = (props) => {
  const [loaction, setLocation] = useState('送貨地點');
  const [shipping, setShipping] = useState('送貨方式');
  const [payment, setPayment] = useState('付款方式');

  // convert to set
  const shippingSet: Set<string> = new Set<string>(
    props?.shippingData?.map((option) => option.shippingMethod)
  );

  const paymentSet: Set<string> = new Set<string>(
    props?.shippingData?.map((option) => option.paymentMethod)
  );

  //convert to array
  const shippingArray: string[] = Array.from(shippingSet);
  const paymentArray: string[] = Array.from(paymentSet);

  return (
    <div className='shipping-payment-method'>
      <div className='title'>選擇運送及付款方式</div>
      <div className='method-dropdown'>
        <Dropdown className='variation-option'>
          <Dropdown.Toggle variant='success' id='dropdown-basic'>
            {loaction}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => setLocation('台灣')}>
              台灣
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown className='variation-option'>
          <Dropdown.Toggle variant='success' id='dropdown-basic'>
            {shipping}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {shippingArray.map((option, i) => {
              return (
                <Dropdown.Item
                  key={`method-${i}`}
                  href={`#/action-${i}`}
                  onClick={() => setShipping(option)}
                >
                  {option}
                </Dropdown.Item>
              );
            })}
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown className='variation-option'>
          <Dropdown.Toggle variant='success' id='dropdown-basic'>
            {payment}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {paymentArray.map((option, i) => {
              return (
                <Dropdown.Item
                  key={`payment-${i}`}
                  href={`#/action-${i}`}
                  onClick={() => setPayment(option)}
                >
                  {option}
                </Dropdown.Item>
              );
            })}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};

export default ShippingAndPayment;
