import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  spinnerBox: {
    "& > span > span": {
      backgroundColor: `${theme?.elements?.colors?.primary}!important`,
    },
  },
  white: {
    "& > span > span": {
      backgroundColor: `${theme?.elements?.colors?.white}!important`,
    },
  },
}));
export default useStyles;
