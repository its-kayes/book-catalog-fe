import { configureStore } from '@reduxjs/toolkit'
import booksReducer from '../../src/store/slice/bookSlice'
import authReducer from '../../src/store/slice/authSlice'
import singleBookReducer from '../../src/store/slice/singleBookSlice'

export const store = configureStore({
  reducer: {
    books: booksReducer,
    auth: authReducer,
    singleBook: singleBookReducer
  },
})

export default store;

// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch