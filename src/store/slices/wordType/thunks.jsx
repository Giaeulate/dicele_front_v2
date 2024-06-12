import { setDataWordType, startLoadingWordType } from "./wordTypeSlice";
import axios from "axios";
import { url } from "../../../environment/environment";

export const getWordTypes = () => {
  return async (dispatch, getState) => {
    dispatch(startLoadingWordType());
    try {
      const response = await axios.get(url + "/core/word_type/");
      dispatch(setDataWordType([...response.data]));
    } catch (error) {
      dispatch(setDataWordType([]));
    }
  };
};
