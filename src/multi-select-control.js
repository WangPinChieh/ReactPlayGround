import React from "react";
import { FormControl } from "@chakra-ui/react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { useField } from "formik";
function MultiSelectControl({ controlProps, ...rest }) {
  const { name } = controlProps;
  const [field] = useField(name);

  const animatedComponents = makeAnimated();
  return (
    <FormControl>
      <Select
        id={name}
        // {...field}
        closeMenuOnSelect={false}
        components={animatedComponents}
        isMulti={true}
        {...rest}
      />
    </FormControl>
  );
}

export default MultiSelectControl;
