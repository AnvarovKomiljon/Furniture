import React, { useState, useEffect } from 'react';
import { Link, } from 'react-router-dom';
import axios from 'axios';

  

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://test-ecommerce-gamma.vercel.app/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products: ', error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <div className='flex items-center justify-center font-bold text-3xl text-[#3A3A3A]'>
        <h1>Our Products</h1>
      </div>
      <ul className='flex flex-wrap gap-6 items-center justify-center pt-10 bg-[#F4F5F7]'>
        {products.map(product => (
          <li className='w-[300px] h-[446px] space-x-5' key={product.id}>
            <Link to={`/productpage/${product.id}`}>
              <img className='w-[300px]' src={product.img} alt="" />
              <h3 className='text-[#3A3A3A] font-bold'>{product.title}</h3>
              <p className='text-[#9F9F9F]'>{product.subtitle}</p>
              <div className='flex space-x-5'>
              <p className='font-bold text-[#3A3A3A]'>Price: ${product.newPrice}</p>
              <p className='text-[#9F9F9F] line-through '>Old Price: ${product.oldPrice}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
