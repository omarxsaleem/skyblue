import { Spinner, useToast } from "@chakra-ui/react";
import useFlights from "../hooks/useFlights";

const Home = () => {
  const toast = useToast();

  // Input parameters
  const params = {
    depDateTime: "2023-08-16",
    depAirport: "ORD",
    arrAirport: "LAX",
  };

  // Get all flights for a given day from a dep station to an arr station
  const { data: flights, error, isLoading } = useFlights(params);

  if (isLoading)
    return (
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="md"
      />
    );

  if (error)
    return toast({
      title: "API reached it's limit!",
      description: error.message,
      status: "error",
      duration: 3000,
      isClosable: true,
    });

  return (
    <>
      <h1>Flights:</h1>
      <ul>
        {flights?.map((flight) => (
          <li key={flight.flightNumber}>UA{flight.flightNumber}</li>
        ))}
      </ul>
    </>
  );
};

export default Home;
