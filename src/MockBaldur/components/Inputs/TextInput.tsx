import React, { FC } from "react";

export interface TextInputProps {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

const TextInput: FC<TextInputProps> = (props) => {
  const { label, name, value, onChange, error } = props;

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {error && <div style={{ color: "red" }}>{error}</div>}
    </div>
  );
};

export default TextInput;
