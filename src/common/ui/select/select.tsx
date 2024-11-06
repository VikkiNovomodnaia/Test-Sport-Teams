import React from 'react'
import Select from 'react-select'
import styles from './select.module.css'

export interface OptionType {
	value: string; 
	label: string;
}
export interface SelectProps {
	placeholder?: string;
	options: OptionType[];
	onChange: (option: OptionType | null) => void;
	value?: OptionType | null;
}

const MySelect: React.FC<SelectProps> = ({placeholder, onChange, value, options, ...props}) => {
	 
	return (
					<div className={styles.form}>           
            <Select {...props} 
						onChange={onChange}
						value={value}
						placeholder={placeholder}
						options={options}
						className={styles.select} 
						menuPlacement="top"
						menuPortalTarget={document.body}
						styles={{
						
							control: (provided) => ({
									...provided,
									maxHeight: '40px',
									outline: 'none',
									border: '0',
									borderRadius: '4px',
									background: '#F6F6F6',
									fontSize: '14px',
									fontWeight: '500',
									lineHeight: '24px',
									color: '#707070',
									
							}),
							singleValue: (provided) => ({
								...provided,
								
						}),
						menu: (provided) => ({
							...provided,
							
						}),
							
							option: (provided, state) => ({
								...provided,
								background: state.isSelected ? '#C60E2E' : state.isFocused ?  '#FF768E' : provided.background,
								color: state.isFocused || state.isSelected ? 'white' : provided.color,
								
						}),
					}}
						/>					
        </div>
	)
}

export default MySelect