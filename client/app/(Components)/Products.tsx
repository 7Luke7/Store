import Image from "next/image"
import Link from "next/link"
import Rating from "./Rating"
import Filter from "./Filter"
import { ProductsNotFoundError } from "../lib/exceptions"
import SortProducts from "./SortProducts"

const Products = ({children}: any) => {
  const [data, sort, brand] = children
  if (data.products.length === 0) {
    throw new ProductsNotFoundError()
  }

  console.log(data)
  
  const optionsArray = data.filterOptionsNoDuplicate.map((options: any) => {
    return {
      value: options,
      label: options,
      isChecked: false,
    }
  })
  return (
    <div className="flex sm:flex-col md:flex-col xs:flex-col mt-60 xs:mt-5 sm:mt-5 md:mt-5 items-start sm:items-center md:items-center xs:items-center">
        <Filter>
          {sort}
          {brand}
          {optionsArray}
        </Filter>
        <div className="flex flex-col xs:items-start md:items-start sm:items-start xs:mt-5 sm:mt-5 md:mt-5">
          <SortProducts>
            {sort}
            {brand}
          </SortProducts>
          <div className="flex ml-48 flex-col gap-20 xs:hidden sm:hidden md:hidden">
            {data.products.map((product: any, id: any) => {
              return <div key={id} className="flex hover:border hover:border-slate-600 overflow-hidden" style={{height: "240px"}}>
          <Link href={`product/${product._id}`} className="relative w-64">
          <Image src={product.thumbnail} sizes="w-full h-full" fill priority={true} alt="product-image"></Image>
          </Link>
          <div className="h-36">
          <Link href={`product/${product._id}`}>
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
      })}
    </div>  
    <div className="lg:hidden xl:hidden 2xl:hidden">
    <div className='grid gap-8  grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xl:pl-0 xs:grid-cols-none xs:grid-rows-4 justify-items-center xs:pl-0 sm:pl-0 md:pl-0 pl-12 mt-2'>
      {data.products.map((product: any) => {        
        console.log(product)
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
          
    </div>
  )
}

export default Products
