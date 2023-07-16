/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import apiInstance from '../../config/axios';
import { AxiosError } from 'axios';

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

export const handleDeleteBook = createAsyncThunk(
  'singleBook/handleDeleteBook',
  async (id: string, { rejectWithValue, fulfillWithValue }) => {
    try {
      const getToken = localStorage.getItem('token');
      apiInstance.defaults.headers.common.authorization = `Bearer ${getToken}`;
      const { data } = await apiInstance.delete(`/book/delete/${id}`);
      return fulfillWithValue(data);
    } catch (error) {
      // console.log(error, "delete error");
      const err = error as AxiosError<unknown>;
      return rejectWithValue(err?.response?.data || 'Unknown error from slice');
    }
  }
);

export const editBook = createAsyncThunk(
  'singleBook/editBook',
  async (
    params: { id: string; keys: object },
    { rejectWithValue, fulfillWithValue }
  ) => {
    try {
      const { id, keys } = params;
      const getToken = localStorage.getItem('token');
      apiInstance.defaults.headers.common.authorization = `Bearer ${getToken}`;
      const { data } = await apiInstance.patch(`/book/update/${id}`, keys);
      return fulfillWithValue(data);
    } catch (error) {
      const err = error as AxiosError<unknown>;
      return rejectWithValue(err?.response?.data || 'Unknown error from slice');
    }
  }
);

export const addBook = createAsyncThunk(
  'singleBook/addBook',
  async (keys: object, { rejectWithValue, fulfillWithValue }) => {
    try {
      const getToken = localStorage.getItem('token');
      apiInstance.defaults.headers.common.authorization = `Bearer ${getToken}`;
      const { data } = await apiInstance.post(`/book/add`, keys);
      return fulfillWithValue(data);
    } catch (error) {
      const err = error as AxiosError<unknown>;
      return rejectWithValue(err?.response?.data || 'Unknown error from slice');
    }
  }
);

export interface ISingleBookState {
  singleBook: object | null;
  isLoading: boolean;
  message: string | null;
  isSuccess: boolean;
  statusCode: number | null;
  meta?: object | null;
  review?: object | null;
  isDelete: boolean;
  deleteMessage: string | null;
  editMessage: null | string;
  addMessage: null | string;
}

const initialState: ISingleBookState = {
  singleBook: null,
  isLoading: false,
  message: null,
  isSuccess: false,
  statusCode: null,
  meta: null,
  review: null,
  isDelete: false,
  deleteMessage: null,
  editMessage: null,
  addMessage: null,
};

export const singleBookSlice = createSlice({
  name: 'singleBook',
  initialState,
  reducers: {},

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

    // get review
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

    // delete book
    builder.addCase(handleDeleteBook.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(handleDeleteBook.fulfilled, (state, action) => {
      state.isLoading = false;
      state.review = null;
      state.singleBook = null;
      state.isDelete = action.payload.success;
      state.deleteMessage = action.payload.message;
      state.statusCode = action.payload.statusCode;
    });
    builder.addCase(handleDeleteBook.rejected, (state, action: any) => {
      state.isDelete = action.payload.success;
      state.deleteMessage = action.payload.message;
      state.statusCode = action.payload.statusCode;
      state.isLoading = false;
      state.message =
        (action.payload.message as string) || 'Unknown error from slice';
    });

    //edit book
    builder.addCase(editBook.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(editBook.fulfilled, (state, action) => {
      state.isLoading = false;
      state.singleBook = action.payload.data;
      state.isSuccess = action.payload.success;
      state.editMessage = action.payload.message;
      state.statusCode = action.payload.statusCode;
    });
    builder.addCase(editBook.rejected, (state, action: any) => {
      state.isLoading = false;
      state.editMessage =
        (action.payload.message as string) || 'Unknown error from slice';
    });

    //add book
    builder.addCase(addBook.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addBook.fulfilled, (state, action) => {
      state.isLoading = false;
      state.singleBook = action.payload.data;
      state.isSuccess = action.payload.success;
      state.addMessage = action.payload.message;
      state.statusCode = action.payload.statusCode;
    });
    builder.addCase(addBook.rejected, (state, action: any) => {
      state.isLoading = false;
      state.editMessage =
        (action.payload.message as string) || 'Unknown error from slice';
    });
  },
});

export default singleBookSlice.reducer;
