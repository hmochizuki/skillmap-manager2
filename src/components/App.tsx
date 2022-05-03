import * as React from "react";
import Box from "@mui/material/Box";
import { Drawer } from "./common/layout/Drawer";
import { AppBar } from "./common/layout/AppBar";
import CssBaseline from "@mui/material/CssBaseline";

type Props = {
  children: React.ReactNode;
};

export const App: React.FC<Props> = ({ children }) => {
  return (
    <Box sx={{ display: "flex"}}>
      <CssBaseline />
      <AppBar />
      <Box sx={{ flexShrink: 0 }}>
        <Drawer />
      </Box>
      <Box component="main" sx={{ flexGrow: 1, marginTop: "64px", padding: "20px"}}>
        {children}
      </Box>
    </Box>
  );
};
