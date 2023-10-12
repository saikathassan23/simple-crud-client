import { Outlet, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const MainLayout = () => {
  const navigation = useNavigate();
  return (
    <div>
      {navigation.state === 'loading' ? (
        <div className='h-screen w-screen flex items-center justify-center bg-red-400'>
          loading...
        </div>
      ) : (
        <>
          <Navbar />
          <Outlet />
        </>
      )}
    </div>
  );
};

export default MainLayout;
