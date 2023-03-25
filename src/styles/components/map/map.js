import { makeStyles } from "@mui/styles";
const useStyles = makeStyles(() => ({
  map: {
    width: "100%!important",
    height: "300px!important",
    position: "relative!important",
    "& > div": {
      width: "100%!important",
      margin: "0px!important",
    },
  },
}));
export default useStyles;
