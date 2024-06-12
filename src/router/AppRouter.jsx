import { Route, Routes } from "react-router-dom";
import { LemaFormPage } from "../Lema/pages/LemaFormPage";
import { MainPage } from "../main/MainPage";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="lema" element={<LemaFormPage />}></Route>
      </Routes>
    </>
  );
};
