import userForm from "./formConfigs/user-form.json";
import FormWizard from "./components/FormWizard";

function App() {
  return <FormWizard form={userForm} />;
}

export default App;
