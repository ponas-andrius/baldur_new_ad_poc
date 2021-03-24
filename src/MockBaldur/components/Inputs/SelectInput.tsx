import React, { FC } from "react";

export interface SelectInputProps {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  options: any[];
  error?: string;
}

const SelectInput: FC<SelectInputProps> = (props) => {
  const { label, name, value, onChange, options, error } = props;

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <select
        name={name}
        id={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <div style={{ color: "red" }}>{error}</div>}
    </div>
  );
};

export default SelectInput;
