import React, { useEffect, useState } from "react";
import { useForm } from "./useForm";
// import { Hello } from "./Hello";
import { useFetch } from "./useFetch";

const App = () => {
  const [values, handleChange] = useForm({
    email: "",
    password: "",
    firstName: "",
  });
  // const [showHello, setShowHello] = useState(true);
  const [count, setCount] = useState(() =>
    JSON.parse(localStorage.getItem("count") ?? 0)
  );
  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count ?? 0));
  }, [count]);

  useEffect(() => {
    console.log("render");
  }, [values.firstName]);

  return (
    <div>
      <div>{!data && loading ? "loading..." : data}</div>
      <div>count: {count}</div>
      <button onClick={() => setCount((c) => c + 1)}>increment</button>
      <>
        {/* <button onClick={() => setShowHello(!showHello)}>toggle</button>
        {showHello && <Hello />} */}
        <input name="email" value={values.email} onChange={handleChange} />
        <input
          name="firstName"
          placeholder="first name"
          value={values.firstName}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
      </>
    </div>
  );
};

export default App;
