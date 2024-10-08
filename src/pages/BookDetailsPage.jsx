import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const BookDetailsPage = () => {
  const { id } = useParams(); // URL se book ID lete hain
  const [book, setBook] = useState(null);
  const [isBorrowed, setIsBorrowed] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // `localStorage` se book ko fetch karo
    const books = JSON.parse(localStorage.getItem('books')) || [];
    const selectedBook = books.find((b) => b.id === parseInt(id));

    if (selectedBook) {
      setBook(selectedBook);

      // Check karo ki book borrow hui hai ya nahi
      const borrowedBooks = JSON.parse(localStorage.getItem('borrowedBooks')) || [];
      if (borrowedBooks.find(b => b.id === selectedBook.id)) {
        setIsBorrowed(true);
      }
    }
  }, [id]);

  const handleBorrowBook = () => {
    // Book ko borrow list me add karo
    const borrowedBooks = JSON.parse(localStorage.getItem('borrowedBooks')) || [];
    if (!borrowedBooks.find(b => b.id === book.id)) {
      borrowedBooks.push(book);
      localStorage.setItem('borrowedBooks', JSON.stringify(borrowedBooks));
      setIsBorrowed(true);
    }
    
    // Borrowed books page pe navigate karo
    navigate('/borrowed');
  };

  const handleReturnBook = () => {
    // Book ko borrow list se remove karo
    let borrowedBooks = JSON.parse(localStorage.getItem('borrowedBooks')) || [];
    borrowedBooks = borrowedBooks.filter(b => b.id !== book.id);
    localStorage.setItem('borrowedBooks', JSON.stringify(borrowedBooks));
    setIsBorrowed(false);
    
    // Borrowed books page pe wapas jao
    navigate('/borrowed');
  };

  if (!book) {
    return <p>Loading book details...</p>;
  }

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-4">{book.title}</h2>
      <p className="text-lg"><strong>Author:</strong> {book.author}</p>
      <p className="text-lg"><strong>Genre:</strong> {book.genre}</p>
      <p className="text-lg"><strong>Publication Date:</strong> {book.publicationDate}</p>
      <p className="text-lg"><strong>Description:</strong> {book.description || "No description available."}</p>
      
      {isBorrowed ? (
        <button
          className="bg-red-500 text-white py-2 px-4 rounded mt-4"
          onClick={handleReturnBook}
        >
          Return this book
        </button>
      ) : (
        <button
          className="bg-green-500 text-white py-2 px-4 rounded mt-4"
          onClick={handleBorrowBook}
        >
          Borrow this book
        </button>
      )}
    </div>
  );
};

export default BookDetailsPage;
