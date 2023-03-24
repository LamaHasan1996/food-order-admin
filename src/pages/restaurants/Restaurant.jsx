import { Container, Grid, Typography, Button, Box } from "@mui/material";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { Card } from "../../components";
import useStyles from "../../styles/pages/restaurants";
import { restaurants } from "../../utils/data";
import { CustomDialog } from "../../components";
import swal from "sweetalert2";

export default function Restaurant() {
  const restaurantsClasses = useStyles();
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [cardAction, setCardAction] = useState(false);
  const [updatedItem, setUpdatedItem] = useState(null);

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
        swal.fire("Added Successfully!", "", "success");
      }, 3000);
    }
  };
  const updateRestaurant = (values) => {
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
              })
            : newArray?.push(item);
        });
        setData(newArray);
        setOpen(false);
        swal.fire("updated Successfully!", "", "success");
      }, 3000);
    }
  };
  return (
    <Container
      maxWidth="lg"
      className={clsx(restaurantsClasses.root, restaurantsClasses.mb40)}
    >
      <Box className={restaurantsClasses.btnBox}>
        <Button
          className={restaurantsClasses.btn}
          onClick={(e) => setOpen(true)}
        >
          Add New
        </Button>
      </Box>
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
              />
            </Grid>
          ))
        ) : (
          <Typography className={restaurantsClasses.noDataText}>
            Loading...
          </Typography>
        )}
      </Grid>
      <CustomDialog
        open={open}
        setOpen={setOpen}
        addNewRestaurant={addNewRestaurant}
        updatedItem={updatedItem}
        updateRestaurant={updateRestaurant}
      />
    </Container>
  );
}
