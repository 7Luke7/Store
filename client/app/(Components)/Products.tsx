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
  
  const optionsArray = data.filterOptionsNoDuplicate.map((options: any) => {
    return {
      value: options,
      label: options,
      isChecked: false,
    }
  })
  return (
    <div className="flex mt-60 items-start">
        <Filter>
          {sort}
          {brand}
          {optionsArray}
        </Filter>
        <div className="flex flex-col items-end">
          <SortProducts>
            {sort}
            {brand}
          </SortProducts>
          <div className="flex ml-48 flex-col gap-20">
            {data.products.map((product: any, id: any) => {
              return <div key={id} className="flex hover:border hover:border-slate-600 overflow-hidden" style={{height: "240px"}}>
          <Link href={`product/${product._id}`} className="relative w-64">
          <Image src={product.thumbnail} sizes="w-full h-full" fill priority={true} alt="product-image"></Image>
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
      })}
    </div>        
        </div>
          
    </div>
  )
}

export default Products
