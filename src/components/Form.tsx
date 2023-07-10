import {
  Box,
  Button,
  Card,
  CardHeader,
  HStack,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
} from "@chakra-ui/react";
import { MdAccountCircle } from "react-icons/Md";
import { AiFillLock } from "react-icons/Ai";
import React from "react";
import clouds from "../assets/clouds.jpg";

const Form = () => {
  const [show, setShow] = React.useState(false);

  const boxStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  };

  return (
    <Box
      height="100vh"
      sx={boxStyles}
      bgImage={clouds}
      backgroundPosition="center"
      // backgroundRepeat="no-repeat"
    >
      <Card
        maxW="lg"
        borderWidth={2}
        borderRadius="lg"
        overflow="hidden"
        p="50"
        bgColor="#002244"
      >
        <CardHeader>
          <Heading fontSize="2em" marginY={4}>
            Sign in
          </Heading>
        </CardHeader>
        <Stack>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <MdAccountCircle color="gray.300" />
            </InputLeftElement>
            <Input width={340} placeholder="Email" />
          </InputGroup>

          <InputGroup>
            <InputLeftElement>
              <AiFillLock color="gray.300" />
            </InputLeftElement>
            <Input
              width={340}
              placeholder="Password"
              type={show ? "text" : "password"}
            />
          </InputGroup>
        </Stack>

        <HStack marginX={20}>
          <Button colorScheme="purple" marginY={4}>
            Sign up
          </Button>
          <Button colorScheme="purple" className="btn btn-primary" marginY={4}>
            Log in
          </Button>
        </HStack>
      </Card>
    </Box>
  );
};

export default Form;
