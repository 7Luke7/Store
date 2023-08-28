import React from 'react'
import Header from '../../Header'
import Products from '../../Products'
import Footer from '../../Footer'
import { requestProductsByCategory } from '../../request'
import Pagination from '../../Pagination'

const page = async ({params, searchParams}: any) => {
  const page = typeof searchParams?.page === "string" ? Number(searchParams?.page) : 1
  const brand = searchParams.brand
  const sort = searchParams.sort || ""
  const data = await requestProductsByCategory(
    {
      brand: brand,
      page: page,
      sort: sort,
      category: params.category
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
      <Footer></Footer>
    </div>
  )
}

export default page