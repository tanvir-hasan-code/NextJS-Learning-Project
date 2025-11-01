import { ConnectDatabase } from '@/lib/dbConnect';
import Image from 'next/image';
import React from 'react'
import { getProducts } from '../actions/getProducts';

export const dynamic = "force-dynamic"

export default async function ProductsPage() {
	// const {NEXT_PUBLIC_SERVER_ADDRESS } = process.env;

	// const res = await fetch(`${NEXT_PUBLIC_SERVER_ADDRESS}/api/items`);
	// const data = await res.json();

	// const data = await ConnectDatabase("test").find().toArray();

	const data = await getProducts();


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
