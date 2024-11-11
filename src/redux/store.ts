import { configureStore } from '@reduxjs/toolkit'
import formReducer from './slices/formSlice'

const store = configureStore({
	reducer: {
		form: formReducer,
	},
});

export type AppDispatch = typeof store.dispatch;

export default store