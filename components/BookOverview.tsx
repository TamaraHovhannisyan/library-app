import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import BookCover from "./BookCover";

const BookOverview = ({
  title,
  author,
  genre,
  rating,
  total_copies,
  available_copies,
  description,
  color,
  cover,
}: Book) => {
  return (
    <section className="flex flex-col-reverse items-center gap-12 sm:gap-32 xl:flex-row xl:gap-8 text-5xl font-semibold text-white md:text-7xl">
      <div className="flex flex-1 flex-col gap-5">
        <h1 className="">{title}</h1>

        <div className="mt-7 flex flex-row flex-wrap gap-4 text-xl text-white">
          <p>
            By <span className="font-semibold text-white">{author}</span>
          </p>
          <p>
            Category: <span className="font-semibold text-white">{genre}</span>
          </p>
          <div className="flex flex-row gap-1">
            <Image src="/icons/star.svg" alt="star" width={22} height={22} />
            <p>{rating}</p>
          </div>
        </div>

        <div className="flex flex-row flex-wrap gap-4 mt-1 text-xl">
          <p>
            Total Books <span>{total_copies}</span>
          </p>
          <p>
            Available Books <span>{available_copies}</span>
          </p>
        </div>
        <p className="mt-2 text-justify text-xl text-light-100">
          {description}
        </p>
        <Button
          className="mt-4 min-h-14 w-fit text-dark-100 hover:bg-primary/90 max-md:w-full !important"
          style={{ backgroundColor: "#FF6347" }}
        >
          <Image src="/icons/book.svg" alt="book" width={20} height={20} />
          <p className="text-xl text-yellow-950">Borrow</p>
        </Button>
      </div>

      <div className="realtive flex flex-1 justify-center">
        <div className="relative">
          <BookCover
            variant="wide"
            className="z-10"
            coverColor={color}
            coverImage={cover}
          />
          <div className="absolute left-16 top-10 rotate-12 opacity-40 max-sm:hidden">
            <BookCover
              variant="wide"
              coverColor={color}
              coverImage={cover}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookOverview;
