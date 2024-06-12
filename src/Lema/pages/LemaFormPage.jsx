export const LemaFormPage = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div>
        <label htmlFor="name" className="block">
          Lema
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300  text-sm rounded-lg  block w-full p-2.5"
          placeholder="Ingrese lema"
          required
        />
      </div>
      <div>
        <label htmlFor="name" className="block">
          Forma regular
        </label>
        <input
          type="text"
          id="regular_form"
          name="regular_form"
          value={formData.regular_form}
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300  text-sm rounded-lg  block w-full p-2.5"
          placeholder="Ingrese forma regular"
          required
        />
      </div>
    </>
  );
};
