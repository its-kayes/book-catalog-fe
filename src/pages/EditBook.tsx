export default function EditBook() {
  return (
    <div>
      <div className="container mx-auto p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* //  <!-- Book Details --> */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h1 className="text-3xl font-bold mb-6">Book Details</h1>

            <div>
              <h2 className="text-lg font-bold mb-4">Title</h2>
              <p className="text-gray-600 mb-4">Author: John Doe</p>
              <p className="text-gray-600 mb-4">Genre: Mystery</p>
              <p className="text-gray-600 mb-4">Publication Date: 2022-05-15</p>

              <h2 className="text-lg font-bold mb-4">Reviews</h2>
              <div className="border border-gray-300 p-4 rounded">
                <p className="text-gray-600">Review 1</p>
                <p className="text-gray-600">Review 2</p>
                <p className="text-gray-600">Review 3</p>
              </div>
            </div>
          </div>

          {/* //  <!-- Edit Form --> */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h1 className="text-3xl font-bold mb-6">Edit Book</h1>

            <form>
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
                  value="Book Title"
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
                  value="John Doe"
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
                  value="Mystery"
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
                  value="2022-05-15"
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
