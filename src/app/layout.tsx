import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router';

export const AppLayout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/entities');
  }, []);

  return (
    <div className='h-svh gap-3 min-h-0 overflow-auto p-4'>
      {/* <Navbar /> */}
      <Outlet />
    </div>
  );
};
