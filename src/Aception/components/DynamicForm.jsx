import React, { useState, useEffect } from "react";

const DynamicForm = ({ data }) => {
  const [formData, setFormData] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState({});

  useEffect(() => {
    setFormData(data);
    console.log(data);
  }, [data]);

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
          <div key={key}>
            <label>{option.name}</label>
            <input
              type="text"
              value={selectedValue || ""}
              onChange={(e) => handleChange(e, { id: key })}
            />
          </div>
        );
      case "checkbox":
        return (
          <div key={key}>
            <label>{option.name}</label>
            <input
              type="checkbox"
              checked={!!selectedValue}
              onChange={(e) => handleChange(e, { id: key })}
            />
          </div>
        );
      case "file":
        return (
          <div key={key}>
            <label>{option.name}</label>
            <input type="file" onChange={(e) => handleChange(e, { id: key })} />
          </div>
        );
      case "number":
        return (
          <div key={key}>
            <label>{option.name}</label>
            <input
              type="number"
              value={selectedValue || ""}
              onChange={(e) => handleChange(e, { id: key })}
            />
          </div>
        );
      case "select":
        return (
          <div key={key}>
            <label>{option.name}</label>
            <select
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
          <div key={key}>
            <label>{option.name}</label>
            <input
              type="date"
              value={selectedValue || ""}
              onChange={(e) => handleChange(e, { id: key })}
            />
          </div>
        );
      default:
        return (
          <div key={key}>
            <label>{option.name}</label>
            <select
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

  return <div>{formData.map((option) => renderOptions(option))}</div>;
};

export default DynamicForm;
