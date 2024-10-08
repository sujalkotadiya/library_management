import React, { useState, useEffect } from 'react';
import BookList from '../components/BookList';
import { Link } from 'react-router-dom';

const Home = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        // Fetch books from local storage
        const storedBooks = JSON.parse(localStorage.getItem('books')) || [];
        setBooks(storedBooks);
    }, []);

    return (
        <div>
            <h1>Available Books</h1>
            <BookList books={books} />
            <Link to="/addbooks">
                <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-400 my-2 mx-1">Add Books</button>
            </Link>
        </div>
    );
};

export default Home;
