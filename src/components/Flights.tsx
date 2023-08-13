import { useToast } from "@chakra-ui/react";
import useFlights from "../hooks/useFlights";

const Home = () => {
	const toast = useToast();

	// Input parameters
	const params = {
		depDateTime: "2023-08-13",
		depAirport: "ORD",
		arrAirport: "IAH",
	};

	// Get all flights for a given day from a dep station to an arr station
	const { data: flights, error, isLoading } = useFlights(params);

	if (isLoading) return <p>Loading...</p>;

	if (error)
		return toast({
			title: "API reached it's limit!",
			description: "Please give us your email so we can create a new account.",
			status: "error",
			duration: 5000,
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
