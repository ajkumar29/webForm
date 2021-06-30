import { TextboxFieldType } from "../../types/form.types";

interface TextboxPropsType {
  fieldProps: TextboxFieldType;
  onChange: (arg0: string) => void;
}

export default function Textbox({ fieldProps, onChange }: TextboxPropsType) {
  const {
    label,
    required,
    validation = { type: "text" },
    placeholderText = "",
    id,
  } = fieldProps;
  const pattern = validation && validation.validRegex;
  const customValidationErrorMessage = validation && validation.errorMessage;

  return (
    <div className="form-group">
      <label htmlFor={`textbox_${id}`}>
        {label}
        {required && "*"}
      </label>
      <input
        {...(required && { required: true })}
        pattern={pattern}
        onChange={(e) => onChange(e.target.value)}
        type={validation.type}
        className="form-control"
        id={`textbox_${id}`}
        placeholder={placeholderText}
        title={customValidationErrorMessage}
      />
    </div>
  );
}
