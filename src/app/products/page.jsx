import Image from 'next/image';
import React from 'react'

export const dynamic = "force-dynamic"

export default async function ProductsPage() {

	const res = await fetch("http://localhost:3000/api/items");
	const data = await res.json();

  return (
	<div>
		  {data?.map((product) => {
			  return (<div key={product?._id}>
				  <h1>{product?.productName}</h1>
		  </div>)
	  })}
	</div>
  )
}
