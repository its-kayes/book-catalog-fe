/* eslint-disable @typescript-eslint/no-explicit-any */
// import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IAuthInitialState, signup } from '../store/slice/authSlice';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { useEffect } from 'react';

export default function Signup() {
  const { auth, message } = useSelector((state: any) => state.auth);

  const dispatch: ThunkDispatch<IAuthInitialState, void, AnyAction> =
    useDispatch();

  const handleSignUp = (e: any) => {
    e.preventDefault();
    const username = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    dispatch(signup({ username, email, password }));
  };

  useEffect(() => {
    if (!message || message === '' || message === null) return;
    window.confirm(message);
  }, [message]);

  console.log(auth);

  return (
    <div>
      <section className="h-screen flex justify-center items-center">
        <form onSubmit={handleSignUp}>
          <div className="w-[300px] h-auto border-2 border-red-500 p-4 rounded-md">
            <h1 className="flex w-full justify-center underline font-bold">
              Signup
            </h1>

            <div className="grid my-4">
              <label htmlFor="email">Name</label>
              <input
                className="px-3 border border-black"
                type="text"
                id="name"
                name="name"
              />
            </div>

            <div className="grid my-4">
              <label htmlFor="email">Email</label>
              <input
                className="px-3 border border-black"
                type="email"
                id="email"
                name="email"
              />
            </div>

            <div className="grid my-4">
              <label htmlFor="password">Password</label>
              <input
                className="px-3 border border-black"
                type="password"
                id="password"
                name="password"
              />
            </div>

            <div>
              <button
                className="flex w-full justify-center font-bold bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded"
                type="submit"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
}
