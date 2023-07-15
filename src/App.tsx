import { Button, ButtonGroup } from "@chakra-ui/react";
import Form from "./components/Form";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Form />} />
      </Routes>
    </>
  );
}

export default App;
