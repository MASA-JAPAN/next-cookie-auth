import React, { useState } from "react";
import loginUser from "../lib/auth";
import Router from "next/router";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = event => {
    switch (event.target.name) {
      case "email":
        setEmail(event.target.value);
        console.log(email);

        break;
      case "password":
        setPassword(event.target.value);
        console.log(password);

        break;
      default:
        console.log("key not found");
    }
  };

  const showError = err => {
    console.error(err);
    const error = (err.response && err.response.data) || err.message;
    setError(error);
    setIsLoading(false);
  };

  const handleSubmit = event => {
    setIsLoading(true);
    event.preventDefault();
    loginUser(email, password)
      .then(() => {
        Router.push("/profile");
      })
      .catch(showError);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="email"
          name="email"
          placeholder="email"
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={handleChange}
        />
      </div>
      <button disabled={isLoading} type="submit">
        {isLoading ? "Sending" : "Submit"}
      </button>
      {error && <div>{error}</div>}
    </form>
  );
}
