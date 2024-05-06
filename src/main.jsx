import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './Component/HomePage/Home.jsx'
import Product from './Component/Product/Product.jsx'
import Blog from './Component/Blog/Blog.jsx'
import Contact from './Component/Contact/Contact.jsx'
import AboutUs from './Component/AboutUs/AboutUs.jsx'
import { Route , RouterProvider , createBrowserRouter , createRoutesFromElements } from 'react-router-dom'


const router =   createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element = {<App/>}>
    <Route path='' element = {<Home/>}/>
    <Route path='product' element = {<Product/>}/>
    <Route path='blog' element = {<Blog/>}/>
    <Route path='contact' element = {<Contact/>}/>
    <Route path='about' element = {<AboutUs/>}/>
  </Route>
)
)
ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
