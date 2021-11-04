import React from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import lodash from "lodash";
function MultiSelect({ options, value, onChange, ...props }) {

  const optionsMap = lodash.groupBy(lodash.cloneDeep(options), (option) => {
    return option.value;
  });
  const mappedDefaultSelectedOptions = lodash.cloneDeep(value ?? []).map((option) => {
    return optionsMap[option]?.[0];
  });

  const _handleChange = (selectedOptions) => {
    let mappedOptions = selectedOptions.map((option) => {
      return option.value;
    });
    onChange(mappedOptions);
    value = mappedOptions;
  };
  return (
    <Select
      closeMenuOnSelect={false}
      components={makeAnimated()}
      isMulti
      options={options}
      onChange={_handleChange}
      value={mappedDefaultSelectedOptions}
    />
  );
}

export default MultiSelect;
