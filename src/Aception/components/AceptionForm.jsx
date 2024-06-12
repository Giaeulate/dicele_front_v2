import { useState } from "react";
import { useSelector } from "react-redux";
import DynamicForm from "./DynamicForm";

const filterDataByWordSubGroupWord = (data, value) => {
  try {
    return data.filter((item) => `${item.group}` === `${value}`);
  } catch (error) {
    console.error("Error filtering data:", error);
    return [];
  }
};

export const AceptionForm = ({ formData, setFormData }) => {
  const { data } = useSelector((state) => state.wordType);
  const subgroupwords = useSelector((state) => state.subGroupWord);
  const mcerData = ["A1", "A2", "B1", "B2", "C1", "C2"];
  const [subGroupWordsState, setSubGroupWordsState] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (name === "word_type") {
      const filteredSubGroups = filterDataByWordSubGroupWord(
        subgroupwords.data,
        value
      );
      setSubGroupWordsState(filteredSubGroups);
    }
  };

  return (
    <>
      <div>
        <label htmlFor="name" className="block">
          Acepción
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5"
          placeholder="Ingrese acepción"
          required
        />
      </div>
      <div>
        <label htmlFor="file" className="block">
          Archivo
        </label>
        <input type="file" id="file" name="file" />
      </div>

      <div>
        <label htmlFor="mcer" className="block">
          Nivel MCER
        </label>
        <select
          value={formData.mcer}
          id="mcer"
          name="mcer"
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5"
          required
        >
          {mcerData.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="word_type" className="block">
          Tipo de palabra
        </label>
        <select
          value={formData.word_type}
          id="word_type"
          name="word_type"
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5"
          required
        >
          <option key={0} value="">
            {"Seleccione una opción"}
          </option>
          {data.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
      {subGroupWordsState.length > 0 && (
        <DynamicForm data={subGroupWordsState} />
      )}
    </>
  );
};
