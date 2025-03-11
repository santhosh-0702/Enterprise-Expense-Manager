import { useState } from "react";
import "./style.css"; // Import CSS file

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
  };

  return (
    <div className="login-container">
      <h2>Welcome!</h2>
      <p>Log in with your email and password</p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input-field"
          required
        />
        <input
          type="password"
          placeholder="Password (min 6 characters)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input-field"
          required
        />
        <button type="submit" className="login-btn">Log in</button>
      </form>
      <div className="divider">or</div>
      <button className="social-btn facebook-btn">🔵 Continue with Facebook</button>
      <button className="social-btn google-btn">⚪ Continue with Google</button>
      <p>Don't have an account? <a href="#">Sign up</a></p>
      <p>Forgot your password? <a href="#">Reset it</a></p>
    </div>
  );
};

export default Login;
