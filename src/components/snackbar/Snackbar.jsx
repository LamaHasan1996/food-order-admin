import Snackbar from "@mui/material/Snackbar";
import { useState, useEffect } from "react";

export default function CustomizedSnackbar(props) {
  let { message, openSnackbar, status, setOpenSnackbar } = props;
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    console.log(openSnackbar, "openSnackbar");
    if (props?.openSnackbar) {
      setOpen(openSnackbar);
      setOpenSnackbar(false);
    }
  }, [props]);

  return (
    <Snackbar
      className={status}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      open={open}
      onClose={handleClose}
      autoHideDuration={5000}
      message={message}
      key={message}
    />
  );
}
