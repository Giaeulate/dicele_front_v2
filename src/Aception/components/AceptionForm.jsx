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

  const [clasificationState, setClasificationState] = useState([]);
  const [morphologyState, setMorphologyState] = useState([]);
  const [sintaxisState, setSintaxisState] = useState([]);
  const [pragmaticaState, setPragmaticaState] = useState([]);
  const [culturaState, setCulturaState] = useState([]);
  const [examplesState, setExamplesState] = useState([]);

  const tabData = [
    {
      id: "0",
      label: "Clasificación",
      content: (
        <>
          {clasificationState.length > 0 && (
            <DynamicForm data={clasificationState} />
          )}
        </>
      ),
    },
    {
      id: "1",
      label: "Morfología",
      content: (
        <>
          {morphologyState.length > 0 && <DynamicForm data={morphologyState} />}
        </>
      ),
    },
    {
      id: "2",
      label: "Sintaxis",
      content: (
        <>{sintaxisState.length > 0 && <DynamicForm data={sintaxisState} />}</>
      ),
    },
    {
      id: "3",
      label: "Pragmática",
      content: (
        <>
          {pragmaticaState.length > 0 && <DynamicForm data={pragmaticaState} />}
        </>
      ),
    },
    {
      id: "4",
      label: "Cultura",
      content: (
        <>{culturaState.length > 0 && <DynamicForm data={culturaState} />}</>
      ),
    },
    {
      id: "5",
      label: "Ejemplos",
      content: (
        <>{examplesState.length > 0 && <DynamicForm data={examplesState} />}</>
      ),
    },
  ];

  const [activeTab, setActiveTab] = useState(tabData[0].id);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (name === "word_type") {
      const filteredSubGroups = filterDataByWordSubGroupWord(
        subgroupwords.data,
        value
      );
      setClasificationState(
        filteredSubGroups.filter((e) => e.category === "clasificacion")
      );
      setMorphologyState(
        filteredSubGroups.filter((e) => e.category === "morfologia")
      );
      setSintaxisState(
        filteredSubGroups.filter((e) => e.category === "sintaxis")
      );
      setPragmaticaState(
        filteredSubGroups.filter((e) => e.category === "pragmatica")
      );
      setCulturaState(
        filteredSubGroups.filter((e) => e.category === "cultura")
      );
      setExamplesState(
        filteredSubGroups.filter((e) => e.category === "ejemplos")
      );
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
      {formData.word_type !== null && formData.word_type.length > 0 && (
        <div className="w-full">
          <div className="flex justify-center border-b border-gray-300">
            {tabData.map((tab) => (
              <button
                key={tab.id}
                className={`flex-1 text-center px-4 py-2 -mb-px text-sm font-medium text-gray-600 border-b-2 focus:outline-none ${
                  activeTab === tab.id
                    ? "border-blue-500 text-blue-500"
                    : "border-transparent hover:text-blue-500 hover:border-blue-500"
                }`}
                onClick={() => handleTabClick(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="p-4">
            {tabData.map(
              (tab) =>
                activeTab === tab.id && (
                  <div key={tab.id} className="tab-content">
                    {tab.content}
                  </div>
                )
            )}
          </div>
        </div>
      )}
      {/* clasificationState morphologyState sintaxisState pragmaticaState
      culturaState examplesState */}
      {/* {subGroupWordsState.length > 0 && (
        <DynamicForm data={subGroupWordsState} />
      )} */}
    </>
  );
};
