import React from 'react'
import Rating from '../../../Rating'
import Image from 'next/image'
import Cart from '../../../CartComponent'

const SingleProduct = ({children}: any) => {
  const product = children
  return (
    <div className='flex mt-36 ml-60'>
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
  )
}

export default SingleProduct