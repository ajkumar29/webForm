import "./PageHeader.css";

interface PageHeaderPropsType {
  selected: boolean;
  label: string;
  completed: boolean;
}

export default function PageHeader({
  selected,
  label,
  completed,
}: PageHeaderPropsType) {
  return (
    <div
      className={`header${selected ? " selected" : ""}${
        completed ? " completed" : ""
      }`}
    >
      {label}
    </div>
  );
}
