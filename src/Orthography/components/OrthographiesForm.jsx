import { useState } from "react";
import { OrthographyForm } from "./OrthographyForm";

export const OrthographiesForm = ({ formList, setFormList }) => {
  const [activeFormIndex, setActiveFormIndex] = useState([]);

  const togglePanel = (index) => {
    activeFormIndex[index] = !activeFormIndex[index];
    setActiveFormIndex([...activeFormIndex]);
  };
  const handleRemoveForm = (index) => {
    const newList = [...formList];
    newList.splice(index, 1);
    setFormList(newList);
    const newActiveFormIndex = [...activeFormIndex];
    newActiveFormIndex.splice(index, 1);
    setActiveFormIndex(newActiveFormIndex);
  };

  const handleFormChange = (index, newData) => {
    const newList = [...formList];
    newList[index] = newData;
    setFormList(newList);
  };

  const handleAddForm = (e) => {
    e.preventDefault();
    setFormList([
      ...formList,
      {
        syllabic_division: "",
        observation: "",
        lema: null,
      },
    ]);
    setActiveFormIndex([...activeFormIndex, true]);
  };

  return (
    <>
      <button
        onClick={handleAddForm}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Agregar Ortografía
      </button>
      {formList.length > 0 ? <div>Ortografías</div> : <></>}
      {formList.map((formData, index) => (
        <div key={index} className="w-full">
          <div
            key={index}
            className="flex justify-between items-center cursor-pointer px-6 bg-gray-500"
            onClick={() => togglePanel(index)}
          >
            <h2 className="text-2xl font-bold text-dark py-3 text-white">
              Formulario Ortografía {index + 1}
            </h2>
            <div className="flex items-center">
              <button
                onClick={handleRemoveForm}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Eliminar Formulario {index + 1}
              </button>
              <div className="pl-1">
                <svg
                  className={`w-5 h-5 ${
                    activeFormIndex[index] ? "transform rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>
          {activeFormIndex[index] && (
            <div className="px-6 py-4 bg-gray-50">
              <OrthographyForm
                formData={formData}
                setFormData={(newData) => handleFormChange(index, newData)}
              />
            </div>
          )}
        </div>
      ))}
    </>
  );
};
