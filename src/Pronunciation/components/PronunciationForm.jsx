import { useSelector } from "react-redux";
import { TraductionForm } from "../../components/TraductionForm";
import { useState } from "react";

export const PronunciationForm = ({ formData, setFormData }) => {
  const [seen, setSeen] = useState(false);
  const { data } = useSelector((state) => state.typePronunciation);

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

  function togglePop() {
    setSeen(!seen);
  }
  // "id": 1,
  // "name": "Prueba",
  // "variant": "test",
  // "observation": "test",
  // "prosodic_variant": "test",
  // "variant_observation": "test",
  // "type_pronunciation": 1,
  // "lema": "Prueba"
  return (
    <>
      <div>
        <label htmlFor="name" className="block">
          Pronunciación
        </label>
        <input type="file" />
        {/* <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300  text-sm rounded-lg  block w-full p-2.5"
          placeholder="Ingrese pronunciación"
          required
        /> */}
      </div>
      <div>
        <label htmlFor="type_pronunciation" className="block">
          Tipo de pronunciación
        </label>
        <select
          value={formData.type_pronunciation}
          id="type_pronunciation"
          name="type_pronunciation"
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300  text-sm rounded-lg  block w-full p-2.5"
          required
        >
          <option key={0} value={null}>
            {"Seleccione una opción"}
          </option>
          {data.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="variant" className="block">
          Variante
        </label>
        <input
          onClick={togglePop}
          type="text"
          id="variant"
          name="variant"
          value={formData.variant}
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300  text-sm rounded-lg  block w-full p-2.5"
          placeholder="Ingrese variante"
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
      <div>
        <label htmlFor="prosodic_variant" className="block">
          Variante prosódica
        </label>
        <input
          type="text"
          id="prosodic_variant"
          name="prosodic_variant"
          value={formData.prosodic_variant}
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300  text-sm rounded-lg  block w-full p-2.5"
          placeholder="Ingrese variante prosódica"
          required
        />
        <button
          type="button"
          className="ml-2 px-4 py-2 w-90p bg-blue-500 text-white rounded"
          onClick={() => handleAddTranslation()}
        >
          Seleccionar Remisión
        </button>
      </div>
      <div>
        <label htmlFor="variant_observation" className="block">
          Observación variante prosódica
        </label>
        <input
          type="text"
          id="variant_observation"
          name="variant_observation"
          value={formData.variant_observation}
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300  text-sm rounded-lg  block w-full p-2.5"
          placeholder="Ingrese observación variante prosódica"
          required
        />
      </div>
      <TraductionForm title={"Observación variante prosódica"} />
    </>
  );
};
