"use client"
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const Filter = ({children}: any) => {
  const [sort, brand, optionsArray] = children 
  const [checkedBrand, setCheckedBrand] = useState<any>([
      {
        id: "brand",
        name: "Brands",
        options: optionsArray
      }
    ])  

  const [hasFiltered, setHasFiltered] = useState<any>(false)
  const router = useRouter()
    useEffect(() => {
      if (brand === "") {
        router.replace("?page=1&sort=featured")
      } else if (brand) {
        const queryBrand = brand.split(",")
           const newCheckedBrands = checkedBrand.map((item: any) => {
            item.options.map((opt: any) => {
              for (let i = 0; i < queryBrand.length; i++) {
                if (opt.value === queryBrand[i]) {
                  opt.isChecked = true
                }
              }
            })
            return item
          })
        setCheckedBrand(newCheckedBrands)
      }
    }, [brand])

    const SubmitFilter = async (e: any) => {
    e.preventDefault()
    const arr:string[] = []
    checkedBrand.forEach((it: any) => {
      it.options.forEach((brand: any) => {
          if (brand.isChecked) {
            arr.push(brand.value)
          }
      })
    })
    router.push(`?page=1&brand=${arr}&sort=${sort}`)
  }

  // Sets clicked filter>option to true if option is already checked it will uncheck it.
  const handleCheckbox = (e: any) => {
    setHasFiltered(true)
    const handledvalues = checkedBrand.map((it: any) => {
      it.options.forEach((brand: any) => {
        if (e.target.value === brand.value) {
          if (brand.isChecked) {
            brand.isChecked = false
          } else if (brand.isChecked === false) {
            brand.isChecked = true
          }
          return brand

        }
      })
      return it
    })
    setCheckedBrand(handledvalues)
    }
  return (
    <div className={`w-3/12`}>
            <form onSubmit={SubmitFilter} className='flex w-10/12 flex-col justify-between'>
            {checkedBrand?.map((section: any, id: any) => (
              <div key={id}>
                    <div className="py-5 pl-5 pr-3 flex flex-col"> 
                      {/* :::Category name */}
                      <button className="flex items-center justify-between">
                        <span className="text-base text-gray-700 font-semibold">Featured {section.name}</span>
                      </button>
                        <div className="mt-5 justify-center">
                          {section.options.map((option: any) => {
                            return <div className="m-3 flex items-center">
                              <input type="checkbox" onChange={handleCheckbox} name={option.label} id={option.label} defaultValue={option.value} defaultChecked={option.isChecked} checked={option.checked} className={`form-checkbox w-4 h-4 rounded-full border-none focus:ring-gray-200`} />
                              <label htmlFor={option.label} className='text-gray-50 font-normal pl-2 text-xs'>{option.value}</label>
                            </div>
                          })
                          }
                        </div>
                    </div>
                </div>
            ))
            }
            <button disabled={hasFiltered ? false : true} type='submit' className='bg-green-500 text-slate-50 text-md rounded-sm font-bold tracking-widest w-full p-2'>
              Filter
            </button>
            </form>
          </div>
  )
}

export default Filter