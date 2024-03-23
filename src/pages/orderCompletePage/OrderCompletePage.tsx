//react
import { useLocation, useNavigate } from 'react-router-dom';
//img
import checkIcon from '../../assets/check_icon.png';
//style
import './OrderCompletePage.scss';

const OrderCompletePage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  return (
    <div className='order-complete-page'>
      <div className='order-complete-main'>
        <img src={checkIcon} alt='check-icon' />
        <div className='complete'>訂購完成</div>
        <div className='price'>總金額: ${state}</div>
        <div className='status'>訂單狀態: 處理中</div>
        <div className='navigate' onClick={() => navigate('/*')}>
          回到首頁
        </div>
      </div>
    </div>
  );
};

export default OrderCompletePage;
