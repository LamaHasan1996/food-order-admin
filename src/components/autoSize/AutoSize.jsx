import TextareaAutosize from "@mui/base/TextareaAutosize";
import { Field } from "formik";
export default function CustomTextAutoSize(props) {
  return <Field component={TextareaAutosize} {...props} />;
}
