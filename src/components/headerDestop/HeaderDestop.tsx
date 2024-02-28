//react
import { useNavigate } from 'react-router-dom';
//fontaswesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCartShopping,
  faMessage,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
//types
import { Category } from '../../types/type';
// styling
import './HeaderDestop.scss';

interface HeaderDestopProps {
  // setIsShow: (show: boolean) => void;
  setMenuId: (id: string) => void;
  categoryAll: Category;
}

const HeaderDestop: React.FC<HeaderDestopProps> = (props) => {
  const navigate = useNavigate();

  return (
    <header className='headerDestop'>
      <div className='logo'>
        <h1>S.tylish</h1>
      </div>
      <ul className='menu-sec medium-14'>
        {props.categoryAll?.map?.((type) => {
          return (
            <li
              key={`${type.id}`}
              className='menu-tile'
              onClick={() => {
                // props?.setIsShow(true);
                props?.setMenuId(`&categoryId=${type.id}`);
              }}
            >
              {type.name}
            </li>
          );
        })}
      </ul>
      <div className='icons-sec'>
        <FontAwesomeIcon
          className='fa-icon'
          icon={faUser}
          onClick={() => navigate('/login')}
        />
        <FontAwesomeIcon className='fa-icon' icon={faMessage} />
        <FontAwesomeIcon className='fa-icon' icon={faCartShopping} />
      </div>
    </header>
  );
};

export default HeaderDestop;
