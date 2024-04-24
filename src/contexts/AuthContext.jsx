// react
import { createContext, useState, useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// package
import { decodeToken } from 'react-jwt';
// api
import { login } from '../api/auth';

const defaultAuthContext = {
  isAuthenticated: false, // 使用者是否登入的判斷依據，預設為 false，若取得後端的有效憑證，則切換為 true
  currentMember: null, // 當前使用者相關資料，預設為 null，成功登入後就會有使用者資料
  register: null, // 註冊方法
  login: null, // 登入方法
  logout: null, // 登入方法
  adminLogin: null,
  setGoogleAuth: null,
};

const AuthContext = createContext(defaultAuthContext);
export const useAuth = () => useContext(AuthContext);
export const AuthProvider = ({ children }) => {
  // 使用 useState 鉤子來追蹤使用者的登入狀態和當前使用者的資料
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [payload, setPayload] = useState(null);
  // 使用 useLocation 鉤子來獲取當前的 URL 路徑
  const { pathname } = useLocation();

  useEffect(() => {
    const checkTokenIsValid = async () => {
      const token = JSON.parse(localStorage.getItem('authToken'));
      console.log(token); //觀察資料用

      if (token) {
        setIsAuthenticated(true);
        const tempPayload = decodeToken(token);
        console.log(tempPayload); //觀察資料用;
        setPayload(tempPayload);
      } else {
        setIsAuthenticated(false);
        setPayload(null);
      }
    };
    checkTokenIsValid();
  }, [pathname]);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setGoogleAuth: (token) => {
          console.log(token);
          //const { accessToken, refreshToken } = token;
          const tempPayload = decodeToken(token);
          if (tempPayload) {
            setPayload(tempPayload);
            setIsAuthenticated(true);
            localStorage.setItem('authToken', JSON.stringify(token));
          } else {
            setPayload(null);
            setIsAuthenticated(false);
          }
        },
        currentMember: payload && {
          id: payload.id,
          name: payload.name,
          email: payload.email,
        },
        login: async (data) => {
          const { success, token } = await login({
            email: data.email,
            password: data.password,
          });

          const tempPayload = decodeToken(token);

          if (tempPayload) {
            setPayload(tempPayload);
            setIsAuthenticated(true);
            localStorage.setItem('authToken', JSON.stringify(token));
          } else {
            setPayload(null);
            setIsAuthenticated(false);
          }
          return success;
        },
        logout: () => {
          localStorage.removeItem('authToken');
          setPayload(null);
          setIsAuthenticated(false);
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
