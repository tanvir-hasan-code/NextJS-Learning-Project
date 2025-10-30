import React from "react";

export const singleDataGet = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return data;
};

export async function generateMetadata({ params }) {
  const res = await params;
  const id = res.id;

  const post = await singleDataGet(id);

  return {
    title: post.title,
    description: post.body,
  };
}

export default async function SinglePostDetails({ params }) {
  const res = await params;
  const id = res.id;

  const singleData = await singleDataGet(id);

  if (singleData) {
    return (
      <div className="border  rounded-4xl shadow-2xl mx-auto grid justify-items-center w-5/12 p-10 space-y-5 m-20 ">
        <p className="text-4xl font-bold text-green-500">{singleData.id}</p>
        <h1 className="text-3xl font-bold text-orange-700">
          {singleData.title}
        </h1>
        <p className="text-green-500 font-semibold">{singleData.body}</p>
      </div>
    );
  } else {
    <p className="text-2xl text-red-600 text-center">Data Not Found!</p>;
  }
}
