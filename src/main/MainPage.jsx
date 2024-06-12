import { useState } from "react";
import { CustomCloseAlert, CustomLoadingAlert } from "../ui/helpers";
import { saveLemaApi } from "../Lema/api/LemaApi";
import { LayoutForm } from "../ui";
import { PronunciationForm } from "../Pronunciation/components/PronunciationForm";
import { LemaFormPage } from "../Lema/pages/LemaFormPage";
import { PronunciationsForm } from "../Pronunciation/components/PronunciationsForm";
import { OrthographyForm } from "../Orthography/components/OrthographyForm";
import { OrthographiesForm } from "../Orthography/components/OrthographiesForm";
import { AceptionsForm } from "../Aception/components/AceptionsForm";

export const MainPage = () => {
  const [formLema, setFormLema] = useState({
    name: "",
    regular_form: "",
  });

  const [formPronounciationList, setFormPronounciationList] = useState([]);
  const [formOrthographyList, setFormOrthographyList] = useState([]);
  const [formAceptionList, setformAceptionList] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formPronounciationList)
    // console.log(formOrthographyList)
    console.log(formAceptionList)

    // await CustomLoadingAlert({});
    // const responseLema = await saveLemaApi(formDataPronounciation);
    // CustomCloseAlert();
    // if (responseLema !== null && responseLema['status'] === false) {
    //     CustomLoadingAlert({
    //         isError: true,
    //         subtitleError: responseLema.message,
  };

  return (
    <>
      <LayoutForm
        handleSubmit={handleSubmit}
        textButton="Enviar"
        children={
          <>
            <LemaFormPage formData={formLema} setFormData={setFormLema} />
            <PronunciationsForm
              formList={formPronounciationList}
              setFormList={setFormPronounciationList}
            />
            <div></div>
            <OrthographiesForm
              formList={formOrthographyList}
              setFormList={setFormOrthographyList}
            />
            <div></div>
            <AceptionsForm
              formList={formAceptionList}
              setFormList={setformAceptionList}
            />
          </>
        }
      />
    </>
  );
};
