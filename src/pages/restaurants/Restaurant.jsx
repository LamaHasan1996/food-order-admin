import { Container, Grid, Typography, Button, Box } from "@mui/material";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { Card, RestaurantDialog, CustomizedSnackbar } from "../../components";
import useStyles from "../../styles/pages/restaurants";
import { restaurants } from "../../utils/data";

export default function Restaurant() {
  const restaurantsClasses = useStyles();
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [cardAction, setCardAction] = useState(false);
  const [updatedItem, setUpdatedItem] = useState(null);
  const [spinner, setSpinner] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = restaurants;
        await new Promise((resolve) => setTimeout(resolve, 3000));
        setData(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    let user = localStorage?.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null;
    if (user && user?.type === "admin") setCardAction(true);
    else setCardAction(false);
  }, []);

  const addNewRestaurant = (values) => {
    setSpinner(true);
    if (values) {
      let payload = {
        ...values,
        id: data?.length + 1,
        image: "images/restaurants/food5.jpg",
      };
      setTimeout(() => {
        let newArray = [...data, payload];
        setData(newArray);
        setOpen(false);
        setOpenSnackbar(true);
        setMessage("Added Successfully!");
        setStatus("success");
        setSpinner(false);
      }, 3000);
    }
  };
  const updateRestaurant = (values) => {
    setSpinner(true);
    if (values) {
      setTimeout(() => {
        let newArray = [];
        data?.map((item) => {
          item?.id === updatedItem?.id
            ? newArray?.push({
                ...item,
                title: values?.title,
                description: values?.description,
                openAt: values.openAt,
                lat: values.lat,
                lng: values.lng,
              })
            : newArray?.push(item);
        });
        setData(newArray);
        setOpen(false);
        setOpenSnackbar(true);
        setMessage("Updated Successfully!");
        setStatus("info");
        setSpinner(false);
      }, 3000);
    }
  };
  return (
    <Container
      maxWidth="lg"
      className={clsx(restaurantsClasses.root, restaurantsClasses.mb40)}
    >
      {cardAction && (
        <Box className={restaurantsClasses.btnBox}>
          <Button
            className={restaurantsClasses.btn}
            onClick={(e) => {
              setUpdatedItem(null);
              setOpen(true);
            }}
          >
            Add New
          </Button>
        </Box>
      )}
      <Grid container spacing={2}>
        {data?.length ? (
          data?.map((item) => (
            <Grid item sm={4} xs={12}>
              <Card
                item={item}
                cardAction={cardAction}
                data={data}
                setData={setData}
                setUpdatedItem={setUpdatedItem}
                setOpen={setOpen}
                setOpenSnackbar={setOpenSnackbar}
                setMessage={setMessage}
                setStatus={setStatus}
              />
            </Grid>
          ))
        ) : (
          <Typography className={restaurantsClasses.noDataText}>
            Loading...
          </Typography>
        )}
      </Grid>
      <RestaurantDialog
        open={open}
        setOpen={setOpen}
        addNewRestaurant={addNewRestaurant}
        updatedItem={updatedItem}
        updateRestaurant={updateRestaurant}
        spinner={spinner}
      />
      <CustomizedSnackbar
        openSnackbar={openSnackbar}
        setOpenSnackbar={setOpenSnackbar}
        message={message}
        status={status}
      />
    </Container>
  );
}
