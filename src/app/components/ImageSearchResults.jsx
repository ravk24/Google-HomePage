import Image from "next/image";
import Link from "next/link";
import PaginationButtons from "./PaginationButtons";
import { Suspense } from "react";

const ImageSearchResults = ({ results }) => {
  return (
    <div className="sm:pb-24 pb-40 mt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-3 space-x-4">
        {results.items.map((result) => (
          <div className="mb-8" key={result.link}>
            <div className="group">
              <Link href={result.image.contextLink}>
                {/* <img
                  src={result.link}
                  alt={result.title}
                  className="h-60 group-hover:shadow-xl w-full object-contain transition-shadow duration-300"
                /> */}
                <Image
                  src={result.link}
                  alt={result.title}
                  height={100}
                  width={260}
                  objectFit="contain"
                  className="group-hover:shadow-xl transition-shadow duration-300"
                />
              </Link>
              <Link href={result.image.contextLink}>
                <h2 className="group-hover:underline truncate text-xl">
                  {result.title}
                </h2>
              </Link>
              <Link href={result.image.contextLink}>
                <p className="group-hover:underline truncate text-gray-600">
                  {result.displayLink}
                </p>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="ml-16">
        <Suspense fallback={<div>Loading Search Parameters...</div>}>
          <PaginationButtons />
        </Suspense>
      </div>
    </div>
  );
};

export default ImageSearchResults;
