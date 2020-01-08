import React, { useState, useEffect } from "react";
import { getUserProfile } from "../lib/auth";
import axios from "axios";

export default function Profile() {
  const [user, setUser] = useState("");

  useEffect(() => {
    getUserProfile().then(user => {
      console.log("user");

      setUser(user);
    });
  });

  return <pre>{JSON.stringify(user, null, 2)}</pre>;
}
