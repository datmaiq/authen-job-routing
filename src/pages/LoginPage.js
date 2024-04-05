import { Box, Modal } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";
import LoginForm from "../components/LoginForm";
import { useAuthContext } from "../context";

const LoginPage = () => {
  const auth = useAuthContext();
  console.log(auth.login);
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
  // let { id } = useParams();
  const [open, setOpen] = React.useState(true);
  // const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    navigate("/");
  };
  return (
    <div className="wrap-login">
      <p>{auth.login}</p>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <LoginForm />
        </Box>
      </Modal>
    </div>
  );
};

export default LoginPage;
