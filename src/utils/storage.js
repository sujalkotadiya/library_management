// storage.js

export const storeBooksInLocalStorage = () => {
  const books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genre: 'Fiction', publicationDate: '1925' },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Fiction', publicationDate: '1960' },
    { id: 3, title: '1984', author: 'George Orwell', genre: 'Dystopian', publicationDate: '1949' },
    { id: 4, title: 'Pride and Prejudice', author: 'Jane Austen', genre: 'Romance', publicationDate: '1813' },
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', genre: 'Fiction', publicationDate: '1951' },
    { id: 6, title: 'The Hobbit', author: 'J.R.R. Tolkien', genre: 'Fantasy', publicationDate: '1937' },
    { id: 7, title: 'Moby Dick', author: 'Herman Melville', genre: 'Adventure', publicationDate: '1851' },
    { id: 8, title: 'War and Peace', author: 'Leo Tolstoy', genre: 'Historical', publicationDate: '1869' },
    { id: 9, title: 'The Alchemist', author: 'Paulo Coelho', genre: 'Adventure', publicationDate: '1988' },
    { id: 10, title: 'The Diary of a Young Girl', author: 'Anne Frank', genre: 'Biography', publicationDate: '1947' },
    { id: 11, title: 'Brave New World', author: 'Aldous Huxley', genre: 'Dystopian', publicationDate: '1932' },
    { id: 12, title: 'The Catcher in the Rye', author: 'J.D. Salinger', genre: 'Fiction', publicationDate: '1951' },
    { id: 13, title: 'Fahrenheit 451', author: 'Ray Bradbury', genre: 'Dystopian', publicationDate: '1953' },
    { id: 14, title: 'The Picture of Dorian Gray', author: 'Oscar Wilde', genre: 'Philosophical', publicationDate: '1890' },
    { id: 15, title: 'The Brothers Karamazov', author: 'Fyodor Dostoevsky', genre: 'Philosophical', publicationDate: '1880' },
    { id: 16, title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', genre: 'Psychological', publicationDate: '1866' },
    { id: 17, title: 'Wuthering Heights', author: 'Emily Brontë', genre: 'Romance', publicationDate: '1847' },
    { id: 18, title: 'Les Misérables', author: 'Victor Hugo', genre: 'Historical', publicationDate: '1862' },
    { id: 19, title: 'The Grapes of Wrath', author: 'John Steinbeck', genre: 'Fiction', publicationDate: '1939' },
    { id: 20, title: 'A Tale of Two Cities', author: 'Charles Dickens', genre: 'Historical', publicationDate: '1859' }
 ] 

  // Store data in localStorage
  localStorage.setItem('books', JSON.stringify(books));
  console.log("Books stored in localStorage:", books);
};
