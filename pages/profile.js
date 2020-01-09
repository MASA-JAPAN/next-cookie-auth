import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import axios from "axios";

export default function Profile() {
  const [user, setUser] = useState("");

  useEffect(() => {
    const getUserProfile = async () => {
      const result = await axios("/api/profile");
      setUser(result);
    };
    getUserProfile();
  });

  return (
    <Layout title="Profile">
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </Layout>
  );
}
