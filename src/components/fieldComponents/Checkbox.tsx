import { CheckboxFieldType } from "../../types/form.types";

interface CheckboxPropsType {
  fieldProps: CheckboxFieldType;
  onChange: (arg0: boolean) => void;
}

export default function Checkbox({ fieldProps, onChange }: CheckboxPropsType) {
  const { id, required, label } = fieldProps;

  return (
    <div className="form-check">
      <input
        {...(required && { required: true })}
        onChange={(e) => onChange(e.target.checked)}
        className="form-check-input"
        type="checkbox"
        value={id}
        id={`checkbox_${id}`}
      />
      <label className="form-check-label" htmlFor={`checkbox_${id}`}>
        {label}
        {required && "*"}
      </label>
    </div>
  );
}
