//hooks
import { useState } from 'react';
//bootstrap
import { Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
//api
import { postCartItem } from '../../api/product';
//components
import CartPopupBox from '../cartPopupBox/CartPopupBox';
//type
import { ItemDetail } from '../../types/type';
//styling
import './itemDetailCard.scss';

interface ItemDetailProps {
  itemInfo: ItemDetail;
}

const ItemDetailCard: React.FC<ItemDetailProps> = (props) => {
  const [isShow, setIsShow] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState('顏色');
  const [size, setSize] = useState('尺寸');
  const [inventory, setInventory] = useState();
  //Sets
  const colorSet: Set<string> = new Set<string>(
    props?.itemInfo?.Skus?.map((option) => option.color)
  );
  // const sizeSet: Set<string> = new Set<string>(
  //   props?.itemInfo?.Skus?.map((option) => option.size)
  // );

  //Sets converted to arrays
  const colorArray: string[] = Array.from(colorSet);
  // const sizeArray: string[] = Array.from(sizeSet);

  const addItemToCardHandler = async () => {
    try {
      const seletedSku = props?.itemInfo?.Skus?.filter(
        (option) => option.color === color && option.size === size
      );
      await postCartItem(seletedSku[0].id, quantity);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='itemDetailCard'>
      <div className='single-item-pic'>
        <img src={props?.itemInfo?.image} alt='logo' />
      </div>
      <div>
        <h1 className='bold-24'>{props?.itemInfo?.name}</h1>
        <div className='item-tag'>
          <span className='regular-14 tag'>預購商品</span>
        </div>
        <div className='item-prices'>
          <div className='origin-price medium-20'>
            NT${props?.itemInfo?.price}
          </div>
        </div>
        <div className='variation-select'>
          <div className='variation'>
            <Dropdown
              className='variation-option
            color-variation'
            >
              <Dropdown.Toggle variant='success' id='dropdown-basic'>
                {color.toUpperCase()}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {colorArray.map((color, i) => {
                  return (
                    <Dropdown.Item
                      key={`color-${i}`}
                      href={`#/action-${i}`}
                      onClick={() => setColor(color)}
                    >
                      {color.toUpperCase()}
                    </Dropdown.Item>
                  );
                })}
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown className='variation-option size-variation'>
              <Dropdown.Toggle variant='success' id='dropdown-basic'>
                {size}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {props?.itemInfo?.Skus?.filter(
                  (option) => option.color === color
                ).map((option, i) => {
                  return (
                    <Dropdown.Item
                      key={`size-${i}`}
                      href={`#/action-${i}`}
                      onClick={() => setSize(option.size)}
                    >
                      {option.size}
                    </Dropdown.Item>
                  );
                })}
              </Dropdown.Menu>
            </Dropdown>
            <div className='variation-option quantity-variation'>
              <button
                className='minus'
                onClick={() => quantity > 1 && setQuantity((prev) => prev - 1)}
              >
                -
              </button>
              <input
                className='regular-14'
                type='text'
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
              />
              <button
                className='plus'
                onClick={() => setQuantity((prev) => prev + 1)}
              >
                +
              </button>
            </div>
          </div>
          <button
            className='order-btn'
            onClick={() => {
              addItemToCardHandler();
              setIsShow(true);
            }}
          >
            Preorder
          </button>
          {isShow && (
            <CartPopupBox setShow={(show: boolean) => setIsShow(show)} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetailCard;
