import React, { useState, useEffect } from "react";

const DynamicForm = ({ data, selectedOptions, setSelectedOptions }) => {
  const handleChange = (e, option) => {
    const { value, type, checked, files } = e.target;
    const inputValue =
      type === "checkbox" ? checked : type === "file" ? files[0] : value;
    setSelectedOptions((prevState) => ({
      ...prevState,
      [option.id]: inputValue,
    }));
  };

  const renderOptions = (option, parentKey = "") => {
    const key = `${parentKey}${option.id}`;
    const selectedValue = selectedOptions[key];
    const selectedOption = option.options?.find(
      (opt) => opt.id.toString() === selectedValue
    );

    switch (option.type) {
      case "text":
        return (
          <div key={key} className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              {option.name}
            </label>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              value={selectedValue || ""}
              onChange={(e) => handleChange(e, { id: key })}
            />
          </div>
        );
      case "checkbox":
        return (
          <div key={key} className="mb-4 flex items-center">
            <input
              type="checkbox"
              className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              checked={!!selectedValue}
              onChange={(e) => handleChange(e, { id: key })}
            />
            <label className="ml-2 block text-sm font-medium text-gray-700">
              {option.name}
            </label>
          </div>
        );
      case "file":
        return (
          <div key={key} className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              {option.name}
            </label>
            <input
              type="file"
              className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
              onChange={(e) => handleChange(e, { id: key })}
            />
          </div>
        );
      case "number":
        return (
          <div key={key} className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              {option.name}
            </label>
            <input
              type="number"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              value={selectedValue || ""}
              onChange={(e) => handleChange(e, { id: key })}
            />
          </div>
        );
      case "select":
        return (
          <div key={key} className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
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
          </div>
        );
      case "date":
        return (
          <div key={key} className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              {option.name}
            </label>
            <input
              type="date"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              value={selectedValue || ""}
              onChange={(e) => handleChange(e, { id: key })}
            />
          </div>
        );
      default:
        return (
          <div key={key} className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
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
          </div>
        );
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      {data.map((option) => renderOptions(option))}
    </div>
  );
};

export default DynamicForm;
