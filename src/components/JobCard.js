import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "styled-components";

const bull = (
  <Box component="span" sx={{ mx: "2px", transform: "scale(0.8)" }}>
    •
  </Box>
);

export default function JobCard({ job }) {
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
          {job.skills.slice(0, 3).map((jobskill) => (
            <div className="job-skill">{jobskill} </div>
          ))}
        </Typography>
        <Typography variant="body2">{job.city}</Typography>
        <Typography selected className="description" variant="body2">
          {job.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
