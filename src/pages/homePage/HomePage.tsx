import { useAuth } from '../../contexts/AuthContext';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/main');
    } else {
      navigate('/login');
    }
  }, [navigate, isAuthenticated]);

  return (
    <div>
      <p>home</p>
    </div>
  );
};

export default HomePage;
