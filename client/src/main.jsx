import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Products from './views/Products.jsx'
import ProductDetail from './views/ProductDetail.jsx'
import Home from './views/Home.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import ProductEdit from './componets/ProductEdit.jsx'
import { CssBaseline } from '@mui/material'


const router = createBrowserRouter([
  {path: "/",
     element: <App />, 
    children:[
      {
      path: "/", 
      element: <Home />
    },
    {
      path: "products/all",
      element: <Products />
    },
    {
      path: "products/:id",
      element: <ProductDetail/>
    },
    {
      path: "products/:id/edit",
      element: <ProductEdit/>
    },
    
  ] 
}]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CssBaseline />
    <RouterProvider router={router} />
  </StrictMode>,
)
