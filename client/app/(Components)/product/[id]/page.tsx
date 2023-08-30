import React from 'react'
import Header from '../../Header'
import Footer from '../../Footer'
import SingleProduct from './(SingleProductComponents)/SingleProduct'
import { requestSingleProduct } from '../../request'

const page = async ({params}: any) => {
  console.log(params)
  const product = await requestSingleProduct(params.id)
  return (
    <div className='bg-gray-950 min-h-screen'>
      <Header></Header>
      <SingleProduct>
        {product}
      </SingleProduct>
      <Footer></Footer>
    </div>
  )
}

export default page