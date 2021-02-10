import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import logger from 'redux-logger'

export default configureStore({
    reducer: {
        counter: counterReducer,
    },
    // - redux-thunk and redux-logger were added as middleware
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    // - The Redux DevTools Extension is disabled for production
    devTools: process.env.NODE_ENV !== 'production',
})
