import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Products from './views/Products.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

const router = createBrowserRouter([
  {path: "/", element: <App />},
  {path: "/products/all", element: <Products/>} ]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
