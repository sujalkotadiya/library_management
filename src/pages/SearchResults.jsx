import  { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import BookList from '../components/BookList';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    const savedBooks = JSON.parse(localStorage.getItem('books')) || [];
    const results = savedBooks.filter((book) =>
      book.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredBooks(results);
  }, [query]);

  return (
    <div>
      <h2 className="text-2xl font-bold text-center my-4">
        Search Results for "{query}"
      </h2>
      <BookList books={filteredBooks} />
    </div>
  );
};

export default SearchResults;
