import { configureStore } from '@reduxjs/toolkit'
import authSlice from '../redux/slices/auth/authSlice'
import notificationSlice from '../redux/slices/notificationSlice'

const store = configureStore({
	reducer: {
		auth: authSlice,
		notification: notificationSlice,
	},
});
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export default store