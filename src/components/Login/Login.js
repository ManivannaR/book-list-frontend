import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [enteredUserData, setEnteredUserData] = useState({});

  const handleChange = (e) => {
    setEnteredUserData({ ...enteredUserData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = enteredUserData.email;
    const res = await fetch(
      `https://booklist-10x-academy.onrender.com/login/${email}`
    );
    const data = await res.json();
    console.log(data);
    if (data.status === "Failed") {
      alert("Incorrect email or password!");
      navigate("/");
    } else if (data.data.password !== enteredUserData.password) {
      alert("Incorrect email or password!");
      navigate("/");
    } else {
      navigate("/books");
    }
  };
  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          required
          placeholder="Email"
          onChange={handleChange}
          name="email"
        />
        <input
          type="text"
          required
          placeholder="Password"
          onChange={handleChange}
          name="password"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
