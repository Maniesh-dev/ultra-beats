import Image from 'next/image'
import React from 'react'
import bachelorsImg from '../../public/bachelors.jpg'
import birthdayImg from '../../public/birthday.png'
import corporateImg from '../../public/corporate.jpg'
import godImg from '../../public/god.jpeg'
import houseImg from '../../public/house.jpg'
import musicImg from '../../public/music.jpg'
import themeImg from '../../public/theme.jpg'
import weddingImg from '../../public/wedding.png'

const WhyChooseUs = () => {
  return (
    <section id='team' className='py-12 xl:h-[110vh]'>
      <div className='text-5xl my-4 mb-12 text-center text-gray-500'>
        <p>WHAT <span className='text-orange-600 font-semibold'>WE DO</span></p>
      </div>
      <div className='mx-auto h-full flex flex-col items-center justify-center'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-10 gap-12 md:gap-6 px-8'>
          <div className='flex flex-col items-center justify-center text-2xl gap-2 text-center text-gray-500 border-orange-600 border-b'>
            <Image className='w-full h-full rounded-xl object-cover object-center' src={weddingImg} alt="" width={500} height={500} />
            <p className='mb-2'>Weddings Events</p>
          </div>
          <div className='flex flex-col items-center justify-center text-2xl gap-2 text-center text-gray-500 border-orange-600 border-b'>
            <Image className='w-full h-full rounded-xl object-cover object-center' src={birthdayImg} alt="" width={500} height={500} />
            <p className='mb-2'>Birthday Parties</p>
          </div>
          <div className='flex flex-col items-center justify-center text-2xl gap-2 text-center text-gray-500 border-orange-600 border-b'>
            <Image className='w-full h-full rounded-xl object-cover object-center' src={bachelorsImg} alt="" width={500} height={500} />
            <p className='mb-2'>Bachelor's Parties</p>
          </div>
          <div className='flex flex-col items-center justify-center text-2xl gap-2 text-center text-gray-500 border-orange-600 border-b'>
            <Image className='w-full h-full rounded-xl object-cover object-center' src={corporateImg} alt="" width={500} height={500} />
            <p className='mb-2'>Corporate Parties</p>
          </div>
          <div className='flex flex-col items-center justify-center text-2xl gap-2 text-center text-gray-500 border-orange-600 border-b'>
            <Image className='w-full h-full rounded-xl object-cover object-center' src={houseImg} alt="" width={500} height={500} />
            <p className='mb-2'>House Parties</p>
          </div>
          <div className='flex flex-col items-center justify-center text-2xl gap-2 text-center text-gray-500 border-orange-600 border-b'>
            <Image className='w-full h-full rounded-xl object-cover object-center' src={musicImg} alt="" width={500} height={500} />
            <p className='mb-2'>Musical Events</p>
          </div>
          <div className='flex flex-col items-center justify-center text-2xl gap-2 text-center text-gray-500 border-orange-600 border-b'>
            <Image className='w-full h-full rounded-xl object-cover object-center' src={themeImg} alt="" width={500} height={500} />
            <p className='mb-2'>Theme Parties</p>
          </div>
          <div className='flex flex-col items-center justify-center text-2xl gap-2 text-center text-gray-500 border-orange-600 border-b'>
            <Image className='w-full h-full rounded-xl object-cover object-center' src={godImg} alt="" width={500} height={500} />
            <p className='mb-2'>God's Events</p>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs