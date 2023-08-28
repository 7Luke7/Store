import React from 'react'
import { requestHomeFurnitureData } from '../request'
import Products from '../Products'
import Header from '../Header'
import Pagination from '../Pagination'
import Footer from '../Footer'

const Page = async ({searchParams}: any) => {
  const page = typeof searchParams?.page === "string" ? Number(searchParams?.page) : 1
  const brand = searchParams.brand
  const sort = searchParams.sort || ""
  const data = await requestHomeFurnitureData(
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
              {sort}
              {page}
              {brand}
            </Pagination>
            <div>
            <Footer></Footer>
            </div>
        </div>
  )
}

export default Page