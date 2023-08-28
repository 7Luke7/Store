import Link from 'next/link';
  
const Pagination = ({children}: any) => {
    const [data, sort, page, brand] = children
    return (
        <>
            <div className="flex mt-10 justify-end py-10 lg:px-0 sm:px-6 px-4 mr-4">
                <div className="flex items-center justify-end border-t border-gray-200">
                
                    <div className={page - 1 === 0 ? "opacity-50 pointer-events-none flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer" : "flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer"}>
                    <Link href={!brand ? `?page=${page - 1}&sort=${sort || ""}` : `?page=${page - 1}&brand=${brand || ""}&sort=${sort || ""}`} className='flex items-center '>
                        <svg width={14} height={8} viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.1665 4H12.8332" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M1.1665 4L4.49984 7.33333" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M1.1665 4.00002L4.49984 0.666687" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                            <p className="text-sm ml-3 font-medium leading-none ">Previous</p>
                            </Link>
                    </div>
                    <div className={page + 1 > Math.ceil(data.numberOfPages.pages) || page === Math.ceil(data.numberOfPages.pages) ? "opacity-50 pointer-events-none flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer" : "flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer"}>
                    <Link href={!brand ? `?page=${page + 1}&sort=${sort || ""}` : `?page=${page + 1}&brand=${brand || ""}&sort=${sort || ""}`} className='flex items-center gap-3'>
                            <p className="text-sm ml-3 font-medium leading-none ">Next</p>
                        
                        <svg width={14} height={8} viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.1665 4H12.8332" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M9.5 7.33333L12.8333 4" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M9.5 0.666687L12.8333 4.00002" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        </Link>    
                    </div>
                    {/* <p className='text-xs pl-5 font-medium pt-3 text-gray-500'>
                            {data.numberOfProducts.count_elecs < 12 ? `${page + 1 <= data.numberOfProducts.count_elecs ? (page * Math.round(data.numberOfPages.pages) - (page - 1) + 1) : data.NumberOfProducts.count_elecs } out of ${data.numberOfProducts.count_elecs}` : `out of ${data.numberOfProducts.count_elecs}`} 
                        </p> */}
                </div>
            </div>
        </>
    );
}

export default Pagination