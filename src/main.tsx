import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import App from "./App";
import "./index.css";
import {
<<<<<<< HEAD
<<<<<<< HEAD
	BrowserRouter,
	RouterProvider,
	createBrowserRouter,
=======
  BrowserRouter,
  RouterProvider,
  createBrowserRouter,
>>>>>>> Cleaned up router stuff
=======
	BrowserRouter,
	RouterProvider,
	createBrowserRouter,
>>>>>>> Revert changes in Flight.tsx and main.tsx
} from "react-router-dom";
import router from "./routing/routes";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<ChakraProvider>
			<BrowserRouter>
				<QueryClientProvider client={queryClient}>
					<App />
					<ReactQueryDevtools />
				</QueryClientProvider>
			</BrowserRouter>
		</ChakraProvider>
	</React.StrictMode>
);
