import React from 'react'

const SectionHeader = ({ title, subtitle }) => {
  return (
    <div className='text-center my-4'>
      <h1 className='text-2xl font-bold'>{title}</h1>
      <p className='text-gray-400'>{subtitle}</p>
    </div>
  )
}

export default SectionHeader
