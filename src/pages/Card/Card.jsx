import React from 'react';
import { NavLink } from 'react-router-dom';
import CartProduct from '../../assets/CartProduct.svg';
import logo from '../../assets/logo.svg';
import Trashicon from '../../assets/Trashicon.svg';
import trophy from '../../assets/trophy.svg';
import shipping from '../../assets/shipping.svg';
import guarantee from '../../assets/guarantee.svg';
import support from '../../assets/support.svg';

const Card = () => {
  return (
    <div>
      <div className='CartHero'></div>
      <div className='flex gap-10'>
        <div className='flex flex-col  mt-10 ml-[100px]'>
          <div className='w-[855px] h-[55px] justify-around items-center bg-[#F9F1E7] flex pl-[100px]'>
            <h2></h2>
            <h2 className=' font-bold text-[16px]'>Product</h2>
            <h2 className=' font-bold text-[16px]'>Price</h2>
            <h2 className=' font-bold text-[16px]'>Quantity</h2>
            <h2 className=' font-bold text-[16px]'>Subtotal</h2>
            <h2></h2>
          </div>
          <div className='flex items-center w-[855px] justify-around mt-10 '>
            <img src={CartProduct} alt="" width={108} height={105} />
            <h3 className='text-[#9F9F9F] '>Asgaard sofa</h3>
            <h3 className='text-[#9F9F9F]'>Rs. 250,000.00</h3>
            <img src={logo} alt="" className='w-[24px] h-[24px] cursor-pointer' />
            <h3 className="font-semibold">Rs. 250,000.00</h3>
            <img src={Trashicon} alt="" className='w-[24px] h-[24px] cursor-pointer' />
          </div>
        </div>
        <div className='  w-[395px] h-[390px] bg-[#F9F1E7] justify-center mt-10 p-5 '>
          <div className='flex justify-center'>
            <h1 className='font-bold text-[32px]'>Cart Totals</h1>
          </div>
          <div className='flex justify-around mt-[60px]'>
            <h2 className='font-bold text-[16px]'>Subtotal</h2>
            <p className='text-[#9F9F9F] font-semibold'>Rs. 250,000.00</p>
          </div>
          <div className='flex justify-around mt-10'>
            <h2 className='font-bold text-[16px]'>Total</h2>
            <p className='text-[#B88E2F] text-[20px] font-semibold'>Rs. 250,000.00</p>
          </div>
          <div className='flex justify-center '>
            <NavLink to="/checkout"> <button className='w-[220px] h-[60px] border-[1px] border-[#000000] rounded-[15px] font-semibold trext-[20px] mt-10'>Checkout</button></NavLink>
          </div>
        </div>
      </div>
      <div className='h-[270px] bg-[#FAF3EA] mt-10 flex items-center justify-around'>
        <div className='flex gap-5 items-center'>
          <img src={trophy} alt="" />
          <div>
            <h2 className='font-bold text-[25px]'>High Quality</h2>
            <p className='text-[#9F9F9F]'>crafted from top materials</p>
          </div>
        </div>
        <div className='flex gap-5 items-center'>
          <img src={guarantee} alt="" />
          <div>
            <h2 className='font-bold text-[25px]'>Warranty Protection</h2>
            <p className='text-[#9F9F9F]'>Over 2 years</p>
          </div>
        </div>
        <div className='flex gap-5 items-center'>
          <img src={shipping} alt="" />
          <div>
            <h2 className='font-bold text-[25px]'>Free Shipping</h2>
            <p className='text-[#9F9F9F]'>Order over 150 $</p>
          </div>
        </div>
        <div className='flex gap-5 items-center' >
          <img src={support} alt="" />
          <div>
            <h2 className='font-bold text-[25px]'>24 / 7 Support</h2>
            <p className='text-[#9F9F9F]'>Dedicated support</p>
          </div>
        </div>
      </div>

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
            <NavLink to={"/shop"}>Shop</NavLink>
          </li>
          <li className='font-bold mt-5 text-[16px] '>
            <NavLink to={"/about"}>About</NavLink>
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
      <div className='border-[1px] border-solid border-[#E5E5E5] mt-5'>
        <h2 className='text-bottom mt-5 ml-10 p-10'>2023 furino. All rights reverved</h2>
      </div>
    </div>
  );
};

export default Card;
