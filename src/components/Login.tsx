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
import React, { FormEvent, useRef } from "react";
import clouds from "../assets/clouds.jpg";

const Login = () => {
  const [show, setShow] = React.useState(false);

  const boxStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  };

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const loginInfo = { email: "", password: "" };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (emailRef.current !== null) loginInfo.email = emailRef.current.value;
    if (passwordRef.current !== null)
      loginInfo.password = passwordRef.current.value;
    console.log(loginInfo);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box
        height="100vh"
        sx={boxStyles}
        bgImage={clouds}
        backgroundPosition="center"
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
              <Input width={340} placeholder="Email" ref={emailRef} />
            </InputGroup>

            <InputGroup>
              <InputLeftElement>
                <AiFillLock color="gray.300" />
              </InputLeftElement>
              <Input
                width={340}
                placeholder="Password"
                type={show ? "text" : "password"}
                ref={passwordRef}
              />
            </InputGroup>
          </Stack>

          <HStack marginX={20}>
            <Button colorScheme="purple" marginY={4}>
              Sign up
            </Button>
            <Button
              colorScheme="purple"
              className="btn btn-primary"
              marginY={4}
              type="submit"
            >
              Log in
            </Button>
          </HStack>
        </Card>
      </Box>
    </form>
  );
};

export default Login;
