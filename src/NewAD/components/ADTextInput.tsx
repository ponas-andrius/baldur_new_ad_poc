// ADTextInput
import React, { FC } from "react";

export interface ADTextInputProps {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

const ADTextInput: FC<ADTextInputProps> = (props) => {
  const { label, name, value, onChange, error } = props;

  return (
    <div
      style={{ borderRadius: 4, border: "solid 1px teal", marginBottom: 10 }}
    >
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

export default ADTextInput;
