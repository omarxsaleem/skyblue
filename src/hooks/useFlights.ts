import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const BASE_URL = "https://flight-info-api.p.rapidapi.com/schedules";
const API_KEY = "195d0fe5b4msh3ee733116426d0ap1e60d3jsnc41f2eac5ce7";
const API_HOST = "flight-info-api.p.rapidapi.com";
const API_VERSION = "v2";
const CARRIER_CODE = "UA";
const CODE_TYPE = "IATA";

export interface Flight {
	aircraftType: string;
	arrival: DateTimeLocation;
	flightNumber: number;
	departure: DateTimeLocation;
}

interface DateTimeLocation {
	date: { local: string; utc: string };
	time: { local: string; utc: string };
	airport: { iata: string };
}

interface GetQuery {
	depDateTime: string;
	depAirport: string;
	arrAirport: string;
}

const useFlights = (query: GetQuery) => {
	return useQuery<Flight[], Error>({
		queryKey: ["flights"],
		queryFn: () =>
			axios
				.get(BASE_URL, {
					params: {
						version: API_VERSION,
						CarrierCode: CARRIER_CODE,
						CodeType: CODE_TYPE,
						DepartureDateTime: query.depDateTime,
						DepartureAirport: query.depAirport,
						ArrivalAirport: query.arrAirport,
					},
					headers: {
						"X-RapidAPI-Key": API_KEY,
						"X-RapidAPI-Host": API_HOST,
					},
				})
				.then((res) => res.data.data),
		retry: 1,
	});
};

export default useFlights;

// axios({
//     method: "GET",
//     url: "https://flight-info-api.p.rapidapi.com/schedules",
//     params: {
//         version: "v2",
//         DepartureDateTime: "2023-08-13",
//         CarrierCode: "UA",
//         DepartureAirport: "ORD",
//         ArrivalAirport: "IAH",
//         CodeType: "IATA",
//     },
//     headers: {
//         "X-RapidAPI-Key":
//             "195d0fe5b4msh3ee733116426d0ap1e60d3jsnc41f2eac5ce7",
//         "X-RapidAPI-Host": "flight-info-api.p.rapidapi.com",
//     },
// }).then((res) => res.data.data),
