"use client"
import Link from "next/link"

const error = ({
  error,
  reset
}: {error: Error, reset:() => void}) => {
  return <>
      {error.message === "There are no products to show on this page." ? <div className="bg-gray-950 h-screen flex items-center justify-center">
    <div className="flex flex-col items-center gap-5">
    <div>
      <h1 className="text-gray-200 text-3xl font-bold">{error.message || "Something went wrong!"}</h1>
    </div>
    <div>
      <p className="font-normal text-sm text-slate-50">
        No products.
      </p>
    </div>
    <div className="flex gap-10">
      <Link aria-label="Go home page link" href="/">
        <button className="bg-gray-900 text-slate-50 font-bold rounded-sm p-2" aria-label="Go home button">
          Home page
        </button>
      </Link>
      <button onClick={reset} className="bg-slate-200 text-gray-800 font-bold rounded-sm p-2" aria-label="Go home button">
        Try again
      </button>
    </div>
    </div>
  </div> : <div className="bg-gray-950 h-screen flex items-center justify-center">
    <div className="flex flex-col items-center gap-5">
    <div>
      <h1 className="text-gray-200 text-3xl font-bold">{error.message || "Something went wrong!"}</h1>
    </div>
    <div>
      <p className="font-normal text-sm text-slate-50">
        This kind of error occurs when API call fails.
      </p>
    </div>
    <div className="flex gap-10">
      <Link aria-label="Go home page link" href="/">
        <button className="bg-gray-900 text-slate-50 font-bold rounded-sm p-2" aria-label="Go home button">
          Go to home page
        </button>
      </Link>
      <button onClick={reset} className="bg-slate-200 text-gray-800 font-bold rounded-sm p-2" aria-label="Go home button">
        Try again
      </button>
    </div>
    </div>
    </div>
    } 
    </>
}

export default error