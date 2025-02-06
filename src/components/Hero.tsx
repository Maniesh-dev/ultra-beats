import Image from 'next/image'
import React from 'react'
import hero from '../../public/hero.jpg'

const Hero = () => {
  return (
    <div id='home' className='w-full h-[550px] xl:max-h-screen relative overflow-hidden rounded-md'>
      <div className='w-full h-full'>
        <Image className='w-full h-full  rounded-xl object-cover object-center' src={hero} alt="hero Image"/>
      </div>
      <div className='relative -top-[40%] sm:-top-27 md:-top-[38%]  w-full flex flex-col items-center justify-center px-5 gap-4'>
        <h1 className='text-6xl sm:text-7xl md:text-8xl xl:text-9xl font-bold uppercase hero-text'>Ultra Beats</h1>
        <p className='text-white sm:text-center sm:text-xl'>
        Our vision is to create unforgettable, personalized events that reflect our clients' unique personalities and dreams. 🎉✨
        </p>
      </div>
    </div>
  )
}

export default Hero