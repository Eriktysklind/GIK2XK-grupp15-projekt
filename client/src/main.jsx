import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ProductEdit from './views/ProductEdit.jsx' 
import Products from './views/Products.jsx'
import ProductDetail from './views/ProductDetail.jsx'
import Home from './views/Home.jsx'
import {createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([{
  path: '/', 
  element: <App />,
  children: [
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/products/:id/edit',
      element: <ProductEdit />
    },
    {
      path: '/products/all',
      element: <Products/>
    },
    {
      path: '/products/id',
      element: <ProductDetail/>
    }
  ]
} 

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
