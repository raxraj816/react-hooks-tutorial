import { useForm } from "./useForm";

const App = () => {
  const [values, handleChange] = useForm({ email: "", password: "" });
  // const [values2, handleChange2] = useForm({ firstName: "", lastName: "" });

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
