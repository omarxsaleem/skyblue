import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import App from "./App";
import "./index.css";
import {
<<<<<<< HEAD
	BrowserRouter,
	RouterProvider,
	createBrowserRouter,
=======
  BrowserRouter,
  RouterProvider,
  createBrowserRouter,
>>>>>>> Cleaned up router stuff
} from "react-router-dom";
import router from "./routing/routes";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
<<<<<<< HEAD
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
=======
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
>>>>>>> Cleaned up router stuff
);
