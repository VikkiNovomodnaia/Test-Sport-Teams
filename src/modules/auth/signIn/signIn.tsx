import { useState } from 'react'

import { Controller, SubmitHandler, useForm } from "react-hook-form"
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../../redux/store'

import { Button } from '../../../common/ui/button/button'
import Input from '../../../common/ui/input/input'
import CustomLink from '../../../common/ui/link/link'
import cls from './signIn.module.scss'
import Image from '/src/assets/images/Group.png'

import { useNavigate } from 'react-router-dom'
import { signIn } from '../../../redux/slices/auth/authThunk'

interface FormValues {
	login: string;
	password: string;
}

export const SignIn = () => {
	const navigate = useNavigate();
	const { register, control, handleSubmit, formState:{errors}} = useForm<FormValues>({
			defaultValues: {
				login: "",
				password: "",
			},		
		});
	const dispatch = useDispatch<AppDispatch>();
	const [showPassword, setShowPassword] = useState(false)

	const onSubmit: SubmitHandler<FormValues> = async(data) => {	
		try{
			const response = await dispatch(signIn({
				login: data.login, 
				password: data.password,				
			})).unwrap();
			console.log(response); 
			
			if(response?.token){
				console.log('Login successful');
				navigate('/teams');
			} else {
				console.error('Login failed');
    		alert('Login failed. Please check your credentials.');
			}
		} catch (error) {	
			console.error('Error during sign-in', error);
		}
  };
	return (
		<div className={cls.page}>

			<div className={cls.auth}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<h1>Sign In</h1>				
					<Input 
						{...register('login',{
								required: "Login is required",
								pattern: {
									value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
									message: "Invalid email format"
								}
						})}							
						label='Login'
						error={errors.login?.message}
					/>
						
					<Controller 
						name='password'
						control={control}
						rules={{
							required: 'Password is required',
							minLength: {
								value: 6,
								message: 'Password must be at least 6 characters'
							}
						}}
						render={({ field })=>(
							<div className={cls.passwordInput}>
								<Input 
								{...field}
								type={showPassword ? 'text' :'password'}
								label='Password'
								error={errors.password?.message}						
								/>
								<span 
								onClick={()=>{
									setShowPassword(prev => !prev)
								} }
								className={cls.showThisPassword}>
								<img 
									src={showPassword ? '/src/assets/icons/eye_rounded.png' : '/src/assets/icons/close_eye_rounded.png'} 
									alt="Toggle password visibility" 
								/>
								</span>
							</div>
						)}
					/>
				
					<Button type='submit'
					className={cls.signInButton}>
						Sign In
					</Button>
				</form>
				<div className={cls.registrationMessage}>
					<span>Not a member yet?</span>
					<CustomLink to='/signUp'
						className={cls.goToSignUp}>		
						Sign up
					</CustomLink>
				</div>			
			</div>

			<div className={cls.imageSide}>
				<img  
					className={cls.image} src={Image} alt="" />
			</div>

		</div>
	)
}