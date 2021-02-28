import React, { useState } from "react";
import Select from "react-select";

const SelectPicker = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { value: 1, label: 'Budget', disabled:true, },
    { value: 2, label: 'Food allergies' },
    { value: 3, label: 'Number of people' },
    { value: 4, label: 'Special restrictions' },
  ];

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      width: "201px",
      align: "center",
      marginTop: "5%",
      margin: "auto",
    }),
    control: (provided) => ({
      ...provided,
      margin: "auto",
      marginTop: "5%",
      width: "201px",

    })
  }

  const handleChange = (e) => {
    setSelectedOption(e);
  }

  return (
    <div class="App">
      <Select
        styles = {customStyles}
        isMulti
        isSearchable
        defaultValue={selectedOption}
        onChange={handleChange}
        options={options}
        isOptionDisabled={(option) => option.disabled}
      />
    </div>
  );
}

export default SelectPicker;