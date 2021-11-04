import "./App.css";
import {
  ChakraProvider,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon,
  MenuCommand,
  MenuDivider,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Flex,
  Spacer,
  Box,
  FormControl,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import MultiSelectControl from "./multi-select-control";
import { Formik } from "formik";
import MultiSelect from "./multi-select";
function MyMultipleSelectMenu() {
  return (
    <Menu closeOnSelect={false}>
      <MenuButton as={Button} colorScheme="blue">
        MenuItem
      </MenuButton>
      <MenuList minWidth="240px">
        <MenuOptionGroup title="Country" type="checkbox">
          <MenuItemOption value="email">Email</MenuItemOption>
          <MenuItemOption value="phone">Phone</MenuItemOption>
          <MenuItemOption value="country">Country</MenuItemOption>
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  );
}
function MyMenu(props) {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        {props.actionName}
      </MenuButton>
      <MenuList>
        <MenuItem>Download</MenuItem>
        <MenuItem>Create a Copy</MenuItem>
        <MenuItem>Mark as Draft</MenuItem>
        <MenuItem>Delete</MenuItem>
        <MenuItem>Attend a Workshop</MenuItem>
      </MenuList>
    </Menu>
  );
}
function MyModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <MyMenu actionName="Choose" />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
function App() {
  const { register, handleSubmit } = useForm();
  // const [result, setResult] = useState([]);
  const [result, setResult] = useState(["jenniferId", "listId"]);
  const onSubmit = (data) => setResult(JSON.stringify(data));
  const initialValues = {};
  const [formValues, setFormValues] = useState(initialValues);
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
    <>
      <div>{JSON.stringify(result)}</div>
      <MultiSelect
        options={users}
        value={result}
        // onChange={(value) => {
        //   setResult(value);
        // }}
      />
    </>
    // <ChakraProvider>
    //   <p>Submit result: {JSON.stringify(formValues)}</p>
    //   <Formik
    //     initialValues={formValues}
    //     onSubmit={(values) => {
    //       setFormValues(values);
    //       console.log(JSON.stringify(values));
    //     }}
    //   >
    //     {({
    //       values,
    //       touched,
    //       errors,
    //       dirty,
    //       isSubmitting,
    //       handleChange,
    //       handleBlur,
    //       handleSubmit,
    //       handleReset,
    //     }) => (
    //       <>
    //         <Box as="form" w={80} onSubmit={handleSubmit}>
    //           <MultiSelectControl
    //             controlProps={{ name: "multiSelections", label: "" }}
    //             options={users}
    //           />
    //         </Box>
    //       </>
    //     )}
    //   </Formik>
    //   <Button colorScheme="blue" mr={3} onClick={onSubmit}>
    //     Submit
    //   </Button>
    // </ChakraProvider>

    // <ChakraProvider>
    //     <Flex>
    //       <Box>
    //         <MyMultipleSelectMenu />
    //       </Box>
    //       <Box>
    //         <MyMenu />
    //       </Box>
    //     </Flex>
    // </ChakraProvider>

    // <form onSubmit={handleSubmit(onSubmit)}>
    //   <input {...register("firstName")} placeholder="First name" />
    //   <input {...register("lastName")} placeholder="Last name" />
    //   <select {...register("category")}>
    //     <option value="">Select...</option>
    //     <option value="A">Category A</option>
    //     <option value="B">Category B</option>
    //   </select>
    //   <p>{result}</p>
    //   <input type="submit" />
    // </form>

    // <ChakraProvider>
    //   <MyModal></MyModal>

    /* <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          Actions
        </MenuButton>
        <MenuList>
          <MenuItem>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
          <MenuItem>Mark as Draft</MenuItem>
          <MenuItem>Delete</MenuItem>
          <MenuItem>Attend a Workshop</MenuItem>
        </MenuList>
      </Menu> */
    // </ChakraProvider>
  );
}

export default App;
