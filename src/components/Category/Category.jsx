import React from 'react'

const Category = ({ img, name }) => {
  return (
    <div className='flex flex-col ml-20'>
      <img src={img} alt="" />
      <h1 className='text-2xl font-bold flex justify-center'>{name}</h1>
    </div>
  )
}

export default Category
