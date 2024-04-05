import React, { useEffect, useState } from "react";
import JobAppBar from "../components/JobAppBar";
import JobCard from "../components/JobCard";
import jobs from "../jobs.json";
import { Grid, Pagination } from "@mui/material";
function HomePage() {
  const [pageNumber, setPageNumber] = useState(1);
  const [data, setData] = useState(jobs.slice(0, 6));

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
  return (
    <div>
      <div>
        <JobAppBar />
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
    </div>
  );
}

export default HomePage;
