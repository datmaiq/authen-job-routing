import React, { useMemo } from "react";
import "./App.css";

import { CssBaseline } from "@mui/material";
import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Route, Routes, useLocation } from "react-router";
import DetailJob from "./pages/DetailJob";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import { AuthContext } from "./context";
function App() {
  const [login, setLogin] = useState(localStorage.getItem("isLogin"));
  const [mode, setMode] = useState("light");
  const location = useLocation();
  let state = location.state;

  const setAuthen = (data) => {
    localStorage.setItem("isLogin", JSON.stringify(data));
    setLogin(data);
  };

  const handleMode = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  const darkTheme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <AuthContext.Provider value={{ login, setLogin: setAuthen, handleMode }}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Routes
          location={
            location.state?.backgroundLocation
              ? location.state.backgroundLocation
              : location
          }
        >
          <Route path="/" element={<HomePage />}></Route>
          {/* <Route path="/detail/:id" element={<DetailJob />}></Route> */}
        </Routes>
        {state?.backgroundLocation && (
          <Routes>
            <Route path="/detail/:id" element={<DetailJob />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
          </Routes>
        )}
      </ThemeProvider>
    </AuthContext.Provider>
  );
}

export default App;
