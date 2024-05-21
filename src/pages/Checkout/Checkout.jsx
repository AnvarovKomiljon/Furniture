import React, { useState } from 'react';
import trophy from '../../assets/trophy.svg';
import shipping from '../../assets/shipping.svg';
import guarantee from '../../assets/guarantee.svg';
import support from '../../assets/support.svg';
import { NavLink } from 'react-router-dom';

const Checkout = () => {
  const [billingDetails, setBillingDetails] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    country: '',
    streetAddress: '',
    townCity: '',
    province: '',
    zipCode: '',
    phone: '',
    email: '',
    additionalInfo: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBillingDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      <div className='CheckoutHero'></div>
      <section className='flex justify-around '>
        <div className='flex flex-col w-[608px] mt-20 ml-20 space-y-5'>
          <h1 className='text-[48px] font-bold'>Billing details</h1>
          <div className='flex space-x-5'>
            <div className='flex flex-col'>
              <label className='flex text-[16px] font-bold '>First Name</label>
              <input
                type='text'
                name='firstName'
                value={billingDetails.firstName}
                onChange={handleChange}
                className='w-[211px] h-[75px] rounded-[10px] border-[1px] border-[#9F9F9F] outline-none'
              />
            </div>
            <div className='flex flex-col'>
              <label className='text-[16px] font-bold'>Last Name</label>
              <input
                type='text'
                name='lastName'
                value={billingDetails.lastName}
                onChange={handleChange}
                className='w-[211px] h-[75px] rounded-[10px] border-[1px] border-[#9F9F9F] outline-none'
              />
            </div>
          </div>
          <label className='text-[16px] font-bold'>Company Name (Optional)</label>
          <input
            type='text'
            name='companyName'
            value={billingDetails.companyName}
            onChange={handleChange}
            className='w-[413px] h-[75px] rounded-[10px] border-[1px] border-[#9F9F9F] outline-none'
          />
          <label className='text-[16px] font-bold'>Country / Region</label>
          <input
            type='text'
            name='country'
            value={billingDetails.country}
            onChange={handleChange}
            className='w-[413px] h-[75px] rounded-[10px] border-[1px] border-[#9F9F9F] outline-none'
            placeholder='Sri Lanka'
          />
          <label className='text-[16px] font-bold'>Street address</label>
          <input
            type='text'
            name='streetAddress'
            value={billingDetails.streetAddress}
            onChange={handleChange}
            className='w-[413px] h-[75px] rounded-[10px] border-[1px] border-[#9F9F9F] outline-none'
          />
          <label className='text-[16px] font-bold'>Town / City</label>
          <input
            type='text'
            name='townCity'
            value={billingDetails.townCity}
            onChange={handleChange}
            className='w-[413px] h-[75px] rounded-[10px] border-[1px] border-[#9F9F9F] outline-none'
          />
          <label className='text-[16px] font-bold'>Province</label>
          <input
            type='text'
            name='province'
            value={billingDetails.province}
            onChange={handleChange}
            className='w-[413px] h-[75px] rounded-[10px] border-[1px] border-[#9F9F9F] outline-none'
          />
          <label className='text-[16px] font-bold'>Zip code</label>
          <input
            type='text'
            name='zipCode'
            value={billingDetails.zipCode}
            onChange={handleChange}
            className='w-[413px] h-[75px] rounded-[10px] border-[1px] border-[#9F9F9F] outline-none'
          />
          <label className='text-[16px] font-bold'>Phone</label>
          <input
            type='text'
            name='phone'
            value={billingDetails.phone}
            onChange={handleChange}
            className='w-[413px] h-[75px] rounded-[10px] border-[1px] border-[#9F9F9F] outline-none'
          />
          <label className='text-[16px] font-bold'>Email address</label>
          <input
            type='text'
            name='email'
            value={billingDetails.email}
            onChange={handleChange}
            className='w-[413px] h-[75px] rounded-[10px] border-[1px] border-[#9F9F9F] outline-none'
          />
          <input
            type='text'
            name='additionalInfo'
            value={billingDetails.additionalInfo}
            onChange={handleChange}
            placeholder='Additional information'
            className='w-[413px] h-[75px] rounded-[10px] border-[1px] border-[#9F9F9F] outline-none'
          />
        </div>
        <div className='flex space-x-40 mt-40 w-[608px]'>
          <ul className='space-y-10'>
            <li className='text-[24px] font-semibold'>Product</li>
            <li className='font-semibold'>Asgaard sofa x 1</li>
            <li className='font-semibold'>Subtotal</li>
            <li className='font-semibold'>Total</li>
          </ul>
          <ul className='space-y-10'>
            <li className='text-[24px] font-semibold'>Subtotal</li>
            <li>Rs. 250,000.00</li>
            <li>Rs. 250,000.00</li>
            <li className='text-[24px] font-bold text-[#B88E2F]'>Rs. 250,000.00</li>
          </ul>
        </div>
      </section>
      <div className='h-[270px] bg-[#FAF3EA] mt-10 flex items-center justify-around'>
        <div className='flex gap-5 items-center'>
          <img src={trophy} alt='' />
          <div>
            <h2 className='font-bold text-[25px]'>High Quality</h2>
            <p className='text-[#9F9F9F]'>crafted from top materials</p>
          </div>
        </div>
        <div className='flex gap-5 items-center'>
          <img src={guarantee} alt='' />
          <div>
            <h2 className='font-bold text-[25px]'>Warranty Protection</h2>
            <p className='text-[#9F9F9F]'>Over 2 years</p>
          </div>
        </div>
        <div className='flex gap-5 items-center'>
          <img src={shipping} alt='' />
          <div>
            <h2 className='font-bold text-[25px]'>Free Shipping</h2>
            <p className='text-[#9F9F9F]'>Order over 150 $</p>
          </div>
        </div>
        <div className='flex gap-5 items-center'>
          <img src={support} alt='' />
          <div>
            <h2 className='font-bold text-[25px]'>24 / 7 Support</h2>
            <p className='text-[#9F9F9F]'>Dedicated support</p>
          </div>
        </div>
      </div>
      <section className='border-[1px] border-solid border-[#E5E5E5] mt-[90px] flex justify-around p-20'>
        <div className='flex flex-col '>
          <h1 className='font-bold text-[24px] mt-[48px] '>Funiro.</h1>
          <p className='w-[275px] opacity-60 mt-[50px]'>
            400 University Drive Suite 200 Coral Gables,FL 33134 USA
          </p>
        </div>
        <ul>
          <li className='font-bold mt-10 text-[16px] text-[#9F9F9F]'>Links</li>
          <li className='font-bold mt-10 text-[16px] '>
            <NavLink to={'/'}>Home</NavLink>
          </li>
          <li className='font-bold mt-5 text-[16px] '>
            <NavLink to={'/shop'}>Shop</NavLink>
          </li>
          <li className='font-bold mt-5 text-[16px] '>
            <NavLink to={'/about'}>About</NavLink>
          </li>
          <li className='font-bold mt-5 text-[16px] '>
            <NavLink to={'/contact'}>Contact</NavLink>
          </li>
        </ul>
        <ul className='ml-20'>
          <li className='font-bold mt-10 text-[16px] text-[#9F9F9F]'>Help</li>
          <li className='font-bold mt-10 text-[16px]'>
            <NavLink to={'/'}>Payment Options</NavLink>
          </li>
          <li className='font-bold mt-5 text-[16px]'>
            <NavLink to={'/'}>Returns</NavLink>
          </li>
          <li className='font-bold mt-5 text-[16px]'>
            <NavLink to={'/'}>Privacy Policies</NavLink>
          </li>
        </ul>
        <div>
          <h2 className='font-bold mt-10 text-[16px] text-[#9F9F9F] '>Newsletter</h2>
          <div className='flex mt-10 underline '>
            <input type='email' placeholder='Enter your email' className='outline-none w-[173px]' />
            <button>Subscribe</button>
          </div>
        </div>
      </section>
      <div className='border-[1px] border-solid border-]'>
        <h2 className='text-bottom mt-5 ml-10 p-10'>2023 furino. All rights reverved</h2>
      </div>
    </div>
  );
};

export default Checkout;
