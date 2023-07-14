export default function AddNewBook() {
  return (
    <div>
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-6">Add New Book</h1>

        <form className="max-w-lg">
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-gray-700 font-bold mb-2"
            >
              Title:
            </label>
            <input
              type="text"
              id="title"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="author"
              className="block text-gray-700 font-bold mb-2"
            >
              Author:
            </label>
            <input
              type="text"
              id="author"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="genre"
              className="block text-gray-700 font-bold mb-2"
            >
              Genre:
            </label>
            <input
              type="text"
              id="genre"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="publication-date"
              className="block text-gray-700 font-bold mb-2"
            >
              Publication Date:
            </label>
            <input
              type="date"
              id="publication-date"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
            >
              Add Book
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
