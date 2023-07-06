import {
  Box,
  Center,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
} from "@chakra-ui/react";
import { MdAccountCircle } from "react-icons/Md";
import { AiFillLock } from "react-icons/Ai";

const Form = () => {
  return (
    <Box
      marginX="450px"
      marginY="200px"
      maxW="lg"
      borderWidth="3px"
      borderRadius="lg"
      overflow="hidden"
      p="20"
    >
      <Stack spacing={4}>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <MdAccountCircle color="gray.300" />
          </InputLeftElement>
          <Input placeholder="Email" />
        </InputGroup>

        <InputGroup>
          <InputLeftElement>
            <AiFillLock color="gray.300" />
          </InputLeftElement>
          <Input placeholder="Password" />
          <InputRightElement></InputRightElement>
        </InputGroup>
      </Stack>
    </Box>
  );
};

export default Form;
