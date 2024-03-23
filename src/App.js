import React, { useEffect, useMemo } from "react";
import "./App.css";
import JobAppBar from "./components/JobAppBar";
import JobCard from "./components/JobCard";
import jobs from "./jobs.json";
import { CssBaseline, Grid, Pagination } from "@mui/material";
import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
function App() {
  // const darkTheme = createTheme({
  //   palette: {
  //     mode: "dark",
  //   },
  // });

  const [pageNumber, setPageNumber] = useState(1);
  const [data, setData] = useState(jobs.slice(0, 6));
  const [mode, setMode] = useState("light");
  const handlePagination = (page) => {
    let dataJob = [...jobs];
    console.log(page);
    if (page) {
      setData(dataJob.slice((page - 1) * 6, page * 6));
    }
  };
  useEffect(() => {
    const totalPage = () => {
      setPageNumber(Math.ceil(jobs.length / 6));
    };
    totalPage();
  }, []);

  // const handleMode = useCallback(() => {
  //   setMode("light");
  // }, []);

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
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div>
        <JobAppBar handleMode={handleMode} />
        <Grid container spacing={3} sx={{ mt: 2 }}>
          {data.map((job) => (
            <Grid item xs={12} md={4} lg={4} xl={4} key={job.id}>
              <JobCard job={job} />
            </Grid>
          ))}
        </Grid>
        <div className="container">
          <Pagination
            onChange={(event, page) => {
              handlePagination(page);
            }}
            count={pageNumber}
            size="large"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
