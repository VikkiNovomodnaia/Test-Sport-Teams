import React from 'react'
import styles from './search.module.css'

interface SearchProps extends React.InputHTMLAttributes<HTMLInputElement> {
	
	value?: string;
}
const Search: React.FC<SearchProps> = ({value, ...props}) => {
	 
	return (
			<div className={styles.search}>
				<input {...props}
				 	type='search'
					placeholder='Search...'
					value={value}
					className={styles.input}/>	
					<button 
					type='submit' className={styles.button}>
						<img src="/src/assets/icons/search.svg" alt="" />	
					</button>	
			</div>		
	)
}

/*

*/

export default Search