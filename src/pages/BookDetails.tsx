/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import {
  ISingleBookState,
  getBookDetails,
  getBookReviews,
  handleDeleteBook,
} from '../store/slice/singleBookSlice';

export default function BookDetails() {
  const { id } = useParams();
  const { singleBook, isSuccess, isLoading, isDelete, review, deleteMessage } =
    useSelector((state: any) => state.singleBook);

  const dispatch: ThunkDispatch<ISingleBookState, void, AnyAction> =
    useDispatch();

  useEffect(() => {
    if (!id || id === '' || id === null) return;
    if (!isSuccess && isLoading) {
      window.confirm('Book not found');
      window.location.href = '/';
      return;
    }

    dispatch(getBookDetails(id));
  }, [dispatch, id]);

  const handleLoadReview = () => {
    dispatch(getBookReviews(singleBook.title));
  };

  const handleDelete = () => {
    console.log('handleDelete');
    dispatch(handleDeleteBook(singleBook._id));
  };

  useEffect(() => {
    if (deleteMessage === null) return;

    window.confirm(deleteMessage);
    if (isDelete) {
      window.location.href = '/';
    }
  }, [deleteMessage]);

  return (
    <div>
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-6">Book Details</h1>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-lg font-bold mb-4">Title</h2>
          <p className="text-gray-600 mb-4">Author: {singleBook?.title}</p>
          <p className="text-gray-600 mb-4">Genre: {singleBook?.genre} </p>
          <p className="text-gray-600 mb-4">
            Publication Date: {singleBook?.publication}{' '}
          </p>

          <h2 className="text-lg font-bold mb-4">Reviews</h2>
          <div className="border border-gray-300 p-4 rounded">
            {review === null ? (
              <div
                onClick={handleLoadReview}
                className="w-full h-full min-h-[100px] flex justify-center items-center bg-gray-100 cursor-pointer hover:bg-gray-200 transition duration-300 ease-in-out rounded-md"
              >
                Load reviews
              </div>
            ) : (
              <div>
                {review.map((item: any) => (
                  <>
                    <p className="text-gray-600">
                      <span className="font-bold">{item.review}</span> by{' '}
                      <span className="font-bold"> {item.username} </span> with
                      rating <span className="font-bold"> {item.rating} </span>
                    </p>
                  </>
                ))}
              </div>
            )}
            {/* */}
          </div>

          <div className="flex justify-end mt-8">
            <Link
              to="/edit-book"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none mr-2"
            >
              Edit
            </Link>
            <button
              onClick={handleDelete}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
