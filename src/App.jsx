import {
  Box,
  Button,
  CssBaseline,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import MuiDrawer from "@mui/material/Drawer";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/styles";
import { Suspense, useEffect, useState } from "react";
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoIosRestaurant,
} from "react-icons/io";
import { IoRestaurantOutline } from "react-icons/io5";
import { BrowserRouter, Link } from "react-router-dom";
import "./App.css";
import { Spinner } from "./components";
import { LogIn } from "./pages";
import Routing from "./Routing";
import { basicTheme } from "./styles/theme";
import { makeTheme } from "./utils/globalFunctions";

function App() {
  const materialLightTheme = makeTheme(createTheme(basicTheme), "light");
  const [logIn, setLogIn] = useState(true);
  const [open, setOpen] = useState(false);
  const [spinner, setSpinner] = useState(false);

  const handleDrawerToogle = () => {
    setOpen(!open);
  };

  const logOut = () => {
    setSpinner(true);
    setTimeout(() => {
      sessionStorage?.removeItem("user");
      setSpinner(false);
      setLogIn(false);
    }, 3000);
  };

  useEffect(() => {
    let user = localStorage?.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null;
    if (user) setLogIn(true);
    else setLogIn(false);
  }, []);

  const listArray = [
    {
      id: 1,
      title: "Restaurants",
      link: "/restaurants",
      icon: <IoIosRestaurant className="icon" />,
    },
    {
      id: 1,
      title: "Meals",
      link: "/meals",
      icon: <IoRestaurantOutline className="icon" />,
    },
  ];

  return (
    <ThemeProvider theme={materialLightTheme}>
      <CssBaseline />
      <Paper
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          boxShadow: "none",
          backgroundColor: "#fff",
          minHeight: "100vh",
        }}
      >
        {logIn ? (
          <Suspense fallback={<h5>Loading...</h5>}>
            <BrowserRouter>
              <Box display="flex" flexDirection="column">
                <CssBaseline />
                <MuiAppBar
                  position="fixed"
                  open={open}
                  style={{
                    backgroundColor:
                      materialLightTheme?.elements?.colors?.primary,
                  }}
                >
                  <Toolbar className="toolbar">
                    <Typography variant="h6" noWrap component="div">
                      Meal Meat
                    </Typography>
                    <Button className="logOutBtn" onClick={(e) => logOut()}>
                      Log Out {spinner ? <Spinner white={true} /> : null}
                    </Button>
                  </Toolbar>
                </MuiAppBar>
                <MuiDrawer
                  variant="permanent"
                  open={open}
                  className={open ? "widther" : "smaller"}
                >
                  <Box className="end">
                    <IconButton onClick={handleDrawerToogle}>
                      {open ? <IoIosArrowBack /> : <IoIosArrowForward />}
                    </IconButton>
                  </Box>
                  <Divider />
                  <List>
                    {listArray.map((item, index) => (
                      <ListItem
                        key={item?.id}
                        disablePadding
                        sx={{ display: "block" }}
                        component={Link}
                        to={`${item.link}`}
                      >
                        <ListItemButton
                          sx={{
                            minHeight: 48,
                            justifyContent: open ? "initial" : "center",
                            px: 2.5,
                          }}
                          className="links"
                        >
                          <ListItemIcon
                            sx={{
                              minWidth: 0,
                              mr: open ? 3 : "auto",
                              justifyContent: "center",
                            }}
                          >
                            {item?.icon}
                          </ListItemIcon>
                          <ListItemText
                            primary={item?.title}
                            sx={{ opacity: open ? 1 : 0 }}
                          />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </MuiDrawer>
                <main
                  className="content"
                  style={{
                    flexGrow: 1,
                    p: 3,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div className="contentTop"></div>
                  <Routing />
                </main>
              </Box>
            </BrowserRouter>
          </Suspense>
        ) : (
          <LogIn />
        )}
      </Paper>
    </ThemeProvider>
  );
}

export default App;
