import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-950 pt-40 p-20'>
      <div className='grid grid-cols-4 xs:grid-cols-2 xs:grid-rows-2 gap-2 justify-items-center'>
      <ul className='list-none underline text-blue-400 grid gap-2 xs:gap-0'>
        <li className='text-xs font-normal '>
          <Link aria-label='Link to Electronics categorie' href="/electronics?page=1">Electronics</Link>
        </li>
        <li className='text-xs font-normal '>
          <Link aria-label='Link to Food & Beverages categorie' href="/category/groceries?page=1">
            Groceries
          </Link>
        </li>   
        <li className='text-xs font-normal '>
          <Link aria-label='Link to Home & Furniture categorie' href="/home-furniture?page=1">
            Home & Furniture
          </Link>
        </li>
        <li className='text-xs font-normal '>
          <Link  aria-label='Link to Clothing & Fashion categorie' href="clothing-fashion?page=1">
            Clothing & Fashion
          </Link>
        </li>
        <li className='text-xs font-normal '>
          <Link  aria-label='Link to Accessories categorie' href="/category/sunglasses?page=1">
            Accessories
          </Link>  
        </li>     
      </ul>
      <ul className='list-none underline text-blue-400 grid gap-2 xs:gap-0'>
        <li className='text-xs font-normal '>
          <Link aria-label='Link to Self-care categorie' href="/category/skincare?page=1">
            Self-care
          </Link>
        </li>
        <li  aria-label='Link to Cars & parts categorie' className='text-xs font-normal'>
          <Link href="/cars-parts?page=1">Cars & Parts</Link>
        </li>   
        <li className='text-xs font-normal '>
          <Link  aria-label='Link to Cart' href="/cart?page=1">Cart</Link>
        </li>
        <li className='text-xs font-normal '>
          <Link  aria-label='Link to Home page' href="/">
            Home
          </Link>
        </li> 
          <li className='text-xs font-normal '>Lorem ipsum dolor sit amet.</li>
      </ul>
      <ul className='list-none underline text-blue-400  grid gap-2 xs:gap-0'>
        <li className='text-xs font-normal '>Lorem ipsum dolor sit amet.</li>
        <li className='text-xs font-normal '>Lorem ipsum dolor sit amet.</li>   
        <li className='text-xs font-normal '>Lorem ipsum dolor sit amet.</li>
        <li className='text-xs font-normal '>Lorem ipsum dolor sit amet.</li>
        <li className='text-xs font-normal '>Lorem ipsum dolor sit amet.</li> 
      </ul>
      <ul className='list-none underline text-blue-400 grid gap-2 xs:gap-2'>
        <li className='text-xs font-normal '>Lorem ipsum dolor sit amet.</li>
        <li className='text-xs font-normal '>Lorem ipsum dolor sit amet.</li>   
        <li className='text-xs font-normal '>Lorem ipsum dolor sit amet.</li>
        <li className='text-xs font-normal '>Lorem ipsum dolor sit amet.</li>
        <li className='text-xs font-normal '>Lorem ipsum dolor sit amet.</li> 
      </ul>
    </div>
      <div className='text-center'>
        <p className='text-gray-200 text-sm pt-10 font-normal'>Copyright © {new Date().getFullYear()}-{new Date().getFullYear()}</p>
        <p className='text-white'>Find me on:</p>
        <div className='flex justify-center gap-5 p-2'>
          <Link  aria-label='Link to developer github account' href="https://github.com/7Luke7" rel='noopener noreferrer' target='_blank'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="rgb(75 85 99)" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"/></svg>
          </Link>
          <Link  aria-label='Link to developer upwork account' href="https://www.upwork.com/freelancers/~017da134a5b443245c" rel='noopener noreferrer' target='_blank'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="rgb(22 163 74)" d="M17.47 6.07a4.54 4.54 0 0 0-4.38 3.69a19.9 19.9 0 0 1-2.28-4.9H8.55v6a2.14 2.14 0 1 1-4.28 0v-6L2 4.91v6a4.4 4.4 0 1 0 8.8-.05v-1a20.55 20.55 0 0 0 1.65 2.7l-1.38 6.61h2.32l1-4.81a5.61 5.61 0 0 0 3.11.89a4.57 4.57 0 0 0 0-9.14zm0 6.83a4.09 4.09 0 0 1-2.55-1l.23-.91v-.05c.16-1 .66-2.6 2.35-2.6a2.25 2.25 0 0 1 2.27 2.24a2.41 2.41 0 0 1-2.27 2.32z"/></svg>
          </Link>
          <Link  aria-label='Link to developer linkedin account' href="https://www.linkedin.com/in/luka-chikvaidze-594548261/" rel='noopener noreferrer' target='_blank'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="rgb(2 132 199)" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z"/></svg>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer