import classNames from 'classnames'
import React, { forwardRef } from 'react'
import cls from './input.module.scss'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
 label: string;
 error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ className, label, error, ...props }, ref) => {
	return (
		<div className={cls.container}>
			
			<label 	htmlFor={props.id}
							className={cls.label}>{label}
			</label>
			
			<input 
				ref={ref}
					className={classNames(cls.input, className)} 
					{...props}
			/>

			{error && <span className={cls.error}>{error}</span>}
		</div>
	);
});

export default Input