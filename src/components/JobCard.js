import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { useAuthContext } from "../context";

export default function JobCard({ job }) {
  const auth = useAuthContext();

  const location = useLocation();
  return (
    <Card sx={{ maxHeight: 275 }}>
      <CardContent>
        {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {job.title}
        </Typography> */}
        <Typography variant="h6" component="div">
          {job.title}
        </Typography>
        <Typography
          selected
          className="wrap-job-skill"
          sx={{ mb: 1.5 }}
          color="text.secondary"
        >
          {job.skills.slice(0, 3).map((jobskill, index) => (
            <div key={index} className="job-skill">
              {jobskill}{" "}
            </div>
          ))}
        </Typography>
        <Typography variant="body2">{job.city}</Typography>
        <Typography selected className="description" variant="body2">
          {job.description}
        </Typography>
      </CardContent>
      <CardActions>
        {auth.login ? (
          <Link
            to={`/detail/${job.id}`}
            state={{ backgroundLocation: location }}
          >
            <Button
              // onClick={() => {
              //   if (auth.login) {
              //     navigate(`/login`);
              //   } else {
              //     navigate(`/login`);
              //   }
              // }}
              size="small"
            >
              Learn More
            </Button>
          </Link>
        ) : (
          <Link to={`/login`} state={{ backgroundLocation: location }}>
            <Button size="small">Learn More</Button>
          </Link>
        )}
      </CardActions>
    </Card>
  );
}
