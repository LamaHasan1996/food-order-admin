import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "40px",
    flex: "1 1 auto",
    "& *": {
      fontFamily: `${theme?.elements?.fontFamily?.en}!important`,
    },
  },
  btnBox: {
    display: "flex",
    justifyContent: "end",
    marginBottom: "16px",
  },
  btn: {
    textTransform: "capitalize!important",
    fontSize: `${theme?.elements?.fontSize?.xl}px!important`,
    border: `1px solid ${theme?.elements?.colors?.primary}!important`,
    color: `${theme?.elements?.colors?.primary}!important`,
  },
  contentContainer: {
    padding: "24px 0px",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: `${theme?.elements?.fontSize?.xl + 6}px!important`,
    fontWeight: `${theme?.elements?.fontWeight?.bold}!important`,
    color: `${theme?.elements?.colors?.black}!important`,
    marginBottom: "24px!important",
  },
  success: {
    fontSize: `${theme?.elements?.fontSize?.sm + 2}px!important`,
    color: `${theme?.elements?.colors?.green}!important`,
    marginBottom: "24px!important",
  },
  successIcon: {
    fontSize: `${theme?.elements?.fontSize?.sm + 2}px!important`,
    color: `${theme?.elements?.colors?.green}!important`,
    marginRight: "4px!important",
  },
  description: {
    fontSize: `${theme?.elements?.fontSize?.md - 2}px!important`,
    color: theme?.elements?.colors?.black,
  },
  btn: {
    border: `1px solid ${theme?.elements?.colors?.primary}!important`,
    padding: "8px 24px!important",
    borderRadius: "6px!important",
    cursor: "pointer!important",
    fontSize: `${theme?.elements?.fontSize?.md}px!important`,
    color: `${theme?.elements?.colors?.primary}!important`,
    backgroundColor: `${theme?.elements?.colors.white}!important`,
  },
  addBtn: {
    border: `1px solid ${theme?.elements?.colors?.primary}!important`,
    padding: "3px!important",
    minWidth: "33px!important",
    borderRadius: "6px!important",
    cursor: "pointer!important",
    fontSize: `${theme?.elements?.fontSize?.md}px!important`,
    color: `${theme?.elements?.colors?.primary}!important`,
    backgroundColor: `${theme?.elements?.colors.white}!important`,
    height: 33,
    marginLeft: "16px!important",
  },
  disabledBtn: {
    border: `1px solid ${theme?.elements?.colors?.gray}!important`,
    padding: "3px!important",
    minWidth: "33px!important",
    borderRadius: "6px!important",
    cursor: "inherit!important",
    fontSize: `${theme?.elements?.fontSize?.md}px!important`,
    color: `${theme?.elements?.colors?.gray}!important`,
    backgroundColor: `${theme?.elements?.colors.white}!important`,
    height: 33,
    marginLeft: "16px!important",
  },
  buyBtn: {
    border: `1px solid ${theme?.elements?.colors?.green}!important`,
    padding: "3px!important",
    minWidth: "33px!important",
    borderRadius: "6px!important",
    cursor: "pointer!important",
    fontSize: `${theme?.elements?.fontSize?.md}px!important`,
    color: `${theme?.elements?.colors?.green}!important`,
    backgroundColor: `${theme?.elements?.colors.white}!important`,
    height: 44,
    width: 100,
    marginLeft: "16px!important",
  },
  disabledBuyBtn: {
    border: `1px solid ${theme?.elements?.colors?.gray}!important`,
    padding: "3px!important",
    minWidth: "33px!important",
    borderRadius: "6px!important",
    cursor: "pointer!important",
    fontSize: `${theme?.elements?.fontSize?.md}px!important`,
    color: `${theme?.elements?.colors?.gray}!important`,
    backgroundColor: `${theme?.elements?.colors.white}!important`,
    height: 44,
    width: 100,
    marginLeft: "16px!important",
  },
  addBtnBox: {
    "& > .MuiButton-root:hover": {
      color: `${theme?.elements?.colors.white}!important`,
      backgroundColor: `${theme?.elements?.colors?.primary}!important`,
    },
  },
  mb40: {
    marginBottom: 40,
  },
  mb24: {
    marginBottom: 24,
  },
  mb8: {
    marginBottom: 8,
  },
  noDataText: {
    fontSize: `${theme?.elements?.fontSize?.xl}px!important`,
    textAlign: "center",
    color: theme?.elements?.colors?.black,
    paddingLeft: "16px!important",
    width: "100%",
  },
  mealBox: {
    borderTop: `1px solid ${theme?.elements?.colors?.lightGray}`,
    marginTop: 8,
    marginBottom: 8,
    padding: "8px 24px",
    "&:hover": {
      cursor: "pointer",
      boxShadow: "0 2px 16px 0 rgb(0 0 0 / 8%)",
    },
  },
  mealTitleBox: {
    display: "flex",
    justifyContent: "space-between",
    width: "90%",
    [theme.breakpoints.down(600)]: {
      display: "block",
    },
  },
  mealTitle: {
    fontSize: theme?.elements?.fontSize?.md,
    color: theme?.elements?.colors?.black,
  },
  mealDescription: {
    fontSize: theme?.elements?.fontSize?.md - 2,
    color: theme?.elements?.colors?.gray,
  },
  circle: {
    backgroundColor: theme?.elements?.colors?.green,
    height: 15,
    width: 15,
    borderRadius: 16,
    marginRight: 8,
  },
  center: {
    display: "flex",
    alignItems: "center",
  },
  black: {
    color: theme?.elements?.colors?.black,
  },
}));
export default useStyles;
