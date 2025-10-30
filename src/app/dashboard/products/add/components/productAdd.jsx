"use client"
import { useRouter } from 'next/navigation';
import React from 'react'

export default function SingleProductAdd() {
	const router = useRouter();


	const handleFormSubmit = async (e) => {
		e.preventDefault();

		const form =  e.target;
		const productName =  form.productName.value;
		const payload = {productName}

		const res = await fetch("http://localhost:3000/api/items", {
			method: "POST",
			headers: {
				"content-type": "application/json"
			},
			body: JSON.stringify(payload)

		})

		const result = await res.json();
		console.log(result)
		form.reset();


		// alert("Products Added")
		router.push("/products")
	}

  return (
	<div className='grid place-items-center place-content-center mt-10'>
		  <form onSubmit={handleFormSubmit}>
			  <input type='text' name='productName' placeholder='Enter product Name'></input>
			  <button className='bg-blue-500 text-white p-2 rounded-full m-5' type='submit'>Submit</button>
	  </form>
	</div>
  )
}
