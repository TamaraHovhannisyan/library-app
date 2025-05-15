import React from 'react'

interface Props{
  title: string;
  books: Book[];
  containerClassName?: string;


}
const BookList = ({title, books, containerClassName} : Props) => {
    return (
      <section className=''>
        <h2 className=" text-4xl " style={{ color: "#EAEAEA" }}>
          Popular Books
        </h2>
      </section>
    );
}

export default BookList