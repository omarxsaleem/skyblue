import {
  Box,
  Button,
  Card,
  CardHeader,
  HStack,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import React from "react";
import clouds from "../assets/clouds.jpg";

const Signup = () => {
  const boxStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  };

  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <>
      <Box
        height="100vh"
        sx={boxStyles}
        backgroundPosition="center"
        bgImage={clouds}
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
              Create Account
            </Heading>
          </CardHeader>
          <HStack>
            <Input placeholder="Title" />
            <Input placeholder="First name" />
            <Input placeholder="Last name" />
          </HStack>

          <HStack marginY={4}>
            <Input placeholder="Email" />
            <InputGroup>
              <Input placeholder="Password" type={show ? "text" : "password"} />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
          </HStack>

          <HStack>
            <Input placeholder="Date of birth" type="date" />
            <Input placeholder="Country of residence" />
          </HStack>

          <HStack marginY={4}>
            <Input placeholder="Mobile number" />
          </HStack>
        </Card>
      </Box>
    </>
  );
};

export default Signup;
