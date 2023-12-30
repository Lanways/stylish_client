// fontaswesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCartShopping,
  faMessage,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
// styling
import './HeaderDestop.scss';

const titles = [
  '所有商品',
  '本月新品',
  '夏日渡假風',
  '限時優惠',
  '熱銷商品',
  '現貨商品區',
];

const HeaderDestop: React.FC = () => {
  return (
    <header className='headerDestop'>
      <div className='logo'>
        <h1>S.tylish</h1>
      </div>
      <ul className='menu-sec medium-14'>
        {titles.map((title, i) => {
          return (
            <li key={`product-${i}`} className='menu-tile'>
              {title}
            </li>
          );
        })}
      </ul>
      <div className='icons-sec'>
        <FontAwesomeIcon className='fa-icon' icon={faUser} />
        <FontAwesomeIcon className='fa-icon' icon={faMessage} />
        <FontAwesomeIcon className='fa-icon' icon={faCartShopping} />
      </div>
    </header>
  );
};

export default HeaderDestop;
