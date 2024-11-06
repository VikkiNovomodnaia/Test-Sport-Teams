import classNames from 'classnames'
import React from 'react'
import { Link, LinkProps } from 'react-router-dom'
import cls from './link.module.scss'

interface MyLinkProps extends LinkProps {
}
 const CustomLink: React.FC<MyLinkProps> = ({ className , children, ...props }) => {
	
	return (	
			<Link 
		    {...props}
				className={classNames(cls.link, className)}
			>
				{children}
			</Link>				
	)
}
export default CustomLink

 