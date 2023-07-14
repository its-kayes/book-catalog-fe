export default function BookDetails() {
  return (
    <div>
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-6">Book Details</h1>

        <div className="bg-white rounded-lg shadow-md p-8">
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

          <div className="flex justify-end mt-8">
            <a
              href="/edit-book"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none mr-2"
            >
              Edit
            </a>
            <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
