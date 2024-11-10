import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	UserName: "",
	login: '',
	password: '',
};

const formSlice = createSlice({
	name: 'form',
	initialState,
	reducers:{
		setFormData: (state, action) => {
			state.login = action.payload.login;
			state.password = action.payload.password;
			state.UserName = action.payload.UserName;
		},
	},
});

export const { setFormData } = formSlice.actions;
export default formSlice.reducer;