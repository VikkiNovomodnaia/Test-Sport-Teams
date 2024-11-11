import { createSlice } from '@reduxjs/toolkit'

const errorSlice = createSlice({
	name: 'error',
	initialState: null,
	reducers: {
		setError: (state, action) => action.payload,
		cleanError: ()=>null,
	}
})

export const {setError, cleanError} = errorSlice.actions;
export default errorSlice.reducer;