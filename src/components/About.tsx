import Image from 'next/image'
import React from 'react'
import headphone from '../../public/headphone.png'

const About = () => {
  return (
    <div id='about' className='mt-20'>
      <div className='text-center text-2xl pt-6 text-gray-500'>
        <p className='font-bold text-5xl'>ABOUT <span className='text-orange-600 font-semibold'>US</span></p>
      </div>
      <div className='flex flex-col md:flex-row my-10 gap-12'>
        <div className='flex flex-col gap-6 justify-center  text-sm  dark:text-white/80 px-5 py-0'>
          <p className='border-b pb-5'>Welcome to Ultra Beats,we turns your visions into reality with personalized event planning services, specializing in weddings, birthday parties, corporate events, spiritual gatherings, and bachelor/bachelorette parties etc. Our dedicated team ensures that each event is unique and memorable, with meticulous attention to detail and a creative approach that reflects your personality and preferences. We are committed to delivering excellence and creating unforgettable experiences tailored just for you. 🎉</p>
          <b className='text-2xl dark:text-orange-600 text-black'>Our Vision</b>
          <p>we believe that every event should be a reflection of your personality and vision. Our personalized approach ensures that no two events are the same. With a keen eye for detail, innovative ideas, and a commitment to excellence, we turn your dreams into reality.</p>
        </div>
        <Image className='w-full md:max-w-[500px]' src={headphone} alt="" />
      </div>
    </div>
  )
}

export default About