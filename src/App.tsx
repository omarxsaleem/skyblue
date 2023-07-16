import { Button, ButtonGroup } from "@chakra-ui/react";
import Form from "./components/Login";
import { Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Form />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
