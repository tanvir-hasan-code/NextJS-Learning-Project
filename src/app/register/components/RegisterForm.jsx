"use client"
import { RegisterUser } from '@/app/actions/auth/register';
import React from 'react'

export default function RegisterForm() {

	const handleSubmitForm = async (e) => {
		e.preventDefault();
		const form = e.target;
		const userName = form.userName.value;
		const password = form.password.value;
		const role = "admin";
		const payload = { userName, password, role };
		const result = await RegisterUser(payload); 
		console.log(result);
		alert("Register Successfully");
	}
  return (
	<div>
		  <form onSubmit={handleSubmitForm} className='grid text-start bg-red-100 '>
			  <label htmlFor="User Name"> User Name:
			  <input type="text" name="userName" placeholder='Enter your UserName...' />
			  </label>
			  <label htmlFor="Password">Password:
				  <input type="password" name="password"  />
			  </label>
			  <button type='submit' className='bg-blue-400 w-fit p-2 rounded-full text-white'>Register</button>
		</form>
	</div>
  )
}
