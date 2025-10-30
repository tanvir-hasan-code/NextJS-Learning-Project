import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
	<div>
	  <nav className='bg-slate-500 text-white font-bold text-lg'>
			  <ul className='flex py-2 justify-center gap-32'> 
				  <Link href={"/"}><li>Home</li></Link>
				  <Link href={"/pages"}><li>Pages</li></Link>
				  <Link href={"/meals"}><li>Meals</li></Link>
				  <Link href={"/products"}><li>Products</li></Link>
				  <Link href={"/products/add"}><li>Add Product</li></Link>
				  <Link href={"/about"}><li>About</li></Link>
		</ul>
	  </nav>
	</div>
  )
}
