import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { ISingleBookState, addBook } from '../store/slice/singleBookSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

/* eslint-disable @typescript-eslint/no-explicit-any */
export default function AddNewBook() {
  const { addMessage } = useSelector((state: any) => state.singleBook);

  const dispatch: ThunkDispatch<ISingleBookState, void, AnyAction> =
    useDispatch();

  const handleAddBook = (e: any) => {
    console.log('handleAddBook');
    const title = e.target.title.value;
    const author = e.target.author.value;
    const genre = e.target.genre.value;
    const publication = e.target.publication.value;

    dispatch(addBook({ title, author, genre, publication }));
  };

  useEffect(() => {
    if (addMessage === null) return;
    addMessage && window.confirm(addMessage);
  }, [addMessage]);

  return (
    <div>
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-6">Add New Book</h1>

        <form onSubmit={handleAddBook} className="max-w-lg">
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
              name="title"
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
              name="author"
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
              type="text"
              name="publication"
              id="publication"
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
