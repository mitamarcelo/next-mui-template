import React, { useReducer } from 'react';

import { StyledForm } from './FormBuilder.styles';

export interface IField {
  component: React.ElementType;
  params: {
    name: string;
    label?: string;
    helperText?: string;
    className?: string;
    required?: boolean;
    disabled?: boolean;
    type?: string;
    inputFormat?: string;
    inputType?: string;
    placeholder?: string;
  };
}

interface IFormBuilder {
  formStructure: IField[];
  actionButtons?: React.ReactNode;
  onSubmit: (formInput: Record<string, any>) => void;
  initialValues?: object;
}

const FormBuilder = ({ formStructure, actionButtons, onSubmit, initialValues }: IFormBuilder) => {
  const defaultInitialValues = {};

  formStructure.forEach((field) => {
    Object.assign(defaultInitialValues, { [field.params.name]: null });
  });

  const formInitialValues = initialValues || defaultInitialValues;

  const [formInput, setFormInput] = useReducer(
    (state: Record<string, any>, newState: Record<string, any>) => ({
      ...state,
      ...newState,
    }),
    formInitialValues
  );

  const handleInput = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;
    setFormInput({ [name]: value });
  };

  const handleDatePicker = (fieldName: string, date: Date) => {
    setFormInput({ [fieldName]: date });
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    onSubmit(formInput);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      {formStructure.map((field) => {
        const Component = field.component;
        const fieldName = field.params.name;
        return (
          <Component
            key={fieldName}
            {...field.params}
            defaultValue={formInput[fieldName]}
            onChange={
              field.params.inputType === 'datepicker'
                ? (value: Date) => handleDatePicker(fieldName, value)
                : handleInput
            }
          />
        );
      })}
      {actionButtons ? actionButtons : null}
    </StyledForm>
  );
};

export default FormBuilder;
