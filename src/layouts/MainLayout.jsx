import { Outlet, useLocation } from 'react-router';
import Header from '../components/Header';
import Footer from '../components/Footer';

function MainLayout() {
  const location = useLocation();

  const hideHeaderFooterRoutes = ['/'];


  const shouldHideHeaderFooter = hideHeaderFooterRoutes.includes(location.pathname);

  return (
    <div>
      {!shouldHideHeaderFooter && <Header />}
      <main className={`container mx-auto ${shouldHideHeaderFooter ? 'py-0' : 'py-0'}`}>
        <Outlet />
      </main>
      {!shouldHideHeaderFooter && <Footer />}
    </div>
  );
}

export default MainLayout;
