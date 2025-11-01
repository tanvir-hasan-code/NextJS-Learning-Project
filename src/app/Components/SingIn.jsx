"use client"
import React from 'react'
import {  signIn } from "next-auth/react"

export default function Login() {
  return (
	<div>
	  <button onClick={()=>signIn()}>Sign In </button>
	</div>
  )
}
