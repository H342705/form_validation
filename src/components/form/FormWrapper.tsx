import Form from "./Form";
import { AuthProvider } from "./FormContext";

const FormWrapper = () => {
  return (
    <main className="wrapper">
      {/* heading  */}
      <h1 className="text-3xl pt-5">Registration Form</h1>
      {/* form for taking inputs  */}
      <AuthProvider>
        <Form />
      </AuthProvider>
    </main>
  );
};
export default FormWrapper;
