import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './Component/Home.jsx'
import Produncts from './Component/Produncts.jsx'
import Product from './Component/Product.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path :"/products",
    element : <Produncts/>
  },
  {
    path :'/product',
    element : <Product/>
  }
])

createRoot(document.getElementById('root')).render(

  <RouterProvider router = {router}/>

)
