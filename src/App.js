import React from "react";
import Hello from "./components/hello";
import Navbar from "./components/Navbar";
import { Box } from "@mui/material";

function App() {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        paddingLeft: 0,
        backgroundColor: "#526D82",
        color: "#DDE6ED",
      }}
    >
      <Navbar />
      <Box>
        <Hello />
      </Box>
    </Box>
  );
}

export default App;
