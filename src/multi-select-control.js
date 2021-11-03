import { FormControl } from "@chakra-ui/react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
// import { useField } from "formik";
function MultiSelectControl({controlProps, ...rest}) {
    const { name } = controlProps;
    // const [field] = useField(name);

  const animatedComponents = makeAnimated();
  const users = [
    {
      label: "jennifer.lin2@hp.com",
      value: "jenniferId",
    },
    {
      label: "lisa.chou@hp.com",
      value: "listId",
    },
    {
      label: "ray.huang@hp.com",
      value: "pvId",
    },
  ];
  return (
    <FormControl>
      <Select
        id={name}
        // {...field}
        closeMenuOnSelect={false}
        components={animatedComponents}
        isMulti={true}
        // options={users}
        {...rest}
      />
    </FormControl>
  );
}

export default MultiSelectControl;
