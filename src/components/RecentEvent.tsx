import React from 'react'

const RecentEvent = () => {
  return (
    <div id='recent-event' className='mt-10 sm:mt-4  sm:h-[400px] xl:h-[500px] w-full rounded-xl flex flex-col items-center justify-center gap-4 sm:flex-row p-5 border'>
      <div className='flex flex-col gap-4 sm:items-start max-w-[650px]'>
        <h1 className=' text-4xl sm:text-5xl md:text-8xl font-bold uppercase text-orange-700'>
          Recent Event
        </h1>
        <p className='dark:text-gray-400 text-black'> 
        "Elevate your experience with immersive, tech-driven events, 
        designed  to captivate your audience and leave a lasting impact."
          
        </p>
      </div>
      <div className='w-full h-full flex items-center'>
        <video className='object-cover object-center rounded-xl' loop muted autoPlay>
          <source src='/recent-event.mp4' type="video/mp4" />
        </video>
      </div>
    </div>
  )
}

export default RecentEvent