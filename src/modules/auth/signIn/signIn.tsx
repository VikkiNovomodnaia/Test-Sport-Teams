import { useState } from 'react'
import { Controller, SubmitHandler, useForm } from "react-hook-form"
import { Button } from '../../../common/ui/button/button'
import Input from '../../../common/ui/input/input'
import CustomLink from '../../../common/ui/link/link'
import CustomNotification from '../../../common/ui/notification/notification'
import cls from './signIn.module.scss'
import Image from '/src/assets/images/Group.png'

import { signIn } from '../../../api/auth/SignIn'

interface FormValues {
	login: string;
	password: string;
}

export const SignIn = () => {

		const { control, handleSubmit, formState:{errors} } = useForm<FormValues>({
			defaultValues: {
				login: "",
				password: "",
			},
		});
		const [isVisible, setIsVisible] = useState(false);
	const [notification, setNotification] = useState<{message: string}>({ message: ''});	
	const [showPassword, setShowPassword] = useState(false);
	const togglePasswordVisibility = () => {
			setShowPassword(prev => !prev);
		};	
	const showNotification = (message: string) => {
			console.log('Notification:', message);
			setNotification({message});
			setIsVisible(true);
		};  
	const onSubmit: SubmitHandler<FormValues> = async(data) => {
	
		try{
			const response = await signIn({
				login: data.login, 
				password: data.password,
				
			});
			console.log('Login to account response:', response);
			showNotification('Login to account successful')
		} catch (error: unknown) {
			console.error('Login to account error:', error);
			if (error instanceof Error) {
				console.log('Error message:', error.message);
			}else {
				showNotification('An unexpected error occurred.');
			}
			showNotification('Login to account failed. Please try again.');
		}
  };


	return (
		<div className={cls.page}>
			{isVisible && (
				<CustomNotification
						message={notification.message}
						className={cls.signUpErrorNotification}
				/>
			)}	

			<div className={cls.auth}>
				<form
					onSubmit={handleSubmit(onSubmit)}>
					<h1>Sign In</h1>
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
								onClick={togglePasswordVisibility}
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