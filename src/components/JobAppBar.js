import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { useAuthContext } from "../context";

export default function JobAppBar() {
  const location = useLocation();
  const auth = useAuthContext();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Job Routing
          </Typography>
          <Button onClick={auth.handleMode} color="inherit">
            Theme
          </Button>
          {auth.login ? (
            <Button
              onClick={() => {
                auth.setLogin(false);
              }}
              color="inherit"
            >
              Log out
            </Button>
          ) : (
            <Link to={`/login`} state={{ backgroundLocation: location }}>
              <Button color="inherit">Login</Button>
            </Link>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
