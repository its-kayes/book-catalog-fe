import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-gray-900 text-white">
      <nav className="container mx-auto px-8 py-4 flex justify-between flex-wrap items-center">
        <div>
          <Link to="/" className="text-2xl font-bold mr-4">
            Book Management System
          </Link>
        </div>

        <div>
          <ul className="flex flex-col space-y-4 lg:flex-row lg:space-x-4 lg:items-center lg:space-y-0">
            <li>
              <Link
                to="/"
                className="block text-center lg:inline-block lg:text-left hover:text-gray-300"
              >
                Home
              </Link>
            </li>
            {/* <li>
              <Link
                to="/all-books"
                className="block text-center lg:inline-block lg:text-left hover:text-gray-300"
              >
                All Books
              </Link>
            </li> */}
            <li>
              <Link
                to="/add-new-book"
                className="block text-center lg:inline-block lg:text-left hover:text-gray-300"
              >
                Add New Book
              </Link>
            </li>
            <li>
              <Link
                to="signup"
                className="block text-center lg:inline-block lg:text-left hover:text-gray-300"
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
