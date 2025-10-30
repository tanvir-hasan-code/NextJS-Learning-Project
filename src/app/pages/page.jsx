import Link from "next/link";
import React from "react";
import style from "./style.module.css"

export const getPost = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
};

export const metadata = {
  title: "Posts",
  description: "Testing a NextJS Project!",
};

export default async function page() {
	const posts = await getPost();
	
	

  return (
	  <div className="pt-10">
		  <h1 className='text-green-500 font-bold text-4xl text-center'>This is Title and Body Print</h1>
      <div className="grid grid-cols-4 gap-5  p-10"> 
        {posts.map((post) => {
          return (
            <div key={post.id} className="border rounded-4xl bg-slate-200 p-4 shadow-2xl">
              <p className="text-xl font-bold text-center text-blue-500">
                {post.id}
              </p>
              <h1 className="text-2xl  text-green-500">{post.title}</h1>
				  <p className="text-xl text-red-500">{post.body}</p>
				 <Link href={`/pages/${post.id}`}> <button className={`${style["btn-primary"]}`}>Details</button></Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
