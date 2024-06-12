import { useDispatch } from "react-redux";
import { AppRouter } from "./router/AppRouter";
import { getSubGroupWords, getTypePronunciation, getWordTypes } from "./store";
import { useEffect } from "react";

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTypePronunciation());
    dispatch(getWordTypes());
    dispatch(getSubGroupWords());
  }, []);

  return (
    <>
      <AppRouter />
    </>
  );
};
