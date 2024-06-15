import { useState } from "react";
import { TraductionForm } from "../../components/TraductionForm";

export const OrthographyForm = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  const handleAddTranslation = () => {
    setIsPopupVisible(true);
  };

  // "syllabic_division": "Prueba",
  // "observation": "test"
  return (
    <>
      <div>
        <label htmlFor="syllabic_division" className="block">
          División silábica
        </label>
        <input
          type="text"
          id="syllabic_division"
          name="syllabic_division"
          value={formData.syllabic_division}
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300  text-sm rounded-lg  block w-full p-2.5"
          placeholder="Ingrese división silábica"
          required
        />
        <button
          type="button"
          className="ml-2 px-4 py-2 w-90p bg-blue-500 text-white rounded"
          onClick={() => handleAddTranslation()}
        >
          Seleccionar
        </button>
      </div>
      <div>
        <label htmlFor="type_pronunciation" className="block">
          Variante gráfica
        </label>
        <input
          type="text"
          id="syllabic_division"
          name="syllabic_division"
          value={formData.syllabic_division}
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300  text-sm rounded-lg  block w-full p-2.5"
          placeholder="Ingrese división silábica"
          required
        />
      </div>
      <div>
        <label htmlFor="observation" className="block">
          Observación
        </label>
        <input
          type="text"
          id="observation"
          name="observation"
          value={formData.observation}
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300  text-sm rounded-lg  block w-full p-2.5"
          placeholder="Ingrese observación"
          required
        />
      </div>
      <TraductionForm title={"Observación"} />
      {isPopupVisible && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <div className="bg-white p-6 rounded-lg shadow-lg z-10">
            <label className="block text-sm font-medium text-gray-700 mr-2">
              Lema
            </label>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-blue-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              // value={selectedValue || ""}
              // onChange={(e) => handleChange(e, { id: key })}
            />
            <button
              type="button"
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
              onClick={handleClosePopup}
            >
              Guardar
            </button>
            <button
              type="button"
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
              onClick={handleClosePopup}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </>
  );
};
