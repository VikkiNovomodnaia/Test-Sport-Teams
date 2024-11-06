import classNames from 'classnames'
import React, { forwardRef, useId } from 'react'
import cls from './checkbox.module.scss'

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement>{
	label: string;
	error?: string | boolean;
}

const Checkbox= forwardRef<HTMLInputElement, CheckboxProps>(({ className, label, checked, error, onChange, disabled, ...props }, ref) => {
	const id = useId();
	return(
			<div className={cls.main}>
				<input 				
						type='checkbox'
						id={id}
						ref={ref}
						className={classNames(cls.checkbox, error ? cls.errorCheckbox : '', className)} 
						checked={checked} 
						onChange={onChange} 
						disabled = {disabled}
				/>
				
				<label htmlFor={props.id || id} className={classNames(cls.label, error ? cls.errorLabel : '', className)}>
						{label}
				</label>
				
				{error && (
					<div className={cls.errorMessage}>
						{error}
					</div>)}
			</div>
	);
});

export default Checkbox