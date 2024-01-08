//import bootstrap
import { Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
//fontaswesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
//styling
import './ProductFilter.scss';

const ProductFilter: React.FC = () => {
  return (
    <div className='productFilter'>
      <div className='search-bar'>
        <input
          className='regular-14'
          type='search'
          placeholder={'商品關鍵字'}
          value=''
          onChange={() => {}}
        />
        <button>
          <FontAwesomeIcon className='search-icon' icon={faMagnifyingGlass} />
        </button>
      </div>
      <div className='filter-sec'>
        <div className='order-filter'>
          <Dropdown>
            <Dropdown.Toggle variant='success' id='dropdown-basic'>
              商品排序
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href='#/action-1'>由新到舊</Dropdown.Item>
              <Dropdown.Item href='#/action-2'>由舊到新</Dropdown.Item>
              <Dropdown.Item href='#/action-3'>價格高至低</Dropdown.Item>
              <Dropdown.Item href='#/action-3'>價格低至高</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className='quantity-filter'>
          <Dropdown>
            <Dropdown.Toggle variant='success' id='dropdown-basic'>
              每頁數量
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href='#/action-1'>24個</Dropdown.Item>
              <Dropdown.Item href='#/action-2'>48個</Dropdown.Item>
              <Dropdown.Item href='#/action-3'>72個</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;
