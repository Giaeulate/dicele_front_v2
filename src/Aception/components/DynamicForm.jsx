import React, { useState, useEffect } from "react";

const DynamicForm = ({ data }) => {
  const [formData, setFormData] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState({});

  useEffect(() => {
    setFormData(data);
  }, [data]);

  const handleChange = (e, option) => {
    const { value } = e.target;
    setSelectedOptions((prevState) => ({
      ...prevState,
      [option.id]: value,
    }));
  };

  const renderOptions = (option, parentKey = "") => {
    const key = `${parentKey}${option.id}`;
    const selectedValue = selectedOptions[key];
    const selectedOption = option.options?.find(
      (opt) => opt.id.toString() === selectedValue
    );

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
  };

  return <div>{formData.map((option) => renderOptions(option))}</div>;
};

export default DynamicForm;
