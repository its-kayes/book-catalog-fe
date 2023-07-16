/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDispatch, useSelector } from 'react-redux';
import { ISingleBookState, editBook } from '../store/slice/singleBookSlice';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { useEffect } from 'react';

export default function EditBook() {
  const { singleBook, editMessage } = useSelector(
    (state: any) => state.singleBook
  );

  const dispatch: ThunkDispatch<ISingleBookState, void, AnyAction> =
    useDispatch();

  const handleEdit = (e: any) => {
    e.preventDefault();

    const title = e.target.book.value;
    const author = e.target.author.value;
    const genre = e.target.genre.value;
    const publication = e.target.publication.value;

    dispatch(
      editBook({
        id: singleBook?._id,
        keys: { title, author, genre, publication },
      })
    );

    e.target.book.value = '';
    e.target.author.value = '';
    e.target.genre.value = '';
    e.target.publication.value = '';
  };

  useEffect(() => {
    if (editMessage === null) return;
    editMessage && window.confirm(editMessage);
  }, [editMessage]);

  return (
    <div>
      <div className="container mx-auto p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* //  <!-- Book Details --> */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h1 className="text-3xl font-bold mb-6">Book Details</h1>

            <div>
              <h2 className="text-lg font-bold mb-4">
                Title {singleBook?.title}
              </h2>
              <p className="text-gray-600 mb-4">
                Author: {singleBook?.author}{' '}
              </p>
              <p className="text-gray-600 mb-4">Genre: {singleBook?.genre}</p>
              <p className="text-gray-600 mb-4">
                Publication: {singleBook?.publication}{' '}
              </p>

              {/* <h2 className="text-lg font-bold mb-4">Reviews</h2>
              <div className="border border-gray-300 p-4 rounded">
                <p className="text-gray-600">Review 1</p>
                <p className="text-gray-600">Review 2</p>
                <p className="text-gray-600">Review 3</p>
              </div> */}
            </div>
          </div>

          {/* //  <!-- Edit Form --> */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h1 className="text-3xl font-bold mb-6">Edit Book</h1>

            <form onSubmit={handleEdit}>
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
                  name="book"
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
                  name="author"
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
                  name="genre"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="publication"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Publication Date:
                </label>
                <input
                  type="string"
                  id="publication"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
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
