import React, { useState, useEffect } from "react";
import axios from "axios";

const DynamicForm = () => {
  const [formData, setFormData] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/fields/");
      setFormData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

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
        <label>{option.label}</label>
        <select
          value={selectedValue || ""}
          onChange={(e) => handleChange(e, { id: key })}
        >
          <option value="">Select {option.label}</option>
          {option.options?.map((subOption) => (
            <option key={subOption.id} value={subOption.id}>
              {subOption.label}
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
