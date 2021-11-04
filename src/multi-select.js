import React from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import lodash from "lodash";
function MultiSelect({ options, value, onChange, ...props }) {
  /*
  Input value: ['jenniferId', 'pvId']

  Conver to 
  [{label: 'jennifer.lin2@hp.com', value: 'jenniferId'},
  {label: 'ray.huang@hp.com', value: 'pvId'}]

  Output value: 
  [{label: 'jennifer.lin2@hp.com', value: 'jenniferId'},
  {label: 'ray.huang@hp.com', value: 'pvId'}]

  Conver to 
  ['jenniferId', 'pvId']
  */

  const optionsMap = lodash.groupBy(options, (option) => {
    return option.value;
  });
  const defaultSelectedOptions = lodash.cloneDeep(value ?? []);
  const mappedDefaultSelectedOptions = defaultSelectedOptions.map((option) => {
    return optionsMap[option][0];
  });
  const animatedComponents = makeAnimated();

  const _handleChange = (selectedOptions) => {
    let mappedOptions = selectedOptions.map((option) => {
      return option.value;
    });
    onChange(mappedOptions);
    value = mappedOptions;
    console.log(mappedOptions);
  };
  return (
    <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      isMulti
      options={options}
      onChange={_handleChange}
      value={mappedDefaultSelectedOptions}
    />
  );
}

export default MultiSelect;
