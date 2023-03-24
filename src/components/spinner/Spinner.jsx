import { Box } from "@mui/material";
import BounceLoader from "react-spinners/BounceLoader";
import useStyles from "../../styles/components/spinner/spinner";

export default function Spinner(props) {
  let { white } = props;
  const spinnerClasses = useStyles();
  return (
    <Box className={white ? spinnerClasses.white : spinnerClasses.spinnerBox}>
      <BounceLoader loading={true} size={15} speedMultiplier={1} />
    </Box>
  );
}
