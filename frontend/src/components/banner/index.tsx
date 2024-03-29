import React from 'react'
import banner from '../../assets/banner.webp';

const Banner = () => {
  return (
    <div className='flex items-center justify-center'>
      <img src={banner} alt="Banner" />
    </div>
  )
}

export default Banner