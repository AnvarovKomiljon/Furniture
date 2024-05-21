import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <section className='border-[1px] border-solid border-[#E5E5E5] mt-[90px] flex justify-around p-20'>
        <div className='flex flex-col '>
          <h1 className='font-bold text-[24px] mt-[48px] '>Funiro.</h1>
          <p className='w-[275px] opacity-60 mt-[50px]'>400 University Drive Suite 200 Coral Gables,FL 33134 USA</p>
        </div>
        <ul>
          <li className='font-bold mt-10 text-[16px] text-[#9F9F9F]'>
            Links
          </li>
          <li className='font-bold mt-10 text-[16px] '>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li className='font-bold mt-5 text-[16px] '>
            <NavLink to={"/card"}>Card</NavLink>
          </li>
          <li className='font-bold mt-5 text-[16px] '>
            <NavLink to={"/checkout"}>Checkout</NavLink>
          </li>
          <li className='font-bold mt-5 text-[16px] '>
            <NavLink to={"/contact"}>Contact</NavLink>
          </li>
        </ul>
        <ul className='ml-20'>
          <li className='font-bold mt-10 text-[16px] text-[#9F9F9F]'>
            Help
          </li>
          <li className='font-bold mt-10 text-[16px]'>
            <NavLink to={"/"} >Payment Options</NavLink>
          </li>
          <li className='font-bold mt-5 text-[16px]'>
            <NavLink to={"/"}>Returns</NavLink>
          </li>
          <li className='font-bold mt-5 text-[16px]'>
            <NavLink to={"/"}>Privacy Policies</NavLink>
          </li>
        </ul>
        <div>
          <h2 className='font-bold mt-10 text-[16px] text-[#9F9F9F] '>Newsletter</h2>
          <div className='flex mt-10 underline '>
            <input type="email" placeholder="Enter your email" className='outline-none w-[173px]' />
            <button>Subscribe</button>
          </div>
        </div>
      </section>
      <div className='border-[1px] border-solid border-]'>
        <h2 className='text-bottom mt-5 ml-10 p-10'>2023 furino. All rights reverved</h2>
      </div>
    </div>
  )
}

export default Footer
