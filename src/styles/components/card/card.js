import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 345,
    minHeight: 335,
    cursor: "pointer",
    position: "relative",
    width: "100%",
    display: "block",
    "& *": {
      fontFamily: `${theme?.elements?.fontFamily?.en}!important`,
    },
    [theme.breakpoints.down(600)]: {
      display: "flex",
      justifyContent: "center",
    },
    "& .MuiCardContent-root": {
      backgroundColor: theme?.elements?.colors.offWhite,
    },
    "& .MuiCardActions-root": {
      padding: "0px 16px 8px",
    },
  },
  flag: {
    padding: "2px 10px",
    position: "absolute",
    fontSize: `${theme?.elements?.fontSize?.sm}px!important`,
    backdropFilter: "blur(4px)",
    backgroundColor: "#ffffff1a",
    height: 24,
  },
  openFlag: {
    right: 0,
  },
  title: {
    height: 28,
    fontSize: `${theme?.elements?.fontSize?.xl}px!important`,
    fontWeight: `${theme?.elements?.fontWeight?.bold}!important`,
    color: theme?.elements?.colors?.black,
    display: "-webkit-box",
    overflow: "hidden",
    textOverflow: "ellipsis",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: "1",
    width: "93%",
  },
  description: {
    height: 70,
    fontSize: `${theme?.elements?.fontSize?.md}px!important`,
    display: "-webkit-box",
    overflow: "hidden",
    textOverflow: "ellipsis",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: "3",
    color: `${theme?.elements?.colors?.black}!important`,
  },
  icon: {
    fontSize: `${theme?.elements?.fontSize?.xl + 8}px!important`,
    color: `${theme?.elements?.colors?.primary}!important`,
    backgroundColor: `${theme?.elements?.colors?.white}!important`,
    border: `1px solid ${theme?.elements?.colors?.primary}`,
    padding: "4px",
    borderRadius: "5px",
    marginRight: "8px",
    "&>:hover": {
      color: `${theme?.elements?.colors?.primary}!important`,
      backgroundColor: `${theme?.elements?.colors?.white}!important`,
    },
  },
}));
export default useStyles;
