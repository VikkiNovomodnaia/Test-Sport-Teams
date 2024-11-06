import React from 'react'
import Select, { components, GroupBase, MultiValueProps } from 'react-select'
import { OptionType } from '../ui/select/select'
import styles from './multiselect.module.css'


interface MultiSelectProps {
	onChange: (selectedOptions: OptionType[]) => void;
	placeholder?: string;
	options: OptionType[];
	value?: OptionType[];
}
const MultiSelect: React.FC<MultiSelectProps> = ({onChange, value, options, ...props}) => {

	const customMultiValue = (props: MultiValueProps<any, true, GroupBase<any>>) => {
		const { data, index, getValue} = props;
    const selectedValues = getValue();
    const maxVisible: number = 2;

    if (index < maxVisible) {
      return (
        <components.MultiValue {...props}>
          {data.label}
        </components.MultiValue>
      );
    } else if (index === maxVisible) {
      return (
        <components.MultiValue {...props}>
          {`...${selectedValues.length - maxVisible}`}
        </components.MultiValue>
      );
    }
    return null;
  };

	return (	
		<div className={styles.form}> 			          
    	<Select {...props} 
				value={value}
				placeholder={props.placeholder || 'Select...'}
				isMulti
				options = {options}
				className={styles.select}
				components={{ MultiValue: customMultiValue}}
				onChange={(selected) => onChange(selected as OptionType[])}
				
				styles={{
					multiValue: (provided) => ({
							...provided,
							backgroundColor: 'red',
					}),
					control: (provided) => ({
							...provided,
							maxHeight: '40px',
							outline: 'none'
					}),
					multiValueLabel: (provided) => ({
							...provided,
							color: 'white',
							fontSize: '14px',
							fontWeight: '400',
							lineHeight: '19.12px',
							marginRight: '8px',
							maxWidth: '60px'
					}),
					multiValueRemove: (provided) => ({
							...provided,
							color: 'white',
					}),
					option: (provided, state) => ({
						...provided,
						background: state.isSelected ? '#E4163A' : state.isFocused ?  '#C60E2E' : provided.background,
						color: state.isFocused || state.isSelected ? 'white' : provided.color,
						
				}),
				}}
				/>  
		</div>        
	)
}

export default MultiSelect

