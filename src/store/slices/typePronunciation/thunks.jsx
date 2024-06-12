import {
  setDataTypePronunciation,
  startLoadingTypePronunciation,
} from "./typePronunciationSlice";
import axios from "axios";
import { url } from "../../../environment/environment";

export const getTypePronunciation = () => {
  return async (dispatch, getState) => {
    dispatch(startLoadingTypePronunciation());
    try {
      const response = await axios.get(url + "/core/type_pronunciation/");
      dispatch(setDataTypePronunciation([...response.data]));
    } catch (error) {
      dispatch(setDataTypePronunciation([]));
    }
  };
};
