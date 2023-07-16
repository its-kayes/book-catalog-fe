/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import apiInstance from '../../config/axios';
import { AxiosError } from 'axios';

export const signup = createAsyncThunk(
  'auth/signup',
  async (keys: object, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await apiInstance.post(`/auth/signup`, keys);
      return fulfillWithValue(data);
    } catch (error) {
      const err = error as Error;
      return rejectWithValue(err?.message || 'Unknown error from slice');
    }
  }
);

export const signin = createAsyncThunk(
  'auth/signin',
  async (keys: object, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await apiInstance.post(`/auth/signin`, keys);

      if(data.success){
        localStorage.setItem('token', data.data.accessToken);
        localStorage.setItem('user', JSON.stringify(data.data.user));
      }

      return fulfillWithValue(data);
    } catch (error) {
        const err = error as AxiosError<unknown>;
        return rejectWithValue(err?.response?.data|| 'Unknown error from slice');
    }
  }
);

export interface IAuthInitialState {
  auth: any[];
  isLoading: boolean;
  message: string | null;
  isSuccess: boolean;
  statusCode: number | null;
}

const initialState: IAuthInitialState = {
  auth: [],
  isLoading: false,
  message: null,
  isSuccess: false,
  statusCode: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {}, // Add an empty object if you don't have any extra reducers to include

  extraReducers: (builder) => {
    // Sign up
    builder.addCase(signup.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(signup.fulfilled, (state, action) => {
      state.isLoading = false;
      state.auth = action.payload.data;
      state.isSuccess = action.payload.success;
      state.message = action.payload.message;
      state.statusCode = action.payload.statusCode;
    });
    builder.addCase(signup.rejected, (state, action: any) => {
      state.isLoading = false;
      state.message =
        (action.payload.message as string) || 'Unknown error from slice';
    });

    // Sign in
    builder.addCase(signin.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(signin.fulfilled, (state, action) => {
      state.isLoading = false;
      state.auth = action.payload.data;
      state.isSuccess = action.payload.success;
      state.message = action.payload.message;
      state.statusCode = action.payload.statusCode;
    });
    builder.addCase(signin.rejected, (state, action: any) => {
      state.isLoading = false;
      state.message =
        (action.payload.message as string) || 'Unknown error from slice';
    });
  },
});

export default authSlice.reducer;
