"use client"

import { useInView } from 'framer-motion'
import { BriefcaseIcon, Clock, PartyPopperIcon, TrophyIcon, User2Icon } from 'lucide-react'
import { useRef } from 'react'
import CountUp from "react-countup"

const stats = [
  {
    icon: <User2Icon />,
    title: "Happy Clients",
    count: 120
  },
  {
    icon: <Clock/>,
    title: "Hours Worked /week",
    count: 40
  },
  {
    icon: <PartyPopperIcon />,
    title: "Projects Completed",
    count: 150
  },
  {
    icon: <TrophyIcon />,
    title: "Awards Received",
    count: 11
  }
]
const Awards = () => {
  const ref = useRef<HTMLDivElement>(null)
  const isinView = useInView(ref)
  return (
    <section id='awards' className='mt-20'>
      <h1 className='sm:text-5xl text-4xl text-center font-bold sm:mb-20 mb-5 uppercase text-gray-600 border-b sm:border-none p-2'>Achievements</h1>
      <div className="mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((item, index) => (
            <div key={index} className="flex flex-col items-center gap-2 mb-12">
              <div ref={ref} className="border-orange-600/90 border w-[80px] h-[80px] md:w-[100px] md:h-[100px] mx-auto rounded-full p-1 mb-6">
                <div className="border-orange-600/30 border w-full h-full rounded-full flex justify-center items-center text-3xl font-medium">
                  {isinView && (<CountUp start={0} end={item.count} duration={6}/>)}
                </div>
              </div>
              <div className="flex justify-center items-center flex-col ">
                <div className="text-2xl mb-4">{item.icon}</div>
                <h4 className="text-lg">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Awards