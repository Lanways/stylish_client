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
  shipping: string;
  payment: string;
  location: string;
  setShipping: (method: string) => void;
  setPayment: (method: string) => void;
  setLocation: (method: string) => void;
}

const ShippingAndPayment: React.FC<ShippingAndPaymentProps> = (props) => {
  //const [location, setLocation] = useState('送貨地點');

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
            {props.location}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => props.setLocation('台灣')}>
              台灣
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown className='variation-option'>
          <Dropdown.Toggle variant='success' id='dropdown-basic'>
            {props.shipping}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {shippingArray.map((option, i) => {
              return (
                <Dropdown.Item
                  key={`method-${i}`}
                  href={`#/action-${i}`}
                  onClick={() => props.setShipping(option)}
                >
                  {option}
                </Dropdown.Item>
              );
            })}
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown className='variation-option'>
          <Dropdown.Toggle variant='success' id='dropdown-basic'>
            {props.payment}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {paymentArray.map((option, i) => {
              return (
                <Dropdown.Item
                  key={`payment-${i}`}
                  href={`#/action-${i}`}
                  onClick={() => props.setPayment(option)}
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
