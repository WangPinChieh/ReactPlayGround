import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import lodash from 'lodash';
import PropTypes from 'prop-types';
import FormControl from './form-control';
import { useFormikContext } from 'formik';

const propTypes = {
	controlProps: PropTypes.shape({
		name: PropTypes.string,
		label: PropTypes.string,
	}),
	options: PropTypes.arrayOf(
		PropTypes.shape({
			value: PropTypes.string,
			label: PropTypes.string,
		}),
	),
	value: PropTypes.arrayOf(PropTypes.string),
	placeholder: PropTypes.string,
};
const defaultProps = {
	onChange: () => {},
	options: [],
	value: [],
	placeholder: '',
};

function MultiSelectControl({ controlProps, options, placeholder }) {
	const { name } = controlProps;
	const { values, setFieldValue } = useFormikContext();
	const optionsMap = lodash.groupBy(lodash.cloneDeep(options), option => {
		return option.value;
	});
	let mappedSelectedOptions = lodash
		.cloneDeep(values[name] ?? [])
		.map(option => {
			return optionsMap[option]?.[0];
		});
	const _handleChange = selectedOptions => {
		let mappedOptions = selectedOptions.map(option => {
			return option.value;
		});

		setFieldValue(name, mappedOptions);
	};

	return (
		<FormControl {...controlProps}>
			<Select
				id={name}
				closeMenuOnSelect={false}
				components={makeAnimated()}
				isMulti
				options={options}
				onChange={_handleChange}
				value={mappedSelectedOptions}
				placeholder={placeholder}
			/>
		</FormControl>
	);
}

MultiSelectControl.propTypes = propTypes;
MultiSelectControl.defaultProps = defaultProps;

export default MultiSelectControl;
