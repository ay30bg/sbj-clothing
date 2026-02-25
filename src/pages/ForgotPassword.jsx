// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import "../styles/auth.css";

// export default function ForgotPassword() {
//   const [email, setEmail] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");

//   // ✅ Dynamic page title
//   useEffect(() => {
//     document.title = "Forgot Password - SBJ Clothing";
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");
//     setSuccess("");

//     setTimeout(() => {
//       if (!email) {
//         setError("Please enter your email address.");
//       } else {
//         // Simulate API request
//         setSuccess("Password reset link has been sent to your email.");
//         setEmail("");
//       }

//       setLoading(false);
//     }, 1000);
//   };

//   return (
//     <div className="login-page">
//       <div className="login-card">
//         <h2>Forgot Password</h2>

//         {error && <div className="error-message">{error}</div>}
//         {success && <div className="success-message">{success}</div>}

//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label>Email *</label>
//             <input
//               type="email"
//               placeholder="Enter your registered email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>

//           <button className="login-btn" type="submit" disabled={loading}>
//             {loading ? <span className="spinner"></span> : "Send Reset Link"}
//           </button>
//         </form>

//         <div className="auth-links">
//           <p className="forgot-password-link">
//             Remember your password? <Link to="/login">Back to Sign In</Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );

// }

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/auth.css";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    document.title = "Forgot Password - SBJ Clothings";
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/api/auth/forgot-password`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Request failed");
      }

      setSuccess("Password reset link sent successfully.");
      setEmail("");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Forgot Password</h2>

        {error && <div className="error-message">{error}</div>}
        {success && <div className="success-message">{success}</div>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email *</label>
            <input
              type="email"
              placeholder="Enter your registered email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <button className="login-btn" type="submit" disabled={loading}>
            {loading ? <span className="spinner"></span> : "Send Reset Link"}
          </button>
        </form>

        <div className="auth-links">
          <p>
            Remember your password? <Link to="/login">Back to Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
