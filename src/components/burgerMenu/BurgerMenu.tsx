// fontaswesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
// styling
import './BurgerMenu.scss';

const titles = [
  '所有商品',
  '本月新品',
  '夏日渡假風',
  '限時優惠',
  '熱銷商品',
  '現貨商品區',
];

const BurgerMenu: React.FC = () => {
  return (
    <>
      {false && (
        <div className='burgerMenu'>
          <div className='menu-overlay'></div>
          <div className='menu-container'>
            <div>
              <FontAwesomeIcon icon={faXmark} />
            </div>
            <ul>
              {titles.map((title: string) => {
                return <li className='menu-tile'>{title}</li>;
              })}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default BurgerMenu;
