import React from "react";
import Link from "next/link";
import WebSearchResults from "@/app/components/WebSearchResults";

const WebSearch = async ({ searchParams }) => {
  const startIndex = searchParams.start || "1";
  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.GOOG_SE_API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}'}&start=${startIndex}`
  );
  if (!response.ok) {
    throw new Error("Something is wrong");
  }
  const data = await response.json();
  const results = data.items;

  if (!results) {
    return (
      <div className="flex flex-col justify-center items-center pt-10">
        <h1 className="text-3xl mb-4">
          No results found for {searchParams.searchTerm}
        </h1>
        <p className="text-lg">
          Try searching the web or images for something else
          <Link href="/" className="text-blue-500 ml-1 mt-1">
            Home
          </Link>
        </p>
      </div>
    );
  }
  return <div>{results && <WebSearchResults results={data} />}</div>;
};

export default WebSearch;
