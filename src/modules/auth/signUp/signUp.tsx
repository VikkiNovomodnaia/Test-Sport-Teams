import { useState } from 'react'
import { Controller, SubmitHandler, useForm } from "react-hook-form"
import { useDispatch } from 'react-redux'
import { setSignUpData } from '../../../redux/slices/formSlice'

import { Button } from '../../../common/ui/button/button'
import Checkbox from '../../../common/ui/checkbox/checkbox'
import Input from '../../../common/ui/input/input'
import CustomLink from '../../../common/ui/link/link'
import cls from './signUp.module.scss'
import Image from '/src/assets/images/Group.png'

import { useNavigate } from 'react-router-dom'
import { signUp } from '../../../api/auth/SignUp'

export interface FormValues {
	UserName: string;
	login: string;
	password: string;
	repeatPassword: string;
	checkbox: boolean;
}

export const SignUp = () => {
	const navigate = useNavigate();
	const {control, handleSubmit, formState:{errors}, watch } = useForm<FormValues>({
		defaultValues: {
			UserName: "",
			login: "",
			password: "",
			repeatPassword: '',
      checkbox: false,
		},
	});
	
	const dispatch = useDispatch();
	const [showPassword, setShowPassword] = useState(false);
	const [showRepeatPassword, setShowRepeatPassword] = useState(false);

	const onSubmit: SubmitHandler<FormValues> = async(data) => {
		dispatch(setSignUpData(data))
		if (data.password !== data.repeatPassword) {
			alert("Passwords do not match.");
			return;
		}
		try{
			const response = await signUp({
				UserName: data.UserName, 
				login: data.login, 
				password: data.password,				
			});
			console.log('Registration response:', response);
			if (response.token){
				localStorage.setItem('authToken', response.token)
				navigate('/signIn');
				alert('Registration successful')
			} else {
				alert('Failed to retrieve token')
			}
			
		} catch (error) {
			console.error('Registration error:', error);
			alert('Registration failed. Please try again.');
		}
  };

	return (
		<div className={cls.page}>
			
			<div className={cls.auth}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<h1>Sign Up</h1>
					<Controller 
						name='UserName'
						control={control}
						rules={{ required: "Name is required" }}
						render={({ field })=>(
							<Input 
							{...field}
							label='Name'
							error={errors.UserName?.message}
							/>
						)}
					/>
					<Controller 
						name='login'
						control={control}
						rules={{
              required: "Login is required",
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                message: "Invalid email format"
              }
            }}
						render={({ field })=>(
							<Input 
							{...field}
							label='Login'
							error={errors.login?.message}
							/>
						)}
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
								}}
								className={cls.showThisPassword}>
								<img 
									src={showPassword ? '/src/assets/icons/eye_rounded.png' : '/src/assets/icons/close_eye_rounded.png'} 
									alt="Toggle password visibility" 
								/>
								</span>

							</div>
						)}
					/>
					<Controller 
						name='repeatPassword'
						control={control}
						rules={{
							required: 'Repeat password is required',
							validate: value => value === watch('password') || 'Password must match'
						}}
						render={({ field })=>(
							<div className={cls.passwordInput}>
								<Input 
								{...field}
								type={showRepeatPassword ? 'text' :'password'}
								label='Enter your password again'
								error={errors.repeatPassword?.message}
						
								/>
								<span 
								onClick={()=>{
									setShowRepeatPassword(prev=>!prev)
								}}
								className={cls.showThisPassword}>
								<img 
									src={showRepeatPassword ? '/src/assets/icons/eye_rounded.png' : '/src/assets/icons/close_eye_rounded.png'} 
									alt="Toggle password visibility" 
								/>
								</span>

							</div>
						)}
					/>
					<Controller 
						name='checkbox'
						control={control}
						rules={{ required: "You must accept the agreement" }}
						render={({ field })=>(
							<Checkbox 
							className={cls.signUpCheckbox}
							label='I accept the agreement'
							error={errors.checkbox?.message}	
							checked={field.value} 
            	onChange={(e) => {
                field.onChange(e.target.checked); 
            	}}
							onBlur={field.onBlur}
							/>
						)}
					/>
				
					<Button type='submit'className={cls.signUpButton}>
						Sign Up
					</Button>
				</form>
				<div className={cls.registrationMessage}>
					<span>Already a member? </span>
					<CustomLink to='/signIn' 
						className={cls.goToSignIn}>		
						Sign in
					</CustomLink>
				</div>				
			</div>
			<div className={cls.imageSide}>
				<img className={cls.image} src={Image} alt="" />					
			</div>
		</div>
	)
}