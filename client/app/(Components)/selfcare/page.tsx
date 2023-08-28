import React, { Suspense } from 'react'
import Header from '../Header'
import Products from '../Products'
import { requestClothingFashionData } from '../request'
import Pagination from '../Pagination'
import Footer from '../Footer'

const Page = async ({searchParams}: any) => {
  const page = typeof searchParams?.page === "string" ? Number(searchParams?.page) : 1
  const brand = searchParams.brand
  const sort = searchParams.sort || ""
  const data = await requestClothingFashionData(
    {
      brand: brand,
      page: page,
      sort: sort
    }
  )
  return (
    <div className='bg-gray-950'>
            <Header></Header>
            <Products>
              {data}
              {sort}
              {brand}
            </Products>
            <Pagination>
              {data}
              {page}
              {sort}
              {brand}
            </Pagination>
            <div>
              <Footer></Footer>
            </div>
        </div>
  )
}

export default Page