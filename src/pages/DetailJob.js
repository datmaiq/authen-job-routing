import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import jobs from "../jobs.json";
import { Box, Card, CardContent, Modal, Typography } from "@mui/material";

function DetailJob() {
  const params = useParams();
  // const detailID = params.id;
  const job = jobs.find((item) => item.id === params.id);
  console.log(job?.skills);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    borderRadius: 2,
    boxShadow: 24,
    border: "none",
  };
  let navigate = useNavigate();

  const [open, setOpen] = React.useState(true);
  // const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    navigate("/");
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Card
          sx={
            {
              // border: "none",
              // boxShadow: 0,
              // backgroundColor: (theme) => theme.palette.primary.light,
              // color: (theme) => theme.palette.common.white,
            }
          }
        >
          <CardContent>
            <Typography variant="h5" component="div">
              {job?.title}
            </Typography>
            <div className="wrap-job-detail-skill">
              {job.skills.slice(0, 3).map((jobskill) => (
                <div className="job-detail-skill">{jobskill} </div>
              ))}
            </div>
            <Typography>{job?.description}</Typography>
            <Typography variant="h6" component="div">
              City: {job?.city}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Modal>
  );
}

export default DetailJob;
