import React, { FC, ReactElement, useEffect, useState } from "react";
import TextInput from "./Inputs/TextInput";
import SelectInput from "./Inputs/SelectInput";

const options1 = [
  {
    value: "option-1",
    label: "Option 1"
  },
  {
    value: "option-2",
    label: "Option 2"
  },
  {
    value: "option-3",
    label: "Option 3"
  }
];

const options2 = [
  {
    value: "option-1",
    label: "Option 1"
  },
  {
    value: "option-2",
    label: "Option 2"
  },
  {
    value: "option-3",
    label: "Option 3"
  },
  {
    value: "option-4",
    label: "Option 4"
  }
];

export interface CompanyInformationSectionProps {
  values?: {};
  renderTextField?: (
    label: string,
    name: string,
    value: string,
    onChange: (value: string) => void,
    error?: string
  ) => ReactElement;
  renderNumberField?: (
    label: string,
    name: string,
    value: string,
    onChange: (value: string) => void,
    error?: string
  ) => ReactElement;
  renderSelectField?: (
    label: string,
    name: string,
    value: string,
    onChange: (value: string) => void,
    options: any[],
    error?: string
  ) => ReactElement;
}

const CompanyInformationSection: FC<CompanyInformationSectionProps> = (
  props
) => {
  const { renderTextField, renderSelectField } = props;

  const [displaySomeField, setDisplaySomeField] = useState<boolean>(false);
  const [value1, setValue1] = useState<string>("");
  const [value2, setValue2] = useState<string>("");
  const [value3, setValue3] = useState<string>("");
  const [value4, setValue4] = useState<string>("");
  const [internalError, setInternalError] = useState<string>("");

  useEffect(() => {
    if (value3 === options1[1].value) {
      setDisplaySomeField(true);
    } else {
      setDisplaySomeField(false);
    }
  }, [value3]);

  useEffect(() => {
    if (value3 === options1[2].value) {
      setInternalError("Please select another option.");
    } else {
      setInternalError("");
    }
  }, [value3]);

  return (
    <section style={{ marginBottom: 20 }}>
      <div>
        <TextInput
          value={value1}
          onChange={setValue1}
          label="Company info 1"
          name="comp-1"
        />
      </div>
      <div>
        {renderTextField ? (
          renderTextField(
            "Company info 2",
            "comp-2",
            value2,
            setValue2,
            internalError
          )
        ) : (
          <TextInput
            value={value2}
            onChange={setValue2}
            label="Company info 2"
            name="comp-2"
            error={internalError}
          />
        )}
      </div>

      <div>
        <SelectInput
          label="Simple select"
          name="comp-3"
          value={value3}
          onChange={setValue3}
          options={options1}
        />
      </div>

      {displaySomeField && (
        <div>
          {renderSelectField ? (
            renderSelectField(
              "Not so Simple select",
              "comp-4",
              value4,
              setValue4,
              options2
            )
          ) : (
            <SelectInput
              label="Not so Simple select"
              name="comp-4"
              value={value4}
              onChange={setValue4}
              options={options2}
            />
          )}
        </div>
      )}
    </section>
  );
};

export default CompanyInformationSection;
