//react
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// package
import Swal from 'sweetalert2';
//components
import Input from '../../components/input/Input';
//context
import { useAuth } from '../../contexts/AuthContext';
//api
import { googleLogin } from '../../api/auth';
// img
import googleLogo from '../../assets/google-icon.svg';
//style
import './LoginPage.scss';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const {
    login,
    isAuthenticated,
  }: {
    login: any;
    isAuthenticated: any;
  } = useAuth();

  const handleLogin = async () => {
    try {
      const success = await login({
        email,
        password,
      });

      if (success) {
        Swal.fire({
          position: 'top',
          title: '登入成功!',
          icon: 'success',
          showConfirmButton: true,
        });
        return;
      }
      Swal.fire({
        position: 'top',
        title: '登入失敗!',
        icon: 'error',
        showConfirmButton: true,
      });
    } catch (error) {
      console.error('[Login Failed]:', error);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await googleLogin();
    } catch (error) {
      console.error('[Login Failed]:', error);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/main');
    }
  }, [navigate, isAuthenticated]);

  return (
    <div className='login-container'>
      <div className='logo-container'>
        <span>S.tylish</span>
      </div>
      <div className='login-main'>
        <Input
          label='Email'
          type=''
          name=''
          placeholder={'請輸入Email'}
          value={email}
          onChange={(emailInputValue: string) => {
            setEmail(emailInputValue);
          }}
        />
        <Input
          label='密碼'
          type='password'
          name=''
          placeholder={'請輸入密碼'}
          value={password}
          onChange={(passwordInputValue: string) =>
            setPassword(passwordInputValue)
          }
        />
        <button onClick={handleLogin}>Login</button>
        <button className='googleBtn' onClick={handleGoogleLogin}>
          <img src={googleLogo} alt='google-logo' />
          <span className='bold-18'>Google登入</span>
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
