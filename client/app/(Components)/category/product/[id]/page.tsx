import React from 'react'
import SingleCatProduct from './SingleCatProduct'
import Header from '../../../Header'
import Footer from '../../../Footer'
import { requestSingleProduct } from '../../../request'
const page = async ({params}: any) => {
  
  const product = await requestSingleProduct(params.id)
  return (
    <div className='bg-gray-950 min-h-screen'>
      <Header></Header>
      <SingleCatProduct>
        {product}
      </SingleCatProduct>
      <Footer></Footer>
    </div>
  )
}

export default page