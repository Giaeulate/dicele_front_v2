import axios from "axios";
import { url } from "../../environment/environment";

export const saveLemaApi = async (body) => {
  try {
    const response = await axios.post(url + "/core/lema/", body);
    return response.data;
  } catch (error) {
    const errorMessage = Object.entries(error.response.data)
      .map(([key, value]) => {
        const listText = value.join(", ");
        return `${listText}`;
      })
      .join("\n");
    const erroResponse = {
      status: false,
      message: errorMessage,
    };
    return erroResponse;
  }
};
