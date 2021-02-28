import React, { useState } from "react";
import Select from "react-select";

const SelectPicker = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const disableSelection = (state) => {
    if(state.isSelected)
      return false;
    else
      return true;
  }

  const options = [
    { value: 1, label: 'Budget', disabled:disableSelection, },
    { value: 2, label: 'Food allergies', disabled:disableSelection },
    { value: 3, label: 'Number of people', disabled:disableSelection },
    { value: 4, label: 'Special restrictions', disabled:disableSelection },
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
        className="control"
        styles = {customStyles}
        isMulti
        isSearchable
        defaultValue={selectedOption}
        onChange={handleChange}
        options={options}
        isOptionDisabled={(option) => option.isdisabled}
      />
    </div>
  );
}

export default SelectPicker;