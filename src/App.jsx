import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import BorrowedBooks from './pages/BorrowedBooks';
import Header from './components/Header';
import BookDetailsPage from './pages/BookDetailsPage';
import Signup from './pages/Signup';
import Login from './pages/Login';
import AddBooks from './pages/AddBooks';
import { useEffect } from 'react';
import { storeBooksInLocalStorage } from './utils/storage';
import SearchPage from './pages/SearchPage';

function App() {
  useEffect(() => {
    // Call the function to store books in localStorage
    console.log("useEffect called");
    storeBooksInLocalStorage();
  }, []);
  return (
    <Router>
      <Header />
      <SearchPage/>
      <main className="container mx-auto py-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/addbooks" element={<AddBooks />} />
          <Route path="/borrowed" element={<BorrowedBooks />} />
          <Route path="/book/:id" element={<BookDetailsPage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
