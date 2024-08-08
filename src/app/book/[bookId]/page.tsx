"use client";

import DownloadButton from "@/components/download-button";
import { useParams } from "next/navigation";

const getData = async (bookId: string) => {
  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes/${bookId}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch book data");
  }
  const data = await response.json();
  return data;
};

const Book = async function () {
  const params = useParams();

  const bookData = await getData(String(params.bookId));
  const author =
    bookData &&
    bookData.volumeInfo &&
    bookData.volumeInfo.authors &&
    bookData.volumeInfo.authors[0];

  return (
    <div className="mx-auto grid max-w-6xl grid-cols-3 gap-10 px-5 py-10">
      <div className="col-span-2 pr-16 text-primary-950">
        <h2 className="mb-5 text-5xl font-bold leading-[1.1]">
          {bookData?.volumeInfo?.title}
        </h2>
        <span className="font-semibold">by {author}</span>
        <p
          className="mt-5 text-lg leading-8"
          dangerouslySetInnerHTML={{
            __html: bookData?.volumeInfo?.description,
          }}
        ></p>
        <DownloadButton fileLink={bookData.volumeInfo.previewLink} />
      </div>
      <div className="flex justify-end">
        <img
          src={bookData?.volumeInfo?.imageLinks?.thumbnail}
          alt={bookData?.volumeInfo?.title}
          className="rounded-md border"
        />
      </div>
    </div>
  );
};

export default Book;
