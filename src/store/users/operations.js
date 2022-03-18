import { createSearchParams } from "react-router-dom";
import { addVal } from "./usersSlice";

const handleData = (state) => (dispatch) => {
  dispatch(addVal(state));
};
export default {
  handleData,
};
