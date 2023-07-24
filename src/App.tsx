import { Grid, GridItem, Show } from "@chakra-ui/react";
import Form from "./components/Login";
import { Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import NavBar from "./components/NavBar";

function App() {
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
      </Grid>
    </>
  );
}

export default App;
