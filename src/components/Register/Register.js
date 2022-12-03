import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:5000/register", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "content-type": "application/json",
      },
    });
    navigate("/");
  };

  return (
    <div className="register-container">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          required
          placeholder="Name"
          onChange={handleChange}
          name="name"
        />
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
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
