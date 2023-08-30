import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Rating from '../Rating'
import Footer from '../Footer'
import Header from '../Header'
import { clear_cart_products, delete_cart_product, get_cart_products } from '../request'
import { revalidateTag } from 'next/cache'

const page = async ({searchParams}: any) => {
    const page = typeof searchParams?.page === "string" ? Number(searchParams?.page) : 1
    const data = await get_cart_products(page)

    const clearHandler = async () => {
      "use server"
      await clear_cart_products()
      revalidateTag("cartproducts")
    }

    const cartRemoveHandler = async (formData: FormData) => {
      "use server"
      formData.delete("name")
      for (const pair of formData.entries()) {
        await delete_cart_product(pair[0])
      }
      revalidateTag("cartproducts")
    }
    return <div className='bg-gray-950 min-h-screen'>
      {Array.isArray(data.products) && !data.products.length ? <div className='flex h-96 justify-center flex-col items-center gap-4'>
        <p className='text-3xl text-white'>
          Cart is empty
        </p>
        <Link href="/" className='p-2 px-2 text-sm text-white bg-purple-700 hover:bg-purple-800 rounded-sm'>
          Back to shopping
        </Link>
      </div> : <div className='bg-gray-950'>
          <Header></Header>
          <div className="mt-60">
          <div className='flex justify-end mr-20'>
          <form action={clearHandler}>
          <button type='submit' className="focus:outline-none flex text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">
            clear
          </button>
          </form>
          </div>
        <div className="xs:hidden md:hidden sm:hidden flex flex-col">
          <div className="flex ml-48 flex-col gap-20">
            {data.products.map((product: any, id: any) => {
              return <div key={id} className="flex hover:border hover:border-slate-600 w-10/12 justify-between">
               <div  className="flex overflow-hidden" style={{height: "240px"}}>
          <Link href={`product/${product._id}`} style={{width: "320px", height: "240px", position: "relative"}}>
          <Image src={product.thumbnail} fill priority={true} alt="product-image"></Image>
          </Link>
          <div className="h-36">
          <Link href={`/product/${product._id}`}>
          <h2 className="text-white pl-5 text-xl font-semibold">{product.title}</h2>
          </Link>
          <Link href={`product/${product._id}`}>
          <p className="ml-8 mt-3 text-sm font-medium text-white w-10/12">{product.description}</p>
          </Link>
          <div className="pl-8 flex flex-col h-full justify-evenly">
          <div className="flex gap-5">
            <p className="text-gray-500 font-medium">Price:</p>
          <div className="flex flex-col text-gray font-medium">
              <p className='text-gray-600 line-through text-xs'>${
                Math.round((product["price"] / 100 )* product["discountPercentage"] + product["price"])
              }</p>
             <span className="text-white font-bold pl-2">${product.price}</span>
          </div>
          </div>
            <div className="flex items-center gap-2">
              <Rating rating={product.rating}></Rating>
            </div>
          <p className="text-gray-500 font-medium">In Stock: <span className="text-sm text-green-500">
            {product.stock}
          </span>
          </p>
          
          </div>
          
          </div>
          
        </div>
        <form action={cartRemoveHandler}>
          <input type="hidden" name={product._id} />
          <button type="submit" className="focus:outline-none flex items-center h-8 text-white hover:bg-red-500 bg-red-400 focus font-medium rounded-2xl text-3xl px-3  mr-2 mb-2">
            -
          </button>  
        </form>
        </div>
      })}
    </div>        
        </div>
        <div className="lg:hidden xl:hidden 2xl:hidden">
    <div className='grid gap-8 grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xl:pl-0 xs:grid-cols-none xs:grid-rows-4 justify-items-center xs:pl-0 sm:pl-0 md:pl-0 pl-12 mt-2'>
      {data.products.map((product: any) => {        
        return <div className='overflow-hidden  mb-10 hover:border hover:border-gray-900 rounded-t-xl w-80 xl:w-72 sm:w-72 md:w-60' key={product["_id"]}>
          <Link href={`product/${product._id}`}>
          <div className='relative h-52'>
            <Image alt={product.title} src={product["thumbnail"]} sizes='w-full' priority={true} fill={true}></Image>
          </div>
          </Link>
          <div className='p-2 flex flex-col justify-between'>
          <div className='flex  justify-around'>
            <div>
              <Link href={`product/${product._id}`}>
              <h2 className='text-white'>{product["title"]}</h2>
              </Link>
              <Link href={`product/${product._id}`}>
              <p className='text-sm text-gray-500 w-7/12 font-normal'>{product["description"].slice(0, 40)}...</p>
              </Link>
            </div>
            <div className='flex flex-col'>
              <p className='text-gray-600 line-through text-xs'>${
                Math.round((product["price"] / 100 )* product["discountPercentage"] + product["price"])
              }</p>
              <p className='text-slate-50 text-md pl-1'>${product["price"]}</p>
              <p className='text-gray-500 text-xs pl-1 pt-1'>{product["stock"]} in stock</p>
            </div>
          </div>
          <div className='flex justify-between items-center'>
          <div className='flex justify-center items-end space-x-1 md:items-center'>
            <Rating rating={product["rating"]}></Rating>
          </div>
          </div>
          </div>
        </div>
      })}
    </div>      
    </div>
    </div>
    <div className="flex mt-10 justify-end py-10 lg:px-0 sm:px-6 px-4 mr-4">
                <div className="flex items-center justify-end border-t border-gray-200">
                
                    <div className={page - 1 === 0 ? "opacity-50 pointer-events-none flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer" : "flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer"}>
                    <Link href={`?page=${page -1}`} className='flex items-center '>
                        <svg width={14} height={8} viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.1665 4H12.8332" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M1.1665 4L4.49984 7.33333" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M1.1665 4.00002L4.49984 0.666687" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                            <p className="text-sm ml-3 font-medium leading-none ">Previous</p>
                            </Link>
                    </div>
                    <div className={page + 1 > Math.ceil(data.numberOfDocuments / 8) || page === Math.ceil(data.numberOfDocuments / 8) ? "opacity-50 pointer-events-none flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer" : "flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer"}>
                    <Link href={`?page=${page + 1}`} className='flex items-center gap-3'>
                            <p className="text-sm ml-3 font-medium leading-none ">Next</p>
                        <svg width={14} height={8} viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.1665 4H12.8332" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M9.5 7.33333L12.8333 4" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M9.5 0.666687L12.8333 4.00002" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        </Link>    
                    </div>
                </div>
            </div>
          <Footer></Footer>
        </div>}
    </div>
}

// length max = 8
// page max = x
// documents = 50
// documentsOnPage = x










export default page