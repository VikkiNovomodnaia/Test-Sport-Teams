import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	UserName: '',
	login: '',
	password: '',
};

const formSlice = createSlice({
	name: 'form',
	initialState,
	reducers:{
		setSignInData: (state, action) => {
			state.login = action.payload.login;
			state.password = action.payload.password;
		},
		setSignUpData: (state, action) => {
			state.UserName = action.payload.UserName;
			state.login = action.payload.login;
			state.password = action.payload.password;
		}
	},
});

export const { setSignInData, setSignUpData } = formSlice.actions;
export default formSlice.reducer;