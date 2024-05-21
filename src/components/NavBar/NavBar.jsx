import React from 'react'
import { NavLink } from 'react-router-dom'
import navlogo from '../../assets/navlogo.svg'
import navimg1 from '../../assets/navimg1.svg'
import navimg2 from '../../assets/navimg2.svg'
import navimg3 from '../../assets/navimg3.svg'
import navimg4 from '../../assets/navimg4.svg'

const NavBar = () => {
  return (
    <div>
      <nav className=' w-full h-20 flex justify-between items-center'>
        <div className='ml-[54px]'>
          <img src={navlogo} alt="" />
        </div>
        <ul className='flex gap-[75px] font-semibold text-[16px]'>
          <li><NavLink to="/" activeClassName="activeclassname">Home</NavLink></li>
          <li><NavLink to="/contact" activeClassName="activeclassname">Contact</NavLink></li>
          <li><NavLink to="/checkout" activeClassName="activeclassname">Checkout</NavLink></li>
          <li><NavLink to="/card" activeClassName="activeclassname">Card</NavLink></li>
        </ul>
        <div className='flex cursor-pointer gap-[45px] mr-[100px]'>
          <a href="#"><img src={navimg1} alt="" /></a>
          <a href="#"><img src={navimg3} alt="" /></a>
          <a href="#"><img src={navimg4} alt="" /></a>
          <a href="#"><img src={navimg2} alt="" /></a>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
