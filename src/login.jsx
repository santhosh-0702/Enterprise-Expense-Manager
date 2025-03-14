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
//login container
<div className="login-container">
<button className="skip">Skip</button>
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
    <div className="social-buttons">
    <button className="facebook-btn">
        <img src="https://img.icons8.com/fluent/48/000000/facebook-new.png" alt="Facebook logo" />
    </button>
    <button className="google-btn">
        <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="Google logo" />
    </button>
    <button className="github-btn">
        <img src="https://img.icons8.com/material-rounded/48/000000/github.png" alt="GitHub logo" />
    </button>
    </div>

    <p>Don't have an account? <a href="signup.jsx">Sign up</a></p>
    <p>Forgot your password? <a href="#">Reset it</a></p>
</div>
);
};

export default Login;
