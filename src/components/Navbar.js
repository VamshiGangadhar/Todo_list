import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";

const Navbar = () => {
  return (
    <AppBar>
      <Toolbar
        sx={{
          backgroundColor: "#545B77",
          height: "60px",
        }}
      >
        <Typography
          sx={{
            alignItems: "center",
            color: "#DDE6ED",
          }}
          variant="h4"
        >
          Todo
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
