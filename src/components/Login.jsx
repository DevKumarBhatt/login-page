import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "admin@gmail.com" && password === "12345") {
      alert("Login Successful");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div style={styles.container}>
      <form style={styles.form} onSubmit={handleSubmit}>
        <h2>Login Page</h2>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />

        <button type="submit" style={styles.button}>
          Login
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f2f5",
  },

  form: {
    backgroundColor: "white",
    padding: "30px",
    borderRadius: "10px",
    width: "300px",
    boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
  },

  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
  },

  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "blue",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
};

export default Login;