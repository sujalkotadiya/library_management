import { useState, useEffect } from 'react';
import { CgShoppingCart } from 'react-icons/cg';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (loggedInUser) {
      setUser(loggedInUser);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    setUser(null);
    navigate('/');
  };

  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <h1 className="text-2xl font-bold">E-Library</h1>
        </Link>

        <div className="flex items-center space-x-4">
          {user ? (
            <>
              <span className="font-semibold">Hello, {user.name}</span>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white py-1 px-4 rounded hover:bg-red-400"
              >
                Logout
              </button>
              <Link to={"/borrowed"}><CgShoppingCart className='text-2xl' /></Link>
            </>
          ) : (
            <>
              <Link to="/login">
                <button className="bg-yellow-500 text-white py-1 px-4 rounded hover:bg-yellow-400">
                  Login
                </button>
              </Link>
              <Link to="/signup">
                <button className="bg-yellow-500 text-white py-1 px-4 rounded hover:bg-yellow-400">
                  Signup
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
