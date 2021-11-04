import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import lodash from 'lodash';
import PropTypes from 'prop-types';

const propTypes = {
	options: PropTypes.arrayOf(
		PropTypes.shape({
			value: PropTypes.string,
			label: PropTypes.string,
		}),
	),
	value: PropTypes.arrayOf(PropTypes.string),
	placeholder: PropTypes.string,
	onChange: PropTypes.func,
};
const defaultProps = {
	onChange: () => {},
	options: [],
	value: [],
	placeholder: '',
};

function MultiSelect({ options, placeholder, value, onChange }) {
	const optionsMap = lodash.groupBy(lodash.cloneDeep(options), option => {
		return option.value;
	});
	const mappedSelectedOptions = lodash.cloneDeep(value ?? []).map(option => {
		return optionsMap[option]?.[0];
	});
	const _handleChange = selectedOptions => {
		let mappedOptions = selectedOptions.map(option => {
			return option.value;
		});

		onChange(mappedOptions);
	};

	return (
		<Select
			closeMenuOnSelect={false}
			components={makeAnimated()}
			isMulti
			options={options}
			onChange={_handleChange}
			value={mappedSelectedOptions}
			placeholder={placeholder}
		/>
	);
}

MultiSelect.propTypes = propTypes;
MultiSelect.defaultProps = defaultProps;

export default MultiSelect;
