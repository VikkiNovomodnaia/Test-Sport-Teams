import { createSlice } from '@reduxjs/toolkit'
import { signIn } from '../../../redux/slices/auth/authThunk'

type AuthState = {
  user: any;   
  token: string | null;
  error: string | null; 
  isLoading: boolean;
};

const initialState: AuthState= {
	user: null,
	token: null,
	isLoading: false,
	error: null,
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers:{
		logout: (state)=>{
			state.user = null;
			state.token = null;
			state.isLoading = false;
			state.error = null;
		},
	},
	extraReducers:(builder) => {
		builder
			.addCase(signIn.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(signIn.fulfilled, (state, action) => {
				state.isLoading = false;
				state.error = null;
				state.user = action.payload.user;
				state.token = action.payload.token;
			})
			.addCase(signIn.rejected, (state, action) => {
				state.isLoading = false;
				state.error = (action.payload as string) || action.error.message || 'An unknown error occurred';
			})
	}
})

export const {logout} = authSlice.actions;
export default authSlice.reducer;