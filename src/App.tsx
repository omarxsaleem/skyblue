import { Grid, GridItem, Show } from "@chakra-ui/react";
import { Routes, Route } from "react-router";
import Signup from "./components/Signup";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import Home from "./components/Flights";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
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
}

export default App;
