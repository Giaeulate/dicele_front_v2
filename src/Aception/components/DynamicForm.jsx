import React, { useState } from "react";

const DynamicForm = ({ data, selectedOptions, setSelectedOptions }) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [popupContent, setPopupContent] = useState("");

  const translationOptions = [
    {
      id: "1",
      name: "Inglés",
    },
    {
      id: "2",
      name: "Coreano",
    },
  ];

  const [selectedTranslation, setSelectedTranslation] = useState("");

  const handleChange = (e, option) => {
    const { value, type, checked, files } = e.target;
    const inputValue =
      type === "checkbox" ? checked : type === "file" ? files[0] : value;
    setSelectedOptions((prevState) => ({
      ...prevState,
      [option.id]: inputValue,
    }));
  };

  const handleSelectTranslation = (e) => {
    setSelectedTranslation(e.target.value);
  };

  const handleAddTranslation = (option) => {
    setPopupContent(`Seleccionar for ${option.name}`);
    setIsPopupVisible(true);
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
    setPopupContent("");
  };

  const renderOptions = (option, parentKey = "") => {
    const key = `${parentKey}${option.id}`;
    const selectedValue = selectedOptions[key];
    const selectedOption = option.options?.find(
      (opt) => opt.id.toString() === selectedValue
    );

    return (
      <div key={key} className="mb-4 flex items-center">
        {option.type === "text" && (
          <>
            <label className="block text-sm font-medium text-gray-700 mr-2">
              {option.name}
            </label>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              value={selectedValue || ""}
              onChange={(e) => handleChange(e, { id: key })}
            />
            {option.add_traduction && (
              <button
                type="button"
                className="ml-2 px-4 py-2 w-90p bg-blue-500 text-white rounded"
                onClick={() => handleAddTranslation(option)}
              >
                Seleccionar
              </button>
            )}
          </>
        )}
        {option.type === "checkbox" && (
          <>
            <input
              type="checkbox"
              className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              checked={!!selectedValue}
              onChange={(e) => handleChange(e, { id: key })}
            />
            <label className="ml-2 block text-sm font-medium text-gray-700">
              {option.name}
            </label>
            {option.add_traduction && (
              <button
                type="button"
                className="ml-2 px-4 py-2 w-90p bg-blue-500 text-white rounded"
                onClick={() => handleAddTranslation(option)}
              >
                Seleccionar
              </button>
            )}
          </>
        )}
        {option.type === "file" && (
          <>
            <label className="block text-sm font-medium text-gray-700 mr-2">
              {option.name}
            </label>
            <input
              type="file"
              className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
              onChange={(e) => handleChange(e, { id: key })}
            />
            {option.add_traduction && (
              <button
                type="button"
                className="ml-2 px-4 py-2 w-90p bg-blue-500 text-white rounded"
                onClick={() => handleAddTranslation(option)}
              >
                Seleccionar
              </button>
            )}
          </>
        )}
        {option.type === "number" && (
          <>
            <label className="block text-sm font-medium text-gray-700 mr-2">
              {option.name}
            </label>
            <input
              type="number"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              value={selectedValue || ""}
              onChange={(e) => handleChange(e, { id: key })}
            />
            {option.add_traduction && (
              <button
                type="button"
                className="ml-2 px-4 py-2 w-90p bg-blue-500 text-white rounded"
                onClick={() => handleAddTranslation(option)}
              >
                Seleccionar
              </button>
            )}
          </>
        )}
        {option.type === "select" && (
          <>
            <label className="block text-sm font-medium text-gray-700 mr-2">
              {option.name}
            </label>
            <select
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              value={selectedValue || ""}
              onChange={(e) => handleChange(e, { id: key })}
            >
              <option value="">Select {option.name}</option>
              {option.options?.map((subOption) => (
                <option key={subOption.id} value={subOption.id}>
                  {subOption.name}
                </option>
              ))}
            </select>
            {selectedOption &&
              selectedOption.options &&
              renderOptions(selectedOption, `${key}-`)}
            {option.add_traduction && (
              <button
                type="button"
                className="ml-2 px-4 py-2 w-90p bg-blue-500 text-white rounded"
                onClick={() => handleAddTranslation(option)}
              >
                Seleccionar
              </button>
            )}
          </>
        )}
        {option.type === "date" && (
          <>
            <label className="block text-sm font-medium text-gray-700 mr-2">
              {option.name}
            </label>
            <input
              type="date"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              value={selectedValue || ""}
              onChange={(e) => handleChange(e, { id: key })}
            />
            {option.add_traduction && (
              <button
                type="button"
                className="ml-2 px-4 py-2 w-90p bg-blue-500 text-white rounded"
                onClick={() => handleAddTranslation(option)}
              >
                Seleccionar
              </button>
            )}
          </>
        )}
      </div>
    );
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      {data.map((option) => renderOptions(option))}
      {isPopupVisible && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <div className="bg-white p-6 rounded-lg shadow-lg z-10">
            <select
              className="mt-4 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              value={selectedTranslation}
              onChange={handleSelectTranslation}
            >
              <option value="">Idioma</option>
              {translationOptions.map((translation) => (
                <option key={translation.id} value={translation.id}>
                  {translation.name}
                </option>
              ))}
            </select>
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
    </div>
  );
};

export default DynamicForm;
