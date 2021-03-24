import React, { FC } from "react";
import { CompanyInformationSection } from "../../MockBaldur";

import ADTextInput from "../components/ADTextInput";
import ADSelectInput from "../components/ADSelectInput";

const mockResponse = {
  id: "10K",
  family: "CoReg",
  components: [
    {
      id: "CompanyInformationSection",
      description: "Company Information Section",
      order: 1
    },
    {
      id: "CompanyInformationSectionCustomRender",
      description: "Company Information Section",
      order: 2
    }
  ],
  exhibits: [
    {
      id: "T97",
      description: "exhibit type 97",
      fileformats: [
        {
          id: "pdf",
          description: "An Adobe PDF document - version 2.0 or higher"
        }
      ]
    }
  ]
};

const textInputRenderer = (label, name, value, onChange, error) => (
  <ADTextInput
    label={label}
    name={name}
    value={value}
    onChange={onChange}
    error={error}
  />
);

const selectInputRenderer = (label, name, value, onChange, options, error) => (
  <ADSelectInput
    label={label}
    name={name}
    value={value}
    onChange={onChange}
    options={options}
    error={error}
  />
);

const SubmissionHeader: FC = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      {mockResponse.components.map((comp) => {
        switch (comp.id) {
          case "CompanyInformationSection":
            return <CompanyInformationSection key={comp.id} />;
          case "CompanyInformationSectionCustomRender":
            return (
              <CompanyInformationSection
                key={comp.id}
                renderTextField={textInputRenderer}
                renderSelectField={selectInputRenderer}
              />
            );
          default:
            return null;
        }
      })}
      <button>Save</button>
    </form>
  );
};

export default SubmissionHeader;
