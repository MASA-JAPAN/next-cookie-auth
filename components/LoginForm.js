import React, { useState } from "react";
import loginUser from "../lib/auth";
import Router from "next/router";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

  const handleSubmit = event => {
    event.preventDefault();
    loginUser(email, password).then(() => {
      Router.push("/profile");
    });
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
      <button type="submit">Submit</button>
    </form>
  );
}
