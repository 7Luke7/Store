import { Montserrat } from 'next/font/google'
import React from 'react'

const montserrat = Montserrat({subsets: ["latin"], weight: "500"})

const LandingHero = () => {
  return (
    <div className={montserrat.className}>
      <div className='text-center flex flex-col items-center gap-4'>
        <h1 className='text-5xl xs:text-xl sm:text-xl md:text-3xl font-semibold text-slate-100'>We have the largest market in Europe</h1>
        <p className='text-md font-medium xs:text-sm md:text-sm sm:text-sm text-center text-gray-500 xs:w-10/12 lg:w-8/12 md:w-10/12 sm:w-10/12 xl:w-6/12 w-4/12'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae pellentesque magna, ut pharetra augue. In eu dui rutrum, varius purus at, sodales leo. Suspendisse id est ex. Duis suscipit quis nunc sit amet consectetur. 
        </p>
    </div>
    </div>
  )
}

export default LandingHero