/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import apiInstance from '../../config/axios';

export const getBooks = createAsyncThunk('books/getBooks', async (_, { rejectWithValue, fulfillWithValue }) => {
    try {
        const { data } = await apiInstance.get('/book/all');
        return fulfillWithValue(data);
    } catch (error) {
        const err = error as Error;
        return rejectWithValue(err?.message || 'Unknown error from slice');
    }
})

export interface IInitialState {
    books: any[];
    isLoading: boolean;
    message: string | null;
    isSuccess: boolean,
    statusCode: number | null,
    meta?: object | null,
}

const initialState: IInitialState = {
    books: [],
    isLoading: false,
    message: null,
    isSuccess: false,
    statusCode: null,
    meta: null,
}

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
            state.message = action.payload.message as string || 'Unknown error from slice';
        });
    }
});

export default booksSlice.reducer;
