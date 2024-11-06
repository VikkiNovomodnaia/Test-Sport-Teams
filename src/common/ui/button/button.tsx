import classNames from 'classnames'
import React, { ReactNode } from 'react'
import cls from './button.module.scss'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>  {
	children: ReactNode;
	variant?: 'secondary' 
}



export const Button: React.FC<ButtonProps> = ({className, children,variant='', ...props }) => {
	return (			
				<button 
					{...props}
					className={classNames(cls.button, cls[variant], className)}  >
						{children}
				</button>						
	)
}

