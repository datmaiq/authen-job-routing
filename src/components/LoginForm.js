import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useAuthContext } from "../context";
import { useNavigate } from "react-router";

const style = {
  bgcolor: "background.paper",
  display: "flex",
  flexDirection: "column",
  width: "300px",
  border: "1px solid",
  padding: "10px",
  borderRadius: "5px",
};

function LoginForm() {
  const navigate = useNavigate();
  const [username] = useState("maiquocdat");
  const [password] = useState("123");

  // const auth = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const auth = useAuthContext();
  return (
    <Box sx={style} component="form" gap={4}>
      <Typography variant="h4" component="div">
        Login
      </Typography>
      <TextField
        label="Username"
        default="user"
        value={username}
        sx={{ m: 1 }}
      />
      <FormControl sx={{ m: 1 }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={showPassword ? "text" : "password"}
          value={password}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>

      <Button
        onClick={() => {
          auth.setLogin(true);
          navigate("/");
        }}
        sx={{ m: 1, width: "10ch" }}
        variant="contained"
      >
        Login
      </Button>
    </Box>
  );
}

export default LoginForm;
