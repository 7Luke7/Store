"use client"
import Link from 'next/link'
import MenuNav from './MenuNav'

const Header = () => {  
  return (
    <div>
    <header className={`2xl:flex
    lg:pt-10 2xl:pt-10 xl:pt-10
     items-center
      2xl:px-28 xs:flex justify-between xs:p-5 sm:flex xl:flex xl:p-5 sm:p-5 md:flex md:p-5 lg:flex lg:p-5`}>
      <Link aria-label='Home page link' href="/">
        <h1 className='tracking-widest lg:text-xl text-white font-bold xl:text-xl text-3xl'>STORE</h1>
      </Link>
      <div className='xs:hidden sm:hidden md:hidden'>
        <MenuNav></MenuNav>
      </div>
      <div className='flex items-center relative gap-5 xs:gap-1 md:gap-1 lg:gap-1 xl:gap-1 sm:gap-1'>
      <Link aria-label='Navigate to cart' href="/cart?page=1">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
      </svg>
      </Link>
      </div>
    </header>
    <div className={`lg:hidden xl:hidden 2xl:hidden`}>
        <MenuNav></MenuNav>        
      </div>
    </div>
  )
}

export default Header