import { FieldType } from "../types/form.types";

interface PagePropsType {
  fields: FieldType[];
}
export default function Page({ fields }: PagePropsType) {
  return <div>Page</div>;
}
