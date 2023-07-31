import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import Home from "./components/Flights";

function App() {
<<<<<<< HEAD
	return (
		<>
			<Routes>
				<Route path="/login" element={<Form />}></Route>
				<Route path="/signup" element={<Signup />} />
			</Routes>
			<Grid
				templateAreas={{
					base: `"nav" "main"`,
					lg: `"nav nav" "aside main"`,
				}}
			>
				<GridItem area="nav" bg="#002244">
					<NavBar />
				</GridItem>
				<Show above="lg"></Show>
				<Home />
			</Grid>
		</>
	);
=======
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area="nav" bg="#002244">
          <NavBar />
        </GridItem>
        <Show above="lg"></Show>
      </Grid>
    </>
  );
>>>>>>> Cleaned up router stuff
}

export default App;
