import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Home from './pages/Home.jsx'
import Menu from './pages/Menu.jsx'
import About from './pages/About.jsx'
import BookNow from './pages/BookNow.jsx'
import OrderOnline from './pages/OrderOnline.jsx'
import Checkout from './pages/Checkout.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/menu",
        element: <Menu/>,
      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/order-online",
        element: <OrderOnline />,
      },
      {
        path: "/book-now",
        element: <BookNow />
      }, 
      {
        path: "/checkout",
        element: <Checkout />
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
