import {
  Box,
  Center,
  Container,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
} from "@chakra-ui/react";
import { MdAccountCircle } from "react-icons/Md";
import { AiFillLock } from "react-icons/Ai";

const Form = () => {
  const boxStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  };

  return (
    <Flex alignItems="center" sx={boxStyles}>
      <Box maxW="lg" borderWidth={2} borderRadius="lg" overflow="hidden" p="20">
        <Stack>
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
    </Flex>
  );
};

export default Form;
