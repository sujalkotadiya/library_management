import React from 'react';
import BookDetail from './BookDetail';

const BookList = ({ books }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {books.length === 0 ? (
        <p className="text-center">No books available</p>
      ) : (
        books.map((book) => <BookDetail key={book.id} book={book} />)
      )}
    </div>
  );
};

export default BookList;
