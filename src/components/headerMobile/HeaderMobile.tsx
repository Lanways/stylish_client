// hooks
import { useState } from 'react';
// components
import BurgerMenu from '../burgerMenu/BurgerMenu';
// fontaswesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCartShopping,
  faMessage,
  faUser,
  faBars,
} from '@fortawesome/free-solid-svg-icons';
// img
import Logo from '../../assets/logo.png';
// styling
import './HeaderMobile.scss';

const HeaderMobile: React.FC = () => {
  const [MenuIsShow, setMenuIsShow] = useState(false);

  return (
    <>
      <header className='headerMobile'>
        <div className='icon-sec1'>
          <FontAwesomeIcon className='fa-icon' icon={faCartShopping} />
          <FontAwesomeIcon className='fa-icon' icon={faMessage} />
        </div>
        <div className='logo'>
          {/*<img src={Logo} alt='logo' />*/}
          <h1>S.tylish</h1>
        </div>
        <div className='icon-sec2'>
          <FontAwesomeIcon className='fa-icon' icon={faUser} />
          <FontAwesomeIcon className='fa-icon' icon={faBars} />
        </div>
      </header>
      <BurgerMenu />
    </>
  );
};

export default HeaderMobile;
