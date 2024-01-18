import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Navbar } from './Components/Navbar/Navbar';
import { Shop } from './Pages/Shop'
import { Product } from './Pages/Product'
import { Cart } from './Pages/Cart'
import { LoginSignup } from './Pages/LoginSignup'
import { Footer } from './Components/Footer/Footer'
import { ShopCategory } from './Pages/ShopCategory';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Shop/>}/>
      <Route path='/mens' element={<ShopCategory category='men'/>}/>
        <Route path='/women' element={<ShopCategory category='women'/>}/>
        <Route path='/accessories' element={<ShopCategory  category='accessories'/>}/>
      <Route path='/product' element={<Product/>}>
        <Route path=':productId' element={<Product/>}/>
      </Route>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
