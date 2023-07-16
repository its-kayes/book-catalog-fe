/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import apiInstance from '../../config/axios';

export const getBookDetails = createAsyncThunk(
  'singleBook/getBookDetails',
  async (id: string, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await apiInstance.get(`/book/details/${id}`);
      return fulfillWithValue(data);
    } catch (error) {
      const err = error as Error;
      return rejectWithValue(err?.message || 'Unknown error from slice');
    }
  }
);

export const getBookReviews = createAsyncThunk(
  'singleBook/getBookReviews',
  async (title: string, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await apiInstance.get(
        `/review/reviews-for-book/?book=${title}`
      );
      return fulfillWithValue(data);
    } catch (error) {
      const err = error as Error;
      return rejectWithValue(err?.message || 'Unknown error from slice');
    }
  }
);

export interface ISingleBookState {
  singleBook: any[];
  isLoading: boolean;
  message: string | null;
  isSuccess: boolean;
  statusCode: number | null;
  meta?: object | null;
  review?: object | null;
}

const initialState: ISingleBookState = {
  singleBook: [],
  isLoading: false,
  message: null,
  isSuccess: false,
  statusCode: null,
  meta: null,
  review: null,
};

export const singleBookSlice = createSlice({
  name: 'singleBook',
  initialState,
  reducers: {}, // Add an empty object if you don't have any extra reducers to include

  extraReducers: (builder) => {
    // get book details
    builder.addCase(getBookDetails.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getBookDetails.fulfilled, (state, action) => {
      state.isLoading = false;
      state.singleBook = action.payload.data;
      state.isSuccess = action.payload.success;
      state.message = action.payload.message;
      state.statusCode = action.payload.statusCode;
    });
    builder.addCase(getBookDetails.rejected, (state, action: any) => {
      state.isLoading = false;
      state.message =
        (action.payload.message as string) || 'Unknown error from slice';
    });

    // get books
    builder.addCase(getBookReviews.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getBookReviews.fulfilled, (state, action) => {
      state.isLoading = false;
      state.review = action.payload.data;
      state.isSuccess = action.payload.success;
      state.message = action.payload.message;
      state.statusCode = action.payload.statusCode;
    });
    builder.addCase(getBookReviews.rejected, (state, action: any) => {
      state.isLoading = false;
      state.message =
        (action.payload.message as string) || 'Unknown error from slice';
    });
  },
});

export default singleBookSlice.reducer;
