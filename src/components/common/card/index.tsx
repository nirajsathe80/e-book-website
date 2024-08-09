"use client";

import Link from "next/link";
import Button from "../button";

const Card = ({ book }: { book: any }) => {
  const author =
    book &&
    book.volumeInfo &&
    book.volumeInfo.authors &&
    book.volumeInfo.authors[0];
  return (
    <div className="flex gap-5 border-[0.5px] p-5 shadow-md rounded">
      <img
        src={book?.volumeInfo?.imageLinks?.smallThumbnail ?? ""}
        alt={book?.title}
        className="w-auto h-20"
      />
      <div>
        <h2 className="line-clamp-2 text-xl font-bold text-primary-600 text-balance">
          {book?.volumeInfo?.title}
        </h2>
        <p className="font-bold text-primary-900 my-2">{author ?? ""}</p>
        <Link href={`/book/${book.id}`}>
          <Button text="Read More" onClick={() => {}} />
        </Link>
      </div>
    </div>
  );
};

export default Card;
