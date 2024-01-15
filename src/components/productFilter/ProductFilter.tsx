//import bootstrap
import { Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
//fontaswesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
//styling
import './ProductFilter.scss';

interface ProductFilterProps {
  setLimit: (limit: string) => void;
  setItemOrderBy: (sortBy: string) => void;
}

const ProductFilter: React.FC<ProductFilterProps> = (props) => {
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
              <Dropdown.Item
                href='#/action-1'
                onClick={() => props?.setItemOrderBy('newest')}
              >
                由新到舊
              </Dropdown.Item>
              <Dropdown.Item
                href='#/action-2'
                onClick={() => props?.setItemOrderBy('oldest')}
              >
                由舊到新
              </Dropdown.Item>
              <Dropdown.Item
                href='#/action-3'
                onClick={() => props?.setItemOrderBy('highest')}
              >
                價格高至低
              </Dropdown.Item>
              <Dropdown.Item
                href='#/action-3'
                onClick={() => props?.setItemOrderBy('lowest')}
              >
                價格低至高
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className='quantity-filter'>
          <Dropdown>
            <Dropdown.Toggle variant='success' id='dropdown-basic'>
              每頁數量
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item
                href='#/action-1'
                onClick={() => props?.setLimit('&limit=24')}
              >
                24個
              </Dropdown.Item>
              <Dropdown.Item
                href='#/action-2'
                onClick={() => props?.setLimit('&limit=48')}
              >
                48個
              </Dropdown.Item>
              <Dropdown.Item
                href='#/action-3'
                onClick={() => props?.setLimit('&limit=72')}
              >
                72個
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;
