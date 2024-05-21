import React, { useState, useEffect } from 'react';
import Category from '../../components/Category/Category';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import Dining from '../../assets/Diningroom.svg';
import Living from '../../assets/Livingroom.svg';
import Bedroom from '../../assets/Bedroom.svg';
import Products from '../../components/Products/Products';

const backendUrl = 'https://test-ecommerce-gamma.vercel.app/categories';

const images = {
  'dining.png': Dining,
  'living.png': Living,
  'bedroom.png': Bedroom,
};

const Home = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(backendUrl, { method: 'GET' });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
        setCards(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <section className='hero'>
        <div className='pt-[153px] pl-[739px] pr-[39px]'>
          <div className=' w-[643px] h-[443px] pl-10  bg-[#FFF3E3]'>
            <h3 className='w-[123px] text-[16px] font-bold mt-2 pt-[62px]'>New Arrival</h3>
            <h1 className='w-[359px] text-[48px] font-bold text-[#B88E2F] '>Discover Our New Collection</h1>
            <p className='w-[420px] font-semibold mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
            <button className='bg-[#B88E2F] text-white w-[222px] h-[74px] mt-[46px]'>BUY NOW</button>
          </div>
        </div>
      </section>
      <div>
        <SectionHeader title='Browse The Range' subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit.' />
      </div>
      <div className='flex flex-row gap-4 my-4'>
        {cards.map((card, index) => (
          <Category key={index} name={card.name} img={images[card.img]} />
        ))}
      </div>
      <Products />
    </div>
  );
};

export default Home;
