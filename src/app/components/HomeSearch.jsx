"use client";
import React, { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { FaMicrophone } from "react-icons/fa";
import { useRouter } from "next/navigation";
const HomeSearch = () => {
  const [searchInput, setSearchInput] = useState("");
  const [randomSearchLoading, setRandomSearchLoading] = useState(false);
  const router = useRouter();

  const fetchRandomWord = async () => {
    setRandomSearchLoading(true);
    const response = await fetch("https://random-word-api.herokuapp.com/word");
    if (!response.ok) return;
    const word = await response.json();
    setRandomSearchLoading(false);
    router.push(`/search/web?searchTerm=${word[0]}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchInput.trim()) return;
    else router.push(`/search/web?searchTerm=${searchInput}`);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 px-5 py-3 rounded-full hover:shadow-md transition-shadow sm:max-w-xl lg:max-w-2xl "
      >
        <IoSearchOutline className="mr-3 text-xl text-gray-500  " />
        <input
          type="text"
          className="flex-grow focus:outline-none "
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <FaMicrophone className="text-lg" />
      </form>
      <div className="flex flex-col space-y-2 sm:space-y-0 justify-center sm:flex-row mt-8 sm:space-x-4">
        <button
          className="bg-[#f8f9fa] rounded-md text-sm text-gray-800 hover:ring-gray-200 focus:outline-none active:ring-gray-300 hover:shadow-md w-36 h-10 transition-shadow  hover:border-gray-400"
          onClick={handleSubmit}
        >
          Google Search
        </button>
        <button
          className="bg-[#f8f9fa] rounded-md text-sm text-gray-800 hover:ring-gray-200 focus:outline-none active:ring-gray-300 hover:shadow-md w-36 h-10 transition-shadow disabled:opacity-80 disabled:shadow-sm"
          onClick={fetchRandomWord}
          disabled={randomSearchLoading}
        >
          {randomSearchLoading ? "Loading ..." : "I am feeling lucky"}
        </button>
      </div>
    </>
  );
};

export default HomeSearch;
