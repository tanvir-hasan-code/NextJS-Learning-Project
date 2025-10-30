import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
	<div>
	  <h1 className='text-center text-4xl font-bold text-red-500'>404 Page Not Found!</h1>
	  <Link href={"/"} className='font-bold text-white bg-blue-500 p-2 px-3 text-center flex mx-auto w-fit mt-10 rounded-full'>Return Home</Link>
	</div>
  )
}
