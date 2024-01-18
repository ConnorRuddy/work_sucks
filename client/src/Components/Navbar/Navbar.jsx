import React, {useState} from 'react'
import './Navbar.css'
import logo from '../Assets/Photos/logo.jpeg'
import cart from '../Assets/Photos/cart_icon.png'
import { Link } from 'react-router-dom'

export const Navbar = () => {

  const[menu, setMenu] = useState("shop");

  return (
    <div className='navbar'>
      <div className='nav-logo'>
      <Link to='/'> <img src={logo} alt='' className='nav-img'onClick={()=>{setMenu('shop')}} /></Link>
      </div>
      <ul className="nav-menu"> 
        <li onClick={()=>{setMenu('mens')}}><Link style={{textDecoration: 'none' }} to='/mens'>Men</Link>{menu === 'mens'?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu('womens')}}><Link style={{textDecoration: 'none' }}to='/women'>Women</Link>{menu === 'womens'?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu('accessories')}}><Link style={{textDecoration: 'none' }}to='/accessories'>Accessories</Link>{menu === 'accessories'?<hr/>:<></>}</li>
      </ul>
      <div className='nav-login-cart'>
        <Link to ='/login'><button>Login</button></Link>
            <Link to='/cart'><img src={cart} alt=''/></Link>
            <div className="nav-cart-count">0</div>
        </div>
    </div>
  )
}
