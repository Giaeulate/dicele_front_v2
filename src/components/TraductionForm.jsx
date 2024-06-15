export const TraductionForm = ({ title }) => {
  const data = [
    {
      id: 1,
      name: "Inglés",
    },
    {
      id: 2,
      name: "Coreano",
    },
    {
      id: 3,
      name: "Alemán",
    },
  ];
  return (
    <>
      {/* <div>
        <label htmlFor="variant_observation" className="block">
          Idioma traducción
        </label>
        <select
          //   value={formData.type_pronunciation}
          id="type_pronunciation1"
          name="type_pronunciation1"
          //   onChange={handleChange}
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
      </div> */}
      <div>
        <label htmlFor="variant_observation" className="block">
          Traducción {title} - Coreano
        </label>
        <input
          type="text"
          id="variant_observation1"
          name="variant_observation1"
          //   value={formData.variant_observation}
          //   onChange={handleChange}
          className="bg-gray-50 border border-gray-300  text-sm rounded-lg  block w-full p-2.5"
          placeholder="Ingrese traducción"
          required
        />
        <button
          type="button"
          className="ml-2 px-4 py-2 w-90p bg-blue-500 text-white rounded"
          // onClick={() => handleAddTranslation()}
        >
          Seleccionar Idioma
        </button>
        {/* <label htmlFor="variant_observation" className="block">
          Traducción {title} - Inglés
        </label>
        <input
          type="text"
          id="variant_observation1"
          name="variant_observation1"
          //   value={formData.variant_observation}
          //   onChange={handleChange}
          className="bg-gray-50 border border-gray-300  text-sm rounded-lg  block w-full p-2.5"
          placeholder="Ingrese traducción"
          required
        />
        <button
          type="button"
          className="ml-2 px-4 py-2 w-90p bg-blue-500 text-white rounded"
          // onClick={() => handleAddTranslation()}
        >
          Seleccionar Idioma
        </button> */}
      </div>
    </>
  );
};
