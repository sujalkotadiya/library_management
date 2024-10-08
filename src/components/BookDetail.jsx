import React from 'react';
import { useNavigate } from 'react-router-dom';

const BookDetail = ({ book }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    // Yeh ID ko check karega aur navigate karega
    if (book.id) {
      navigate(`/book/${book.id}`);
    } else {
      console.error('Book ID undefined hai');
    }
  };

  return (
    <div className="border rounded-lg shadow-md p-4 bg-white hover:bg-gray-100">
      <h3 className="text-xl font-bold">{book.title}</h3>
      <p>{book.author}</p>
      <p>{book.genre}</p>
      <p>Published: {book.publicationDate}</p>
      <button
        onClick={handleViewDetails}
        className="bg-blue-500 text-white py-1 px-3 rounded mt-2"
      >
        View Details
      </button>
    </div>
  );
};

export default BookDetail;
