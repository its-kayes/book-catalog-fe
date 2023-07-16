/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import apiInstance from '../../config/axios';

function objectToQueryString(obj: any) {
  const queryParams = Object.keys(obj)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`)
    .join('&');

  return '/book/all?' + queryParams;
}

export const getBooks = createAsyncThunk(
  'books/getBooks',
  async (keys: object, { rejectWithValue, fulfillWithValue }) => {
    try {
      const queryString = objectToQueryString(keys);
      console.log(queryString, 'ok');

    //   const { data } = await apiInstance.get(`/book/all`);
      const { data } = await apiInstance.get(queryString);
      return fulfillWithValue(data);
    } catch (error) {
      const err = error as Error;
      return rejectWithValue(err?.message || 'Unknown error from slice');
    }
  }
);

export interface IInitialState {
  books: any[];
  isLoading: boolean;
  message: string | null;
  isSuccess: boolean;
  statusCode: number | null;
  meta?: object | null;
}

const initialState: IInitialState = {
  books: [],
  isLoading: false,
  message: null,
  isSuccess: false,
  statusCode: null,
  meta: null,
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {}, // Add an empty object if you don't have any extra reducers to include

  extraReducers: (builder) => {
    // get books
    builder.addCase(getBooks.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getBooks.fulfilled, (state, action) => {
      state.isLoading = false;
      state.books = action.payload.data;
      state.isSuccess = action.payload.success;
      state.message = action.payload.message;
      state.statusCode = action.payload.statusCode;
    });
    builder.addCase(getBooks.rejected, (state, action: any) => {
      state.isLoading = false;
      state.message =
        (action.payload.message as string) || 'Unknown error from slice';
    });
  },
});

export default booksSlice.reducer;


