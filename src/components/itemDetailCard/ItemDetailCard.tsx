//hooks
import { useState } from 'react';
//bootstrap
import { Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
//img
import ItemSample from '../../assets/item-sample.png';
//styling
import './itemDetailCard.scss';

const ItemDetailCard: React.FC = () => {
  const [quantity, setQuantity] = useState('1');
  return (
    <div className='itemDetailCard'>
      <div className='single-item-pic'>
        <img src={ItemSample} alt='logo' />
      </div>
      <div>
        <h1 className='bold-24'>仿水貂毛毛絨絨保暖舒服大翻領毛衣</h1>
        <div className='item-prices'>
          <div className='origin-price medium-20'>NT$2,400</div>
          <div className='discount-price medium-20'>NT$1,680</div>
        </div>
        <div className='item-tag '>
          <span className='regular-14 tag'>預購商品</span>
        </div>
        <div className='variation-select'>
          <div className='variation'>
            <Dropdown
              className='variation-option
            color-variation'
            >
              <Dropdown.Toggle variant='success' id='dropdown-basic'>
                顏色
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href='#/action-1'>茶色</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown className='variation-option size-variation'>
              <Dropdown.Toggle variant='success' id='dropdown-basic'>
                S
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href='#/action-1'>M</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <div className='variation-option quantity-variation'>
              <button className='minus'>-</button>
              <input
                className='regular-14'
                type='text'
                value={quantity}
                onChange={(e) => {
                  setQuantity(e.target.value);
                }}
              />
              <button className='plus'>+</button>
            </div>
          </div>
          <button></button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailCard;
