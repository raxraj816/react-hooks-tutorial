import { useForm } from "./useForm";

const App = () => {
  const [values, handleChange] = useForm({ email: "", password: "" });
  return (
    <>
      <input name="email" value={values.email} onChange={handleChange} />
      <input
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
      />
    </>
  );
};

export default App;
