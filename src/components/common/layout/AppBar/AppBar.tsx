import * as React from "react";
import BaseAppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

type Props = {
  isSigned: boolean;
  handleSignIn: () => void;
  handleSignOut: () => void;
};

export const AppBarPresentation: React.FC<Props> = () => (
  <BaseAppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
    <Toolbar>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Skillmap Manager
      </Typography>
      <Button color="inherit">Login</Button>
    </Toolbar>
  </BaseAppBar>
);
