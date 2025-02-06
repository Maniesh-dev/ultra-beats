import Image from 'next/image'
import React from 'react'
import contactImg from '../../public/contact.png'
import ContactForm from './ContactForm'

const Footer = () => {
  return (
    <section>
      <div className='text-center text-2xl pt-6 text-gray-500 mt-20'>
        <p className='font-bold text-5xl'>CONTACT <span className='text-orange-600 font-semibold'>US</span></p>
      </div>
      <div className='flex flex-col px-2 justify-center items-center md:flex-row my-10 gap-12'>
        <Image className='w-full md:max-w-[350px]' src={contactImg} alt="" />
        <ContactForm/>
      </div>

      
    </section>
  )
}

export default Footer