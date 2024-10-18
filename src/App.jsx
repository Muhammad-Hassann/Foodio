import React, { useEffect, useRef } from 'react';
import { Header, Footer } from './components'
import { Outlet } from 'react-router-dom'
import usePageLoader from './hooks/usePageLoader';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css'

function App() {
  const isLoading = usePageLoader();
  const locomotive = new LocomotiveScroll()

  return (
    <>
    {isLoading ? (
      <div className="fixed top-0 left-0 w-full h-screen flex items-center justify-center z-[1000]">
        {/* Add your loading spinner or any loading animation here */}
        <h1>Loading...</h1>
      </div>
    ) : (
      <div data-scroll-container >
      <Header />
      <Outlet />
      <Footer />
    </div>
    )}
  </>
  )
}

export default App
