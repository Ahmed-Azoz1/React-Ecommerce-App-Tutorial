import React from 'react'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Products from './components/Products/Products'
import 'react-loading-skeleton/dist/skeleton.css'
import Product from './components/Product/Product'


const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/products/:id' element={<Product/>}/>
      </Routes>
    </>
  )
}

export default App
