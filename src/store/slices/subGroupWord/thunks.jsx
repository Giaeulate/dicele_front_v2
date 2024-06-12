import {
  setDataSubGroupWord,
  startLoadingSubGroupWord,
} from "./subGroupWordSlice";
import axios from "axios";
import { url } from "../../../environment/environment";

export const getSubGroupWords = () => {
  return async (dispatch, getState) => {
    dispatch(startLoadingSubGroupWord());
    try {
      const response = await axios.get(url + "/core/sub_group_word/");
      dispatch(setDataSubGroupWord([...response.data]));
    } catch (error) {
      dispatch(setDataSubGroupWord([]));
    }
  };
};
