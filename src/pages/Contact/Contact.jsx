import React from 'react'
import location from '../../assets/location.svg'
import phone from '../../assets/phone.svg'
import clock from '../../assets/clock.svg'
import trophy from '../../assets/trophy.svg'
import shipping from '../../assets/shipping.svg'
import guarantee from '../../assets/guarantee.svg'
import support from '../../assets/support.svg'
import { NavLink } from 'react-router-dom'

const Contact = () => {
  return (
    <div>
      <div className='ContactHero'></div>
      <section >
        <div className='flex flex-col items-center justify-center' >
          <h1 className='text-[32px] font-bold flex items-center justify-center mt-10'>Get In Touch With Us</h1>
          <p className='text-[20px] flex items-center justify-center mt-2 w-[730px] text-[#9F9F9F]'>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
        </div>
        <div className='flex justify-around mt-20'>
          <div className='w-[395px] h-[540px]'>
            <div className='flex gap-5 mt-10 ml-10'>
              <img src={location} alt="" />
              <div>
                <h2 className='font-semibold text-[20px]'>Address</h2>
                <p className='w-[212px]'>236 5th SE Avenue, New York NY10000, United States</p>
              </div>
            </div>
            <div className='flex gap-5 mt-10 ml-10'>
              <img src={phone} alt="" />
              <div>
                <h2 className='font-semibold text-[20px]'>Phone</h2>
                <p className='w-[212px]'>Mobile: +(84) 546-6789Hotline: +(84) 456-6789</p>
              </div>
            </div>
            <div className='flex gap-5 mt-10 ml-10'>
              <img src={clock} alt="" />
              <div>
                <h2 className='font-semibold text-[20px]'>Working Hours</h2>
                <p className='w-[212px]'>Monday-Friday: 9:00 - 22:00Saturday-Sunday: 9:00 - 21:00</p>
              </div>
            </div>
          </div>
          <div>
            <div className='flex flex-col gap-5 mt-10 pb-10'>
              <label className='text-[16px] font-bold'>Your Name </label>
              <input type="text" className='w-[413px] h-[75px] rounded-[10px] border-[1px] border-[#9F9F9F] outline-none' placeholder='John Doe' />
              <label className='text-[16px] font-bold'>Email address</label>
              <input type="email" className='w-[413px] h-[75px] rounded-[10px] border-[1px] border-[#9F9F9F] outline-none' placeholder='Abc@def.com' />
              <label className='text-[16px] font-bold'>Subject</label>
              <input type="text" className='w-[413px] h-[75px] rounded-[10px] border-[1px] border-[#9F9F9F] outline-none' placeholder='This is an optional' />
              <label className='text-[16px] font-bold'>Message</label>
              <textarea className='w-[527px] h-[120px] rounded-[10px] border-[1px] border-[#9F9F9F] outline-none resize-none' placeholder='Hi! I’d like to ask about'></textarea>
              <button className='bg-[#B88E2F] text-white w-[222px] h-[54px] mt-[46px] rounded-md'>Submit</button>
            </div>
          </div>
        </div>
      </section>

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
      <div className='border-[1px] border-solid border-]'>
        <h2 className='text-bottom mt-5 ml-10 p-10'>2023 furino. All rights reverved</h2>
      </div>
    </div>
  )
}

export default Contact
