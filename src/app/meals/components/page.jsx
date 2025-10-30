"use client"
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function SearchBarInput() {
//   const [meals, setMeals] = useState([]);
  const [search, setSearch] = useState("");
	const router = useRouter();
	const pathname = usePathname();

  useEffect(() => {
	  const searchQuery = { search };
	  const urlQueryParams = new URLSearchParams(searchQuery);
	  const url = `${pathname}?${urlQueryParams}`;
	  router.push(url)
  }, [search]);
  return (
    <div>
      <div>
        <input
          className="my-10 flex mx-auto w-5/12 p-2 outline-2 outline-red-500  focus:outline-green-600 focus:placeholder:text-white focus:bg-gray-400 rounded-full"
          type="text"
          placeholder="search..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>
  );
}
