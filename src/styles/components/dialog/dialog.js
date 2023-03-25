import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  label: {
    color: "#244B5A!important",
    textTransform: "capitalize",
    "& .MuiInputLabel-asterisk": {
      color: "red",
    },
  },
  input: {
    width: "100%",
    "& .MuiInputBase-root .MuiInputBase-input": {
      height: 11,
    },
  },
  select: {
    height: 41,
    width: "100%",
  },
  inputAutoSize: {
    borderRadius: "10px",
    width: "100%",
    background: "#FFFFFF",
    minHeight: "41px!important",
    padding: "16.5px 14px",
    maxWidth: "100%",
    minWidth: "80%",
  },
  submitBtn: {
    textTransform: "capitalize!important",
    fontSize: `${theme?.elements?.fontSize?.xl - 4}px!important`,
    border: `1px solid ${theme?.elements?.colors?.primary}!important`,
    color: `${theme?.elements?.colors?.primary}!important`,
  },
}));
export default useStyles;
