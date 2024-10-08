import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const BorrowedBooks = () => {
    const [borrowedBooks, setBorrowedBooks] = useState([]);

    useEffect(() => {
        // Fetch the borrowed books from localStorage
        const books = JSON.parse(localStorage.getItem('borrowedBooks')) || [];
        setBorrowedBooks(books);
    }, []);

    const handleReturnBook = (id) => {
        // Remove the book from the list of borrowed books
        const updatedBooks = borrowedBooks.filter((book) => book.id !== id);
        setBorrowedBooks(updatedBooks);
        localStorage.setItem('borrowedBooks', JSON.stringify(updatedBooks));
    };

    if (borrowedBooks.length === 0) {
        return <p className="text-center">No borrowed books available</p>;
    }

    return (
        <div>
            <h2 className="text-2xl font-bold text-center my-4">Borrowed Books</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {borrowedBooks.map((book) => (
                    <div key={book.id} className="border rounded-lg shadow-md p-4 bg-white">
                        <h3 className="text-xl font-bold">{book.title}</h3>
                        <p>{book.author}</p>
                        <p>{book.genre}</p>
                        <p>Published: {book.publicationDate}</p>
                        <Link to={"/"}>
                            <button
                                className="bg-red-500 text-white py-2 px-4 rounded mt-4"
                                onClick={() => handleReturnBook(book.id)}
                            >
                                Return
                            </button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BorrowedBooks;
