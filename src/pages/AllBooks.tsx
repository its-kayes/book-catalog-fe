import { Link } from 'react-router-dom';

export default function AllBooks() {
  return (
    <div>
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-6">All Books</h1>

        {/* <!-- Search Bar --> */}
        <div className="flex mb-4">
          <input
            type="text"
            placeholder="Search books..."
            className="w-full p-2 rounded-l-md border border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <button className="bg-blue-500 text-white rounded-r-md px-4 hover:bg-blue-600 focus:outline-none">
            Search
          </button>
        </div>

        {/* <!-- Filters --> */}
        <div className="flex mb-4">
          <select className="w-1/2 p-2 rounded-l-md border border-gray-300 focus:outline-none focus:border-blue-500">
            <option value="">All Genres</option>
            <option value="fantasy">Fantasy</option>
            <option value="mystery">Mystery</option>
            <option value="romance">Romance</option>
          </select>
          <select className="w-1/2 p-2 rounded-r-md border border-gray-300 focus:outline-none focus:border-blue-500">
            <option value="">All Years</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
          </select>
        </div>

        {/* <!-- Book List --> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {/* <!-- Card 1 --> */}
          <div className="bg-white rounded-lg shadow-md">
            <div className="p-4">
              <h2 className="text-lg font-bold mb-2">Book 1</h2>
              <p className="text-gray-600 mb-2">Author: John Doe</p>
              <p className="text-gray-600 mb-2">Genre: Mystery</p>
              <p className="text-gray-600">Publication Date: 2022-05-15</p>
            </div>
          </div>

          {/* <!-- Card 2 --> */}
          <div className="bg-white rounded-lg shadow-md">
            <div className="p-4">
              <h2 className="text-lg font-bold mb-2">Book 2</h2>
              <p className="text-gray-600 mb-2">Author: Jane Smith</p>
              <p className="text-gray-600 mb-2">Genre: Fantasy</p>
              <p className="text-gray-600">Publication Date: 2021-09-30</p>
            </div>
          </div>

          {/* <!-- Add more cards as needed --> */}
        </div>

        {/* <!-- Add New Button --> */}
        <div className="mt-8">
          <Link
            to="/add-new-book"
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none"
          >
            Add New
          </Link>
        </div>
      </div>
    </div>
  );
}
