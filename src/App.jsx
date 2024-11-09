import React, { useState, useEffect } from 'react';
import { Header, Footer } from './components';
import { Outlet } from 'react-router-dom';
import usePageLoader from './hooks/usePageLoader';
import { CartProvider } from './context/CartContext';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import Loader from './components/Loader';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [isLoading, setIsLoading] = useState(true); // New loading state
  const isPageLoading = usePageLoader();
  const locomotive = new LocomotiveScroll()

  useEffect(() => {
    if (!isPageLoading) {
      const timeout = setTimeout(() => setIsLoading(false), 2000); 
      return () => clearTimeout(timeout);
    }
  }, [isPageLoading]);

  return (
    <CartProvider>
      {isLoading ? (
        <Loader onComplete={() => setIsLoading(false)} />
      ) : (
        <div data-scroll-container>
          {/* <ScrollToTop /> */}
          <Header />
          <Outlet />
          <Footer />
        </div>
      )}
    </CartProvider>
  );
}

export default App;
