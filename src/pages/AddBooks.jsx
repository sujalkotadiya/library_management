import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddBooks = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleAddBook = (e) => {
        e.preventDefault();

        // Simple validation
        if (!title || !author) {
            setError('Title and Author are required');
            return;
        }

        const newBook = {
            id: Date.now(), // Unique ID based on timestamp
            title,
            author,
            description,
        };

        const books = JSON.parse(localStorage.getItem('books')) || [];

        books.push(newBook);

        localStorage.setItem('books', JSON.stringify(books));

        setTitle('');
        setAuthor('');
        setDescription('');
        setError('');

        navigate('/');
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded shadow-md">
            <h2 className="text-2xl font-bold text-center mb-4">Add a New Book</h2>
            {error && <p className="text-red-500">{error}</p>}
            <form onSubmit={handleAddBook}>
                <input
                    type="text"
                    placeholder="Book Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full p-2 border rounded mb-4"
                    required
                />
                <input
                    type="text"
                    placeholder="Author"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    className="w-full p-2 border rounded mb-4"
                    required
                />
                <textarea
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full p-2 border rounded mb-4"
                    rows="4"
                />
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-400"
                >
                    Add Book
                </button>
            </form>
        </div>
    );
};

export default AddBooks;
