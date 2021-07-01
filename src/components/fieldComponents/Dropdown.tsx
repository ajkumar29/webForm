import "./Dropdown.css";
import { DropdownFieldType } from "../../types/form.types";

interface DropdownPropsType {
  fieldProps: DropdownFieldType;
  onChange: (arg0: string) => void;
}

export default function Dropdown({ fieldProps, onChange }: DropdownPropsType) {
  const { data = [], label, placeholderText = "", required, id } = fieldProps;
  return (
    <div className="dropdown">
      <label htmlFor={`dropdown_${id}`}>
        {label}
        {required && "*"}
      </label>
      <select
        {...(required && { required: true })}
        defaultValue=""
        onChange={(e) => onChange(e.target.value)}
        className="custom-select"
        id={`dropdown_${id}`}
        data-testid="select"
      >
        <option value="" hidden disabled>
          {placeholderText}
        </option>
        {data.map((option) => (
          <option key={`option_${option}`} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
