import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
} from "@mui/material";
import clsx from "clsx";
import useStyles from "../../styles/components/card/card";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import swal from "sweetalert2";
import moment from "moment";

export default function ToDoCard(props) {
  const cardClasses = useStyles();
  let { title, description, id, image, openAt } = props?.item;
  let { cardAction, setData, data, setUpdatedItem, setOpen, item } = props;

  return (
    <Card className={cardClasses.card} key={id}>
      <Typography
        component="span"
        className={clsx(cardClasses.flag, cardClasses.statusFlag)}
      >
        {"online"}
      </Typography>
      <Typography
        component="span"
        className={clsx(cardClasses.flag, cardClasses.openFlag)}
      >
        {"open from "}
        {/* {openAt} */}
        {moment(new Date(openAt))?.format("HH:mm")}
      </Typography>
      <CardMedia component="img" height="194" image={image} alt="Restaurant" />
      <CardContent>
        <Box display="flex" justifyContent={"space-between"}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className={cardClasses.title}
          >
            {title}
          </Typography>
        </Box>
        <Typography
          variant="body2"
          color="text.secondary"
          className={cardClasses.description}
        >
          {description}
        </Typography>
      </CardContent>
      {cardAction && (
        <CardActions>
          <FiEdit
            className={cardClasses.icon}
            onClick={(e) => {
              setUpdatedItem(item);
              setOpen(true);
            }}
          />
          <AiOutlineDelete
            className={cardClasses.icon}
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
                    setData(data?.filter((item) => item?.id !== id));
                  }, 3000);
                })
            }
          />
        </CardActions>
      )}
    </Card>
  );
}
