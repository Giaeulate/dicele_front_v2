import { useState } from "react";
import { AceptionForm } from "./AceptionForm";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export const AceptionsForm = ({ formList, setFormList }) => {
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
        name: "",
        // "index": 1,
        mcer: "A1",
        // "image": "http://localhost:8000/core/meaning/vert.jpg",
        word_type: "",
        lema: "",
      },
    ]);
    setActiveFormIndex([...activeFormIndex, true]);
  };

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const items = [...formList];
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setFormList(items);
  };

  return (
    <>
      <button
        onClick={handleAddForm}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Agregar Acepción
      </button>
      <DragDropContext onDragEnd={onDragEnd}>
        {formList.length > 0 && (
          <Droppable droppableId="acepciones">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {formList.length > 0 ? <div>Acepciones</div> : null}
                {formList.map((formData, index) => (
                  <Draggable
                    key={index}
                    draggableId={`acepcion-${index}`}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <div key={index} className="w-full">
                          <div
                            className="flex justify-between items-center cursor-pointer px-6 bg-gray-500"
                            onClick={() => togglePanel(index)}
                          >
                            <h2 className="text-2xl font-bold text-dark py-3 text-white">
                              Formulario Acepción {index + 1}
                            </h2>
                            <div className="flex items-center">
                              <button
                                onClick={() => handleRemoveForm(index)}
                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                              >
                                Eliminar Formulario {index + 1}
                              </button>
                              <div className="pl-1">
                                <svg
                                  className={`w-5 h-5 ${
                                    activeFormIndex[index]
                                      ? "transform rotate-180"
                                      : ""
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
                              <AceptionForm
                                formData={formData}
                                setFormData={(newData) =>
                                  handleFormChange(index, newData)
                                }
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        )}
      </DragDropContext>
    </>
  );
};
