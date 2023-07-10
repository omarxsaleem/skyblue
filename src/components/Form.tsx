import {
  Box,
  Button,
  Card,
  CardHeader,
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
        p="20"
      >
        <CardHeader>
          <Heading size="md">Sign in</Heading>
        </CardHeader>
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
            <Input placeholder="Password" type={show ? "text" : "password"} />
          </InputGroup>
        </Stack>

        <Button className="btn btn-primary" marginY={4}>
          Log in
        </Button>
      </Card>
    </Box>
  );
};

export default Form;
