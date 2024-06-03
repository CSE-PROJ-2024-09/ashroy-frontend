import { Outlet, useLocation } from 'react-router-dom';
import AppHeader from '../components/layout/AppHeader';
import AppFooter from '../components/layout/AppFooter';
import { useEffect } from 'react';

const Root = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    console.log(pathname);
  }, [pathname]);

  return (
    <div className='h-100'>
      <AppHeader />
      <main className='container mt-3 h-100 mb-5'>
        <Outlet />
      </main>
      <AppFooter />
    </div>
  );
};

export default Root;
