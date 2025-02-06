import React from 'react'
const Footer = () => {
  return (
    <div className='md:px-20 border-t'>

      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-10 p-10 text-sm'>
        {/* ------- Left Side ------- */}
        <div>
          <h1 className='font-bold text-5xl'><span className='text-orange-600 font-bold text-5xl'>ULTRA</span> BEATS</h1>
          <p className='md:w-2/3 w-full text-white mt-5 leading-6'>
          "Elevate your experience with immersive, tech-driven events, 
          designed  to captivate your audience and leave a lasting impact."
          </p>
        </div>


        {/* ------- Center Side ------- */}
        <div>
          <p className='mb-5 text-xl font-medium'>COMPANY</p>
          <ul className='flex flex-col text-gray-600 gap-2'>
            <a href='#home'>Home</a>
            <a href='#recent-event'>Recent Event</a>
            <a href='#awards'>Awards</a>
            <a href='#about'>About us</a>
            <a href='#contact'>Contact us</a>
          </ul>
        </div>


        {/* ------- Ryt Side ------- */}
        <div>
          <p className='mb-5 text-xl font-medium'>Get In Touch</p>
          <ul className='flex flex-col text-gray-600 gap-2'>
            <li>+91 805 805 0013</li>
            <li>ultrabeats.sound@gmail.com</li>
            <li>Instagram: @ultrabeats</li>
          </ul>
        </div>
      </div>

      {/* ------------CopyRight----------- */}
      <hr />
      <div className='text-center text-gray-600 py-5 text-sm'>
        <p>Copyright &copy; 2025 - <b>Maniesh Sanwal</b> - All Right Reserved.</p>
        <p>Contact: +91 9587696134</p>
      </div>
    </div>
  )
}

export default Footer