import { Box, Button, Container, Typography } from "@mui/material";
import clsx from "clsx";
import { useEffect, useState } from "react";
import swal from "sweetalert2";
import { MealDialog, CustomizedSnackbar } from "../../components";
import useStyles from "../../styles/pages/restaurants";
import { restaurants } from "../../utils/data";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";

export default function Meals() {
  const mealClasses = useStyles();
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
        const response = restaurants?.flatMap((restaurant) => restaurant.meals);
        console.log(response, "response");
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

  const addNewMeal = (values) => {
    setSpinner(true);
    if (values) {
      let payload = {
        ...values,
        id: Math.floor(Math.random() * 1000) + 1,
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
  const updateMeal = (values) => {
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
      className={clsx(mealClasses.root, mealClasses.mb40)}
    >
      {cardAction && (
        <Box className={mealClasses.btnBox}>
          <Button
            className={mealClasses.btn}
            onClick={(e) => {
              setUpdatedItem(null);
              setOpen(true);
            }}
          >
            Add New Meal
          </Button>
        </Box>
      )}
      <Box>
        {data?.length ? (
          data?.map((item) => (
            <Box className={mealClasses.mealBox}>
              {cardAction && (
                <Box className={mealClasses.absoluteBox}>
                  <FiEdit
                    className={mealClasses.icon}
                    onClick={(e) => {
                      setUpdatedItem(item);
                      setOpen(true);
                    }}
                  />
                  <AiOutlineDelete
                    className={mealClasses.icon}
                    onClick={(e) =>
                      swal
                        .fire({
                          title: "Attention !",
                          text: "Are You Sure?",
                          icon: "warning",
                          buttons: true,
                          showCancelButton: true,
                          cancelButtonText: "Cancel",
                          confirmButtonText: "Ok",
                          dangerMode: true,
                        })
                        .then((result) => {
                          setTimeout(() => {
                            setData(
                              data?.filter((meal) => meal?.id !== item?.id)
                            );
                            setOpenSnackbar(true);
                            setMessage("Deleted Successfully!");
                            setStatus("error");
                          }, 3000);
                        })
                    }
                  />
                </Box>
              )}
              <Box>
                <Box>Meal: {item?.title}</Box>
                <Box>Price: {item?.cost} SYP</Box>
              </Box>
              <Box>Restaurant: {item?.restaurant}</Box>
              <Box>{item?.description}</Box>
            </Box>
          ))
        ) : (
          <Typography className={mealClasses.noDataText}>Loading...</Typography>
        )}
      </Box>
      <MealDialog
        open={open}
        setOpen={setOpen}
        addNewMeal={addNewMeal}
        updatedItem={updatedItem}
        updateMeal={updateMeal}
        restaurants={restaurants}
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
