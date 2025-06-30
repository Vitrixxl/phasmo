import { Outlet, useLocation, useNavigate } from 'react-router';
import { Navbar } from './entity/_components/navbar';

export const AppLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  if (location.pathname == '/' || location.pathname == '') {
    navigate('/entities');
  }

  return (
    <div className='h-svh grid grid-rows-[auto_minmax(0,1fr)] gap-3 min-h-0 overflow-auto'>
      <Navbar />
      <Outlet />
    </div>
  );
};
