import { TraductionForm } from "../../components/TraductionForm";

export const OrthographyForm = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
      <TraductionForm title={'Observación'}/>
    </>
  );
};
