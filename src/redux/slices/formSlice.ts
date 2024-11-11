import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	isLoading: false,
  error: '',
};

const formSlice = createSlice({
	name: 'form',
	initialState,
	reducers:{
		setLoading:(state)=>{
			state.isLoading = true;
			state.error = '';
		},
		setError: (state, action) => {
			state.error = action.payload;
			state.isLoading = false;
		},
		reset: (state) => {
			state.isLoading = false;
      state.error = '';
		}
	},
});

export const { setLoading, setError, reset } = formSlice.actions;
export default formSlice.reducer;