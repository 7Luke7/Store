import React from 'react'
import Rating from '../../../Rating'
import Image from 'next/image'
import Cart from '../../../CartComponent'

const SingleProduct = ({children}: any) => {
  const product = children
  console.log(product)
  return (
    <div>
      <div className='sm:hidden xs:hidden md:hidden flex mt-36 ml-60'>
      <Image src={product.single[0].thumbnail} className='h-80 w-96' width={500} height={520} alt={product.single.title + " Image"} />
      <div className="h-48">
          <h2 className="text-white pl-5 text-xl font-semibold">{product.single[0].title}</h2>
          <p className="ml-8 mt-3 text-sm font-medium text-slate-100">{product.single[0].description}</p>
          <div className="pl-8 flex flex-col h-full justify-evenly">
          <div className="flex items-end gap-2">
            <p className="text-gray-500 font-medium">Price:</p>
          <div className="flex flex-col text-gray font-medium">
              <p className='text-gray-600 line-through text-xs'>${
                Math.round((product.single[0].price / 100 )* product.single[0].price + product.single[0].price)
              }</p>
             <span className="text-white font-bold pl-2">${product.single[0].price}</span>
          </div>
          </div>
            <div className="flex items-center gap-2">
              <Rating rating={product.single[0].rating}></Rating>
            </div>
          <div>
          <p className="text-gray-500 mb-2 font-medium">In Stock: <span className="text-sm text-green-500">
            {product.single[0].stock}
          </span>
          </p>
          <Cart>
              {product.single[0]}
            </Cart>
          </div>
            
          </div>
          </div> 
    </div>
    <div className='lg:hidden xl:hidden 2xl:hidden grid xl:pl-0 place-items-center mt-12'>
         <div className='overflow-hidden  mb-10 hover:border hover:border-gray-900 rounded-t-xl w-80' key={product["_id"]}>
          <div className='relative h-52'>
            <Image alt={product.single.title + " Image"} src={product.single[0].thumbnail} sizes='w-full' priority={true} fill={true}></Image>
          </div>
          <div className='p-2 flex flex-col justify-between'>
          <div className='flex  justify-around'>
            <div>
              <h2 className='text-white'>{product.single[0].title}</h2>
              <p className='text-sm text-gray-500 w-7/12 font-normal'>{product.single[0].description}.slice(0, 40)...</p>
            </div>
            <div className='flex flex-col'>
              <p className='text-gray-600 line-through text-xs'>${
                Math.round((product.single[0].price / 100 )* product.single[0].price + product.single[0].price)
              }</p>
              <p className='text-slate-50 text-md pl-1'>${product.single[0].price}</p>
              <p className='text-gray-500 text-xs pl-1 pt-1'>{product.single[0].stock} in stock</p>
            </div>
          </div>
          <div className='flex justify-between items-center'>
          <div className='flex justify-center items-end space-x-1 md:items-center'>
            <Rating rating={product.single[0].rating}></Rating>
          </div>
          <div>
            <Cart>
            {product.single[0]}
            </Cart>
          </div>
          </div>
          </div>
        </div>
    </div>
    </div>
    
  )
}

export default SingleProduct