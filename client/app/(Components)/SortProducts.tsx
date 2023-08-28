"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const SortProducts = ({children}: any) => {
    const [sort, brand] = children
    const router = useRouter()
    const handleSelect = (e: any) => {
      router.push(`?page=1&${brand ? `brand=${brand}&sort=${e.currentTarget.value}` : `sort=${e.currentTarget.value}`}`)
    }
  return (
    <div className='text-right pr-10'>
        <select className='abosolute text-xs font-normal' onChange={handleSelect} defaultValue={sort}>
          <option value="featured">Featured</option>
          <option value="desc">Price: High to Low</option>
          <option value="asc">Price: Low to High</option>
          <option value="hrating">Avg. Review</option>
        </select>
    </div>
  )
}

export default SortProducts