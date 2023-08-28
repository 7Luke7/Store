import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import Link from 'next/link'

const MenuNav = () => {
    const arr = [
        {
            Category: "Electronics",
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>,
            subCategories: [
              {
                text: "Laptop",
                link: "http://localhost:3000/category/laptops?page=1",
              },
              {
                text: "Smartphone",
                link: "http://localhost:3000/category/smartphones?page=1",
              },
              {
                text: "See all",
                link: "http://localhost:3000/electronics?page=1",
              },
            ]
        },
        {
            Category: "Self-care",
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
          
          ,
          subCategories: [
            {
              text: "Skin Care",
              link: "http://localhost:3000/category/skincare?page=1",
            },
          ]
        },
        {
            Category: "Food & Beverages",
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
          
          ,
          subCategories: [
            {
              text: "Groceries",
              link: "http://localhost:3000/category/groceries?page=1",
            },
          ]
        },
        {
            Category: "Home & Furniture",
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
          
          ,
          subCategories: [
            {
              text: "Home-decoration",
              link: "http://localhost:3000/category/home-decoration?page=1",
            },
            {
              text: "Furniture",
              link: "http://localhost:3000/category/furniture?page=1",
            },
            {
              text: "Lighting",
              link: "http://localhost:3000/category/lighting?page=1",
            },
            {
              text: "See all",
              link: "http://localhost:3000/home-furniture?page=1",
            },
          ]          
        },
        {
            Category: "Clothing & Fashion",
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>,
          subCategories: [
            {
              text: "Tops",
              link: "http://localhost:3000/category/tops?page=1",
            },
            {
              text: "Women dresses",
              link: "http://localhost:3000/category/womens-dresses?page=1",
            },
            {
              text: "Women shoes",
              link: "http://localhost:3000/category/womens-shoes?page=1",
            },
           
            {
              text: "Men shoes",
              link: "http://localhost:3000/category/mens-shoes?page=1",
            },
            {
              text: "Men watches",
              link: "http://localhost:3000/category/mens-watches?page=1",
            },
            {
              text: "Women watches",
              link: "http://localhost:3000/category/womens-watches?page=1",
            },
            {
              text: "Women Bags",
              link: "http://localhost:3000/category/womens-bags?page=1",
            },
            {
              text: "womens Jewellery",
              link: "http://localhost:3000/category/womens-jewellery?page=1",
            },
            {
              text: "See all",
              link: "http://localhost:3000/clothing-fashion?page=1",
            },
          ] 
        },
        {
            Category: "Cars & Parts",
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
          
          ,
          subCategories: [{
            text: "Automotive",
            link: "http://localhost:3000/category/automotive?page=1",
          },
          {
            text: "Motorcycle",
            link: "http://localhost:3000/category/motorcycle?page=1",
          },
          {
            text: "See all",
            link: "http://localhost:3000/cars-parts?page=1",
          },
        ] 
        },
        {
            Category: "Accessories",
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
          
          ,
          subCategories: [{
            text: "Sunglasses",
            link: "http://localhost:3000/category/sunglasses?page=1",
          },
        ] 
        },
    ]
  return (
      <div className='flex justify-center'>
        <div className='flex xs:flex-col  md:flex-col sm:flex-col'>
        {arr.map((item: any, id:any) => {
            return <Menu key={id} as="div" className="xs:w-80 mx-5 lg:mx-1.5 xs:pt-4 sm:pt-4 sm:w-96 md:pt-4 md:w-96 flexrelative inline-block">
            <div className='w-full'>
              <Menu.Button aria-label='expand categories button' className="flex lg:gap-0.3 gap-1.5 xs:justify-between sm:justify-between md:justify-between w-full items-end text-sm font-semibold text-white shadow-sm">
                <p className='text-xs'>
                {item.Category}
                </p>
                {item.icon}
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
                <div className="py-1 xl:flex xl:flex-col xl:absolute xl:z-10 xl:mt-2 xl:min-w-max xl:rounded-md xl:bg-white xl:shadow-xl xl:ring-1 xl:ring-black xl:ring-opacity-5 xl:focus:outline-none
                2xl:flex 2xl:flex-col 2xl:absolute 2xl:z-10 2xl:mt-2 2xl:min-w-max 2xl:rounded-md 2xl:bg-white 2xl:shadow-2xl 2xl:ring-1 2xl:ring-black 2xl:ring-opacity-5 2xl:focus:outline-none
                 lg:flex lg:flex-col lg:absolute lg:z-10 lg:mt-2 lg:min-w-max lg:rounded-md lg:bg-white lg:shadow-lg lg:ring-1 lg:ring-black lg:ring-opacity-5 lg:focus:outline-none">
                  {item.subCategories.map((s: any, id: any) => {
                    return <Menu.Item as="div" key={id} className="p-1">
                    {({ active }) => (
                      <Link aria-label='navigate to other categories'
                        href={s.link}
                        className={active ? 'text-sm pl-2 px-4 text-gray-800 font-semibold' : 'mt-4 pl-2 px-4 text-sm text-gray-500 font-semibold'}>
                        {s.text}
                      </Link>
                    )}
                  </Menu.Item>
                  })}
                </div>
            </Transition>
          </Menu>
        })}
    </div>
      </div>
  )
}

export default MenuNav