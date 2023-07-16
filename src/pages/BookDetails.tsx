/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { IInitialState } from '../store/slice/bookSlice';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { getBookDetails } from '../store/slice/singleBookSlice';

export default function BookDetails() {
  const { id } = useParams();
  const { singleBook, isSuccess, isLoading } = useSelector(
    (state: any) => state.singleBook
  );

  const dispatch: ThunkDispatch<IInitialState, void, AnyAction> = useDispatch();

  useEffect(() => {
    if (!id || id === '' || id === null) return;
    if (!isSuccess && isLoading) {
      window.confirm('Book not found');
      window.location.href = '/';
      return;
    }

    dispatch(getBookDetails(id));
  }, [dispatch, id]);

  console.log('BookDetails', id, singleBook);
  return (
    <div>
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-6">Book Details</h1>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-lg font-bold mb-4">Title</h2>
          <p className="text-gray-600 mb-4">Author: {singleBook.title}</p>
          <p className="text-gray-600 mb-4">Genre: {singleBook.genre} </p>
          <p className="text-gray-600 mb-4">
            Publication Date: {singleBook.publication}{' '}
          </p>

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
