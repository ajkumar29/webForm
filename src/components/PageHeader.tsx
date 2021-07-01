import "./PageHeader.css";

interface PageHeaderPropsType {
  //boolean to indicate whether the current heading is the form being displayed
  selected: boolean;

  //label to display has heading
  title: string;

  //boolean to indicate if user has completed the page and moved onto next page
  completed: boolean;
}

export default function PageHeader({
  selected,
  title,
  completed,
}: PageHeaderPropsType) {
  return (
    <div
      className={`header${selected ? " selected" : ""}${
        completed ? " completed" : ""
      }`}
    >
      {title}
    </div>
  );
}
