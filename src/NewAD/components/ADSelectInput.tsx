// ADSelectInput
import React, { FC } from "react";

export interface ADSelectInputProps {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  options: any[];
  error?: string;
}

const ADSelectInput: FC<ADSelectInputProps> = (props) => {
  const { label, name, value, onChange, options, error } = props;

  return (
    <div
      style={{ borderRadius: 4, border: "solid 1px teal", marginBottom: 10 }}
    >
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

export default ADSelectInput;
