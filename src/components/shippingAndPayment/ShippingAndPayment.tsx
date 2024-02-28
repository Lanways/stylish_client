//react
import { useState } from 'react';
//bootstrap
import { Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
//style
import './ShippingAndPayment.scss';

const ShippingAndPayment = () => {
  const [loaction, setLocation] = useState('送貨地點');
  const [shipping, setShipping] = useState('送貨方式');
  const [payment, setPayment] = useState('付款方式');

  return (
    <div className='shipping-payment-method'>
      <div className='title'>選擇運送及付款方式</div>
      <div className='method-dropdown'>
        <Dropdown className='variation-option'>
          <Dropdown.Toggle variant='success' id='dropdown-basic'>
            {loaction}
          </Dropdown.Toggle>
          <Dropdown.Menu></Dropdown.Menu>
        </Dropdown>
        <Dropdown className='variation-option'>
          <Dropdown.Toggle variant='success' id='dropdown-basic'>
            {shipping}
          </Dropdown.Toggle>
          <Dropdown.Menu></Dropdown.Menu>
        </Dropdown>
        <Dropdown className='variation-option'>
          <Dropdown.Toggle variant='success' id='dropdown-basic'>
            {payment}
          </Dropdown.Toggle>
          <Dropdown.Menu></Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};

export default ShippingAndPayment;
