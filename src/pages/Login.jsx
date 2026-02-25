import React, { useState, useEffect } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { useAuth } from "../context/AuthContext";
import "../styles/auth.css";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  // ✅ Dynamic page title
  useEffect(() => {
    document.title = "Sign In - SBJ Clothings";
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Login function
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    setTimeout(() => {
      if (!email || !password) {
        setError("Please fill in all fields");
      } else {
        // Save user globally
        login({ email }, rememberMe);
        navigate("/");
      }
      setLoading(false);
    }, 1000);
  };

  // Google login
  const handleGoogleLogin = (credentialResponse) => {
    if (credentialResponse) {
      login({ email: "googleuser@example.com" }, true);
      navigate("/");
    } else {
      setError("Google login failed.");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Sign In</h2>

        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email *</label>
            <input
              type="text"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group password-group">
            <label>Password *</label>
            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          <div className="form-footer">
            <label className="remember-me">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              Remember me
            </label>

            <Link to="/forgot-password" className="forgot-link">
              Forgot Password?
            </Link>
          </div>

          <button className="login-btn" type="submit" disabled={loading}>
            {loading ? <span className="spinner"></span> : "Sign In"}
          </button>
        </form>

        <div className="divider">
          <span>or</span>
        </div>

        <div className="social-login">
          <GoogleLogin
            onSuccess={handleGoogleLogin}
            onError={() => setError("Google login failed.")}
          />
        </div>

        <div className="auth-links">
          <p>
            Not a member? <Link to="/signup">Create your account</Link>
          </p>
        </div>
      </div>
    </div>
  );
}